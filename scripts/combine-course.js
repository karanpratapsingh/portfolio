/**
 * Combine Course
 *
 * This script combines courses into one article.
 */

const usage = `Usage:
 node scripts/combine-course.js <course-slug>
`;

const matter = require('gray-matter');
const globby = require('globby');
const fs = require('fs');
const readingTime = require('reading-time');

(async function main() {
  const slug = verifyArgs();
  const topics = await getCourseTopics(slug);

  combineBlog(slug, topics);
  combineGithub(slug, topics);

  console.log(printTOC(slug, topics));
  console.log(`\n[success]: combined ${topics.length} topics.`);
})();

function verifyArgs() {
  const [slug] = process.argv.slice(2);

  if (!slug) {
    console.log('[error]: course slug is required as first argument.');
    console.log(usage);
    process.exit(1);
  }

  return slug;
}

async function getCourseTopics(slug) {
  const paths = await globby(`data/courses/${slug}/*.mdx`);

  const topics = [];
  for (const path of paths) {
    const content = fs.readFileSync(path);
    const frontmatter = matter(content.toString());

    topics.push({
      title: frontmatter.data.title,
      date: frontmatter.data.date,
      content: frontmatter.content,
      metadata: readingTime(frontmatter.content),
    });
  }

  topics.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Remove the welcome article
  topics.shift();

  return topics;
}

function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

function printTOC(slug, topics) {
  let readingTime = 0;
  let words = 0;

  const toc = [];

  toc.push('# Table of contents');
  for (const topic of topics) {
    toc.push(`  - [${topic.title}](#${createSlug(topic.title)})`);
    readingTime += topic.metadata.minutes;
    words += topic.metadata.words;
  }

  console.log(
    `\n[info]: reading time: ${readingTime.toFixed(
      2,
    )} minutes | Words: ${words}`,
  );

  return toc.join('\n');
}

function transformBody(course_slug, body) {
  body = body.replace(
    /\]\(\/static\/courses/g,
    '](https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses',
  );

  // Replace static links
  body = body.replace(
    new RegExp(`]\\(/courses/${course_slug}`, 'g'),
    `](https://karanpratapsingh.com/courses/${course_slug}`,
  );

  return body;
}

function combineBlog(course_slug, topics) {
  const time = new Date();
  const data = [
    `---
title: '${course_slug} course'
date: '${time.getFullYear()}-${time.getUTCMonth()}-${time.getDate()}'
tags: ['${course_slug}']
draft: false
summary: 'todo'
images: ['/static/courses/${course_slug}/banner.png']
authors: ['default']
---\n`,
  ];

  for (const topic of topics) {
    data.push(`# ${topic.title}`);
    data.push(`${topic.content}`);
  }

  fs.writeFileSync(
    `data/blog/blog-${course_slug}.generated.mdx`,
    data.join('\n'),
  );
}

function combineGithub(course_slug, topics) {
  const data = [];

  for (const topic of topics) {
    data.push(`# ${topic.title}`);
    data.push(`${topic.content}`);
  }

  const combined = transformBody(course_slug, data.join('\n'));
  fs.writeFileSync(`data/github-${course_slug}.generated.mdx`, combined);
}
