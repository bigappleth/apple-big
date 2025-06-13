import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all good bots
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      // Googlebot: allow everything except private/admin/api
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      // Bingbot: allow everything except private/admin/api
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      // Applebot: allow everything except private/admin/api
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      // Baiduspider: allow only public Thai/English content
      {
        userAgent: 'Baiduspider',
        allow: ['/th/', '/en/'],
        disallow: '/',
      },
      // Sogou bots: allow only public Thai/English content
      {
        userAgent: ['Sogou web spider', 'Sogou inst spider', 'Sogou spider2'],
        allow: ['/th/', '/en/'],
        disallow: '/',
      },
      // Block common bad bots (example)
      {
        userAgent: ['MJ12bot', 'AhrefsBot', 'SemrushBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.bigapplestorethailand.com/sitemap.xml',
  }
}