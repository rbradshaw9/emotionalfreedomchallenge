import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Emotional Freedom Challenge',
    short_name: 'EF Challenge',
    description: 'A transformative 5-day journey toward emotional freedom with Dr. Paul Jenkins',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2c5f6f',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
