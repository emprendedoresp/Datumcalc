import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: [
      'https://datums-rechner.com/sitemap-core.xml',
      'https://datums-rechner.com/sitemap-events.xml',
      'https://datums-rechner.com/sitemap-seo.xml',
    ],
  };
}
