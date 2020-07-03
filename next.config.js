const { withPlugins } = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')
const withOptimizedImages = require('next-optimized-images')
const withSvgr = require('next-svgr')

module.exports = withPlugins([
  [
    withBundleAnalyzer,
    {
      enabled: process.env.ANALYZE === 'true',
    },
  ],
  withSvgr,
  [
    withOptimizedImages,
    {
      handleImages: ['jpeg', 'png', 'webp', 'gif'],
    },
  ],
  [
    withPWA,
    {
      pwa: { dest: 'public' },
    },
  ],
])
