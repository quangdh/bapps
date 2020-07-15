module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/home" },
      "/privacy_policy.html": { page: "/policy" }
    };
  },
};
