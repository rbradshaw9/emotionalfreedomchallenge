import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/replay/', '/replay/*'],
    },
    sitemap: 'https://challenge.drpauljenkins.com/sitemap.xml',
  };
}
