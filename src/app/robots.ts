import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/*'],
        disallow: '/private/*',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/*'],
      },
      {
        userAgent: 'Baiduspider',
        allow: ['/cn/*','/cn-edu/*','/cn-k12/*'],
        disallow: '/*',
      },
      {
        userAgent: ['Sogou web spider'],
        allow: ['/cn/*','/cn-k12/*'],
        disallow: ['/*'],
      },
      {
        userAgent: 'HaoSouSpider',
        allow: ['/cn/*','/cn-edu/*','/cn-k12/*'],
        disallow: '/*',
      },
      {
        userAgent: ['Sogou inst spider'],
        allow: ['/cn/*','/cn-k12/*'],
        disallow: ['/*'],
      },
      {
        userAgent: ['Sogou spider2'],
        allow: ['/cn/*','/cn-k12/*'],
        disallow: ['/*'],
      },
    ],
    sitemap: 'https://www.bigapplestorethailand.com/sitemap.xml',
  }
}