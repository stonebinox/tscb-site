module.exports = {
  siteMetadata: {
    title: `tscb`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "6k2OTPgYLY4i14X6IXceSNcdMgqPO2fQAufqiEjfZfE",
        spaceId: "at3ui5p9qbcn",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
  ],
};
