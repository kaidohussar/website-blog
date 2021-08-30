// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const path = require("path");

const { withSentryConfig } = require("@sentry/nextjs");

const prod = process.env.NODE_ENV === "production";

let csp = ``;
csp += `base-uri 'self';`;
csp += `form-action 'self';`;
csp += `default-src 'self';`;
csp += `script-src 'self' ${prod ? "" : "'unsafe-eval'"};`; // NextJS requires 'unsafe-eval' in dev (faster source maps)
csp += `style-src 'unsafe-inline' data:;`; // NextJS requires 'unsafe-inline'
csp += `report-uri https://o982620.ingest.sentry.io/api/5937861/security/?sentry_key=d47f28682a954ab19224b4fd7c2504a6`; // Send CSP violations to sentry

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: csp,
  },
];

const moduleExports = {
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
        {
          resolve: {
            modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
          },
        },
      ]
    );
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
