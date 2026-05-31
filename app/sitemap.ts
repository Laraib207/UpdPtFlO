import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const base = 'https://thelaraib.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/ibza-story',
    '/ibza-cycle',
    '/ibza-drink',
    '/ibza-studio',
    '/ibza-flying-buds',
    '/about',
    '/work',
    '/contact',
  ]
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
