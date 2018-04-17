module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "nicolasansom.codes",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        auth: {
          htaccess_user: "nicola",
          htaccess_pass: "caskett47*",
          htaccess_sendImmediately: false,
        },
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
      },
    },
  ],
}
