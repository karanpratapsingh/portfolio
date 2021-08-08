import 'tailwindcss/tailwind.css';

import '../styles/globals.scss';
import '../styles/bottomsheet.scss';
import '../styles/list.scss';

import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import config from '../config';
import { useAnalytics } from '../hooks';

const { personal, contact } = config;

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <NextSeo
        title={personal.fullName}
        description={`${personal.name}'s portfolio`}
        // TODO: custom canonical image
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        twitter={{
          handle: contact.twitter,
          site: contact.site,
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
