import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/*-sitemap.xml',
        '/*/ratgeber/*',
        '/*/guide/*',
        '/*/guia/*',
        '/*/guida/*',
        '/ratgeber/*',
        '/guide/*',
        '/guia/*',
        '/guida/*',
        // Explicitly allow high-priority calculations from sitemaps
        '/*/30-tage-ab-heute',
        '/*/60-tage-ab-heute',
        '/*/90-tage-ab-heute',
        '/*/100-tage-ab-heute',
        '/*/lage-bis-weihnachten',
        '/*/tage-bis-silvester',
        '/*/arbeitstage-jahr'
      ],
      disallow: [
        '/api/', 
        '/admin/',
        // Block the massive numerical long-tail variations to save Vercel resources
        '/*-[0-9]*-*' 
      ],
    },
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-core.xml`,
      `${SITE_URL}/sitemap-seo.xml`,
      `${SITE_URL}/sitemap-events.xml`,
    ],
  };
}
