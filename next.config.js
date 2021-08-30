const path = require("path");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "connect-src 'self'",
  },
];

module.exports = {
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
