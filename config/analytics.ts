import { getEnv } from '../util';

export type GoogleAnalyticsConfig = {
  provider: 'google';
  trackingId?: string;
};

export type Analytics = GoogleAnalyticsConfig;

export const analytics: Analytics = {
  provider: 'google',
  trackingId: getEnv('NEXT_PUBLIC_GOOGLE_ANALYTICS_ID'),
};
