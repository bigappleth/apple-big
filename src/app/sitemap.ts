import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // Home
    {
      url: 'https://www.bigapplestorethailand.com',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // About
    {
      url: 'https://www.bigapplestorethailand.com/about',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog
    {
      url: 'https://www.bigapplestorethailand.com/blog',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Contact
    {
      url: 'https://www.bigapplestorethailand.com/contact',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    // Services (example)
    {
      url: 'https://www.bigapplestorethailand.com/services',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Products (example)
    {
      url: 'https://www.bigapplestorethailand.com/products',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // FAQ (example)
    {
      url: 'https://www.bigapplestorethailand.com/faq',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // Thai version
    {
      url: 'https://www.bigapplestorethailand.com/th',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // English version
    {
      url: 'https://www.bigapplestorethailand.com/en',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Add more important pages as needed
  ]
}