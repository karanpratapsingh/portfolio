/**
 * Publish course to Dev.to
 *
 * This script publishes articles to dev.to
 */

const fetch = require('node-fetch');
const matter = require('gray-matter');
const fs = require('fs');

/**
 * @type {Array<{ name: string, slug: string, section: string}>}
 */
const articles = [];
const course_slug = 'system-design';

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
    new RegExp(`]\\(/courses/${course_slug}`),
    `](https://karanpratapsingh.com/courses/${course_slug}`,
  );

  // Add footer
  body = `${body}
    
    ---
    
    _This article is part of my open source [System Design Course](https://www.karanpratapsingh.com/courses/system-design) available on Github._

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

  for (const [, { name, section, slug }] of articles.entries()) {
    const title = `System Design: ${name}`;
    const main_image = getBanner(section, course_slug, slug);
    const tags = ['distributedsystems', 'tutorial', 'beginners'];
    const canonical_url = `https://karanpratapsingh.com/courses/${course_slug}/${slug}`;
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
      await createDraft(API_KEY, body);
      console.log(`Created article for: ${name}`);
      await sleep(10);
    } catch (error) {
      console.log(error);
      console.log(`Encountered error for article: ${name}`);
      process.exit(1);
    }
  }
})();
