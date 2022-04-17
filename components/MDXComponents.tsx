import React, { useMemo } from 'react';
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';
import CustomLink from './Link';
import TOCInline from './TOCInline';
import Pre from './Pre';
import { BlogNewsletterForm } from './NewsletterForm';
import { IGetPlaiceholderReturn } from 'plaiceholder';

const Wrapper: React.ComponentType<{
  layout: string;
  avatar: IGetPlaiceholderReturn;
}> = ({ layout, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default;
  return <Layout {...rest} />;
};

export const MDXComponents: ComponentMap = {
  Image,
  //@ts-ignore
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
};

interface Props {
  avatar: IGetPlaiceholderReturn;
  layout: string;
  mdxSource: string;
  [key: string]: unknown;
}

export const MDXLayoutRenderer = ({
  layout,
  avatar,
  mdxSource,
  ...rest
}: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return (
    <MDXLayout
      layout={layout}
      avatar={avatar}
      components={MDXComponents}
      {...rest}
    />
  );
};
