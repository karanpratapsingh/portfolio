/**
 * Combine Course
 *
 * This script combines courses into one article.
 */

const usage = `Usage:
 node scripts/combineCourse.js <slug>
`;

const matter = require('gray-matter');
const globby = require('globby');
const fs = require('fs');

(async function main() {
  const slug = verifyArgs();
  const topics = await getCourseTopics(slug);

  combine(slug, topics);
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
    });
  }

  topics.sort((a, b) => new Date(a.date) - new Date(b.date));

  return topics;
}

function combine(slug, topics) {
  const time = new Date();
  const data = [
    `---
title: '${slug} course'
date: '${time.getFullYear()}-${time.getUTCMonth()}-${time.getDate()}'
tags: ['${slug}']
draft: false
summary: 'todo'
images: ['/static/courses/${slug}/banner.png']
authors: ['default']
---\n`,
  ];

  for (const topic of topics) {
    data.push(`# ${topic.title}`);
    data.push(`${topic.content}`);
  }

  fs.writeFileSync(`data/blog/${Date.now()}.mdx`, data.join('\n'));
  console.log(`[success]: combined ${topics.length} topics.`);
}
