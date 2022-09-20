import Comments from '@/components/comments';
import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import SectionContainer from '@/components/SectionContainer';
import { BlogSEO } from '@/components/SEO';
import Share from '@/components/Share';
import Tag from '@/components/Tag';
import TOCInline from '@/components/TOCInline';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import { ReactNode } from 'react';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';
import { PostFrontMatter } from 'types/PostFrontMatter';
import { Toc } from 'types/Toc';

const editUrl = fileName =>
  `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;
const discussUrl = slug =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`,
  )}`;

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

interface Props {
  frontMatter: PostFrontMatter;
  authorDetails: AuthorFrontMatter[];
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
  toc?: Toc;
  children: ReactNode;
}

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  toc,
  children,
}: Props) {
  const { slug, fileName, date, title, tags, readingTime, images } =
    frontMatter;

  const banner = images?.[0];

  const url = `${siteMetadata.siteUrl}/blog/${slug}`;

  return (
    <SectionContainer>
      <BlogSEO url={url} authorDetails={authorDetails} {...frontMatter} />
      <ScrollTopAndComment />
      <article className='fade-in'>
        <div className='xl:divide-y xl:divide-gray-100 xl:dark:divide-gray-800'>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-1 text-center'>
              <dl className='space-y-10'>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(
                        siteMetadata.locale,
                        postDateTemplate,
                      )}
                    </time>
                  </dd>
                </div>
              </dl>
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
            <dl className='pt-6 pb-10 xl:sticky xl:top-0 xl:border-b xl:border-gray-100 xl:pt-11 xl:dark:border-gray-800'>
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
              <div className='xl:sticky xl:top-32'>
                <div className='divide-gray-100 text-sm font-medium leading-5 dark:divide-gray-800 xl:col-start-1 xl:row-start-2 xl:divide-y'>
                  {tags && (
                    <div className='py-4 xl:py-8'>
                      <h2 className='text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                        Tags
                      </h2>
                      <div className='flex flex-wrap'>
                        {tags.map(tag => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  )}
                  {(next || prev) && (
                    <div className='flex justify-between py-4 xl:block xl:space-y-8 xl:py-8'>
                      {prev && (
                        <div>
                          <h2 className='text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                            Previous Article
                          </h2>
                          <div className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                            <Link href={`/blog/${prev.slug}`}>
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
                            <Link href={`/blog/${next.slug}`}>
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
                    href='/blog'
                    className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                  >
                    &larr; Back to the blog
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
