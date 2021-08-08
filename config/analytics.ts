export enum AnalyticsProvider {
  GOOGLE = 'google',
}

export type GoogleAnalyticsConfig = {
  provider: AnalyticsProvider.GOOGLE;
  trackingId?: string;
};

export type Analytics = GoogleAnalyticsConfig;

export const analytics: Analytics = {
  provider: AnalyticsProvider.GOOGLE,
  trackingId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
};
