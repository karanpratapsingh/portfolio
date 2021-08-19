import '../styles/globals.scss';
import '../styles/bottomsheet.scss';
import '../styles/list.scss';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import useAnalytics from '../hooks/useAnalytics';
import Seo from '../components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
