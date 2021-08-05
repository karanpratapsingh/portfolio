import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import '../styles/list.scss';
import type { AppProps } from 'next/app';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
