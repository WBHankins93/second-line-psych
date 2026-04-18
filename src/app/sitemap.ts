import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://secondlinepsychiatry.com'
  const lastModified = new Date('2026-04-18')

  return [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1, lastModified },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${baseUrl}/schedule`, changeFrequency: 'weekly', priority: 0.9, lastModified },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.4, lastModified: new Date('2026-04-11') },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.4, lastModified: new Date('2026-04-11') },
  ]
}
