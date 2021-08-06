import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import '../styles/list.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
