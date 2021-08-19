import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { analytics } from 'config';

function useAnalytics(): void {
  useEffect(() => {
    mountGoogleAnalytics();
  }, []);
}

function mountGoogleAnalytics(): void {
  if (analytics && analytics.trackingId) {
    const { trackingId } = analytics;

    const { pathname, search } = window?.location;
    const path = `${pathname}${search}`;

    ReactGA.initialize(trackingId);
    ReactGA.pageview(path);
  } else {
    console.warn('Google analytics tracking id not set');
  }
}

export default useAnalytics;
