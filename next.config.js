const path = require('path');

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
