/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.bigapplestorethailand.com', // <--- IMPORTANT: Change this to your actual website URL
  generateRobotsTxt: true, // (optional) Set to true to generate a robots.txt file as well
  // optional: add more options here
  // For example, to exclude certain pages:
  // exclude: ['/admin/*', '/private-page'],
  // For a custom sitemap base path:
  // sitemapBaseFileName: 'my-custom-sitemap',
  // For dynamic routes (if not handled automatically):
  // additionalPaths: async (config) => [
  //   await config.transform('/some-dynamic-path', {
  //     loc: '/some-dynamic-path',
  //     changefreq: 'daily',
  //     priority: 0.7,
  //     lastmod: new Date().toISOString(),
  //   }),
  // ],
};