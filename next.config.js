module.exports = {
  images: {
    domains: ["media.graphcms.com"],
  },
  webpack: (webpackConfig) => {
    webpackConfig.module.rules.push({
      test: /\.(gql|graphql)$/,
      loader: "graphql-tag/loader",
      exclude: ["/node_modules/", "/.next/"],
      enforce: "pre",
    });
    return webpackConfig;
  },
};
