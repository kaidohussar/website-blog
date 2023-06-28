const path = require('path')

const prod = process.env.NODE_ENV === 'production'

let csp = ``
csp += `base-uri 'self';`
csp += `form-action 'self';`
csp += `default-src 'self' https://www.google.com;`
csp += `font-src 'self' https://fonts.googleapis.com/ https://fonts.gstatic.com;`
csp += `script-src 'self' ${prod ? '' : "'unsafe-eval'"};` // NextJS requires 'unsafe-eval' in dev (faster source maps)
csp += `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;` // NextJS requires 'unsafe-inline'

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: csp,
  },
]

const moduleExports = {
  experimental: { esmExternals: true },
  pageExtensions: ['tsx'],
  optimizeFonts: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: 'json',
          use: 'yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
        {
          resolve: {
            modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
          },
        },
      ],
    )
    return config
  },
  images: {
    loader: 'akamai',
    path: './',
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = moduleExports
