/**
 * Publish course to Dev.to
 *
 * This script publishes course to dev.to
 */

const usage = `Usage:
 node scripts/publish-course-to-devto.js <course-slug>
`;

const fetch = require('node-fetch');
const matter = require('gray-matter');
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

function getBanner(section, course_slug, slug) {
  return `https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses/${course_slug}/${section}/${slug}/banner.png`;
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

_This article is part of my open-source [System Design Course](https://github.com/karanpratapsingh/system-design) available on Github._

{% github karanpratapsingh/system-design %}`;

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

function createDraft(apiKey, body) {
  return fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
}

(async function main() {
  const API_KEY = getEnv('DEVTO_API_KEY');
  const course_slug = verifyArgs();

  for (const [, { name, section, slug }] of articles.entries()) {
    const title = `System Design: ${name}`;
    const main_image = getBanner(section, course_slug, slug);
    const tags = ['distributedsystems', 'architecture', 'tutorial'];
    const canonical_url = `https://github.com/karanpratapsingh/${course_slug}#${slug}`;
    const series = 'System Design';
    const body_markdown = getBody(course_slug, slug);

    const body = {
      article: {
        title,
        main_image,
        tags,
        canonical_url,
        series,
        body_markdown,
      },
    };

    try {
      const response = await createDraft(API_KEY, body);
      if (response.error) {
        console.log(response);
        throw new Error(response.error);
      }

      console.log(`Created article for: ${name}`);
      await sleep(10);
    } catch (error) {
      console.log(error);
      console.log(`Encountered error for article: ${name}`);
      process.exit(1);
    }
  }
})();
