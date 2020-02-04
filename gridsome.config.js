// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Phantom",
  siteDescription:
    "Your one-stop shop for finding all manner of stylish, luxury apparel and accessories",
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '5jmhrfrccwjk', // required
        accessToken: 'f2gBvFOj7083vDjZWrsdx24H_-r6FnuNKV3qyO0XR50', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/posts/:slug",
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tags/:id',
            create: true
          }
        }
      }
    }
  ]
};
