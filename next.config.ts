import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/api/cv.pdf': ['./node_modules/@fontsource/inter/files/*.woff'],
  },
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
