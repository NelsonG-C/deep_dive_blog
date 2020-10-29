const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

//called when a node is created or updated
exports.onCreateNode = ({ node, getNode, actions }) => {
  let slug
  const { createNodeField } = actions
  if (node.internal.type == `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const relativePath = path.parse(fileNode.relativePath)
    const splitDir = relativePath.dir.split("/")
    //creating base slug or nested length slug
    if (splitDir.length === 2 && splitDir.name !== `index`) {
      slug = `/${splitDir[1]}/${relativePath.name}/`
    } else {
      slug = createFilePath({ node, getNode, basePath: `pages` })
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
//querying for nodes and then creating pages based off returned results
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-page.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
