const path = require("path");

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
};
