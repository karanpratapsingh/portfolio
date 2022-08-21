import Comments from '@/components/comments';
import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import SectionContainer from '@/components/SectionContainer';
import { BlogSEO } from '@/components/SEO';
import Share from '@/components/Share';
import TOCInline from '@/components/TOCInline';
import siteMetadata from '@/data/siteMetadata';
import { courseSlugMap } from 'config/courses';
import Image from 'next/image';
import { ReactNode } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import { PostFrontMatter } from 'types/PostFrontMatter';
import { Toc } from 'types/Toc';

const editUrl = fileName =>
  `${siteMetadata.siteRepo}/blob/master/data/courses/${fileName}`;
const discussUrl = slug =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`,
  )}`;

interface Props {
  frontMatter: PostFrontMatter;
  authorDetails: AuthorFrontMatter[];
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
  toc?: Toc;
  children: ReactNode;
}

export default function CourseLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  toc,
  children,
}: Props) {
  const { slug, fileName, title, readingTime, images } = frontMatter;

  const [courseSlug] = slug.split('/');
  const banner = images?.[0];

  const url = `${siteMetadata.siteUrl}/courses/${slug}`;

  return (
    <SectionContainer>
      <BlogSEO
        url={url}
        authorDetails={authorDetails}
        {...frontMatter}
        title={`${title} | ${courseSlugMap[courseSlug]}`}
      />
      <ScrollTopAndComment />
      <article className='fade-in'>
        <div className='xl:divide-y xl:divide-gray-100 xl:dark:divide-gray-800'>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-1 text-center'>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <p className='text-base leading-6 text-gray-500 dark:text-gray-400'>
                {readingTime?.text}
              </p>
              <Share title={title} url={url} />
            </div>
          </header>
          <div
            className='divide-y divide-gray-100 pb-8 dark:divide-gray-800 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className='pt-6 pb-10 xl:border-b xl:border-gray-100 xl:pt-11 xl:dark:border-gray-800'>
              <dt className='sr-only'>Authors</dt>
              <dd>
                <ul className='flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8'>
                  {authorDetails.map(author => (
                    <li
                      className='flex items-center space-x-2'
                      key={author.name}
                    >
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width='38px'
                          height='38px'
                          alt='avatar'
                          className='h-10 w-10 rounded-full'
                        />
                      )}
                      <dl className='whitespace-nowrap text-sm font-medium leading-5'>
                        <dt className='sr-only'>Name</dt>
                        <dd className='text-gray-900 dark:text-gray-100'>
                          {author.name}
                        </dd>
                        <dt className='sr-only'>Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                            >
                              {author.twitter.replace(
                                'https://twitter.com/',
                                '@',
                              )}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className='divide-y-2 divide-gray-100 dark:divide-gray-800 xl:col-span-3 xl:row-span-2 xl:pb-0'>
              {banner && (
                <img
                  src={banner}
                  className='object-cover object-center'
                  alt='banner'
                />
              )}
              <div className='prose max-w-none !border-t-0 pt-6 pb-8 dark:prose-dark'>
                <TOCInline toc={toc} asDisclosure />
                {children}
              </div>
              <div className='pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300'>
                <Link href={discussUrl(slug)} rel='nofollow'>
                  {'Discuss on Twitter'}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className='divide-gray-100 text-sm font-medium leading-5 dark:divide-gray-800 xl:col-start-1 xl:row-start-2 xl:divide-y'>
                {(next || prev) && (
                  <div className='flex justify-between py-4 xl:block xl:space-y-8 xl:py-8'>
                    {prev && (
                      <div>
                        <h2 className='text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                          Previous Article
                        </h2>
                        <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                          <Link href={`/courses/${prev.slug}`}>
                            {prev.title}
                          </Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className='text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                          Next Article
                        </h2>
                        <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                          <Link href={`/courses/${next.slug}`}>
                            {next.title}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className='pt-4 xl:pt-8'>
                <Link
                  href={`/courses/${courseSlug}`}
                  className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                >
                  &larr; Back to the course
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
