const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  let slug
  const { createNodeField } = actions
  if (node.internal.type == `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const relativePath = path.parse(fileNode.relativePath)
    const splitDir = relativePath.dir.split("/")

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
