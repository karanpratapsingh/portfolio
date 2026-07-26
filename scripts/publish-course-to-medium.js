/**
 * Publish course to Medium.com
 *
 * This script publishes course to medium.com
 */

const usage = `Usage:
 node scripts/publish-course-to-medium.js <course-slug>
`;

const axios = require('axios');
const matter = require('gray-matter');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

/**
 * @type {Array<{ name: string, slug: string, section: string}>}
 */
const articles = [];

function verifyArgs() {
  const [slug, articleSlug] = process.argv.slice(2);

  if (!slug) {
    console.log('[error]: course slug is required as first argument.');
    console.log(usage);
    process.exit(1);
  }

  return [slug, articleSlug];
}

function getBody(course_slug, slug) {
  const path = `data/courses/${course_slug}/${slug}.mdx`;
  const content = fs.readFileSync(path);
  const frontmatter = matter(content.toString());

  // Replace direct static images with github links
  let body = frontmatter.content;

  body = body.replace(
    /\]\(\/static\/courses/g,
    '](https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses',
  );

  // Replace static links
  body = body.replace(
    new RegExp(`]\\(/courses/${course_slug}`, 'g'),
    `](https://karanpratapsingh.com/courses/${course_slug}`,
  );

  // Add footer
  body = `${body}

---

_This article is part of my open-source [Go Course](https://github.com/karanpratapsingh/learn-go) available on Github._`;

  return body;
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time * 1000));
}

function getEnv(key) {
  const env = process.env[key];

  if (!env) {
    console.log(`[error]: ${key} env variable is required.`);
    process.exit(1);
  }

  return env;
}

function getUserID(apiKey) {
  const config = {
    method: 'get',
    url: 'https://api.medium.com/v1/me',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };

  return axios(config).then(({ data }) => data.data.id);
}

function createDraft(apiKey, user_id, filePath) {
  const command = `
    curl --location --request POST https://api.medium.com/v1/users/${user_id}/posts \
        --header 'Authorization: Bearer ${apiKey}' \
        --header 'Content-Type: application/json'  \
        -d @${filePath}
  `;

  exec(command);
}

(async function main() {
  const [course_slug, articleSlug] = verifyArgs();

  const dir = `data/courses/${course_slug}`;

  const files = fs.readdirSync(dir);

  const frontmatters = [];

  for (const file of files) {
    const filePath = path.join(dir, file);

    const content = fs.readFileSync(filePath).toString('utf-8');
    const { data } = matter(content);
    frontmatters.push({ ...data, slug: file });
  }

  frontmatters.sort((a, b) => new Date(a.date) - new Date(b.date));

  console.log(`Found ${frontmatters.length} articles`);

  let idx = 0;
  for (const data of frontmatters) {
    const slug = data.slug.replace('.mdx', '');

    console.log(`${idx + 1}: ${slug}`);
    console.log(`   - ${data.summary}`);

    idx += 1;
    if (slug !== articleSlug) continue;

    articles.push({ name: data.title, slug });
  }

  const API_KEY = getEnv('MEDIUM_API_KEY');
  const USER_ID = await getUserID(API_KEY);

  console.log(`Publishing ${articles.length} articles`);

  for (const [, { name, slug }] of articles.entries()) {
    const title = `Learn Go: ${name}`;
    const tags = [
      'Go',
      'Golang',
      'Distributed Systems',
      'Software Engineering',
      'Software Architecture',
    ];
    const canonicalUrl = `https://github.com/karanpratapsingh/${course_slug}#${slug}`;
    const content = getBody(course_slug, slug);

    const body = {
      title,
      contentFormat: 'markdown',
      content,
      canonicalUrl,
      tags,
      publishStatus: 'draft',
    };

    try {
      fs.writeFileSync(`medium/${slug}.json`, JSON.stringify(body));

      createDraft(API_KEY, USER_ID, `medium/${slug}.json`);

      console.log(`Created article for: ${name}`);
    } catch (error) {
      console.log(error);
      console.log(`Encountered error for article: ${name}`);
      process.exit(1);
    }
  }
})();
