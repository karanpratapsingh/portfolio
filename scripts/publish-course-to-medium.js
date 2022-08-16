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
const fs = require('fs');

/**
 * @type {Array<{ name: string, slug: string, section: string}>}
 */
const articles = [];

function verifyArgs() {
  const [slug] = process.argv.slice(2);

  if (!slug) {
    console.log('[error]: course slug is required as first argument.');
    console.log(usage);
    process.exit(1);
  }

  return slug;
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

_This article is part of my open-source [System Design Course](https://github.com/karanpratapsingh/system-design) available on Github._`;

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

function createDraft(apiKey, user_id, body) {
  const command = `
    curl --location --request POST https://api.medium.com/v1/users/${user_id}/posts \
        --header 'Authorization: Bearer ${apiKey}' \
        --header 'Content-Type: application/json'  \
        -d ${JSON.stringify(Buffer.from(body).toString())}
  `;

  exec(command);
}

(async function main() {
  const API_KEY = getEnv('MEDIUM_API_KEY');
  const USER_ID = await getUserID(API_KEY);
  const course_slug = verifyArgs();

  for (const [, { name, slug }] of articles.entries()) {
    const title = `System Design: ${name}`;
    const tags = [
      'Distributed Systems',
      'System Design Interview',
      'Architecture',
      'Software Engineering',
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
      createDraft(API_KEY, USER_ID, fs.readFileSync(`medium/${slug}.json`));

      console.log(`Created article for: ${name}`);
      await sleep(2);
    } catch (error) {
      console.log(error);
      console.log(`Encountered error for article: ${name}`);
      process.exit(1);
    }
  }
})();
