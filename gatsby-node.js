exports.createPages = async ({ actions, graphql }) => {
  const {data} = await graphql(`
    query MainPage {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
            url
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(item => {
    const {url, category} = item.frontmatter;

    actions.createPage({
      path: `/${category}/${url}`,
      component: require.resolve("./src/templates/single-post.js"),
      context: { url },
      // defer: true,
    })
  });

}
