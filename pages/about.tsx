import { MDXLayoutRenderer } from '@/components/MDXComponents';
import { getFileBySlug } from '@/lib/mdx';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getPlaiceholder, IGetPlaiceholderReturn } from 'plaiceholder';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

const DEFAULT_LAYOUT = 'AuthorLayout';

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: {
    mdxSource: string;
    frontMatter: AuthorFrontMatter;
    avatar: IGetPlaiceholderReturn;
  };
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', [
    'default',
  ]);
  const { mdxSource, frontMatter } = authorDetails;

  const avatar = await getPlaiceholder(
    // @ts-ignore
    frontMatter?.avatar,
  );

  return { props: { authorDetails: { mdxSource, frontMatter, avatar } } };
};

export default function About({
  authorDetails,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter, avatar } = authorDetails;

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      avatar={avatar}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
}
