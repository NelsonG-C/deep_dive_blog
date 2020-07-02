import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SideMenu from "../components/menu"

export default function BlogPost({ data, location }) {
  const post = data.markdownRemark
  // may need to move menu component into layout with a conditional or make a new layout
  return (
    <div>
      <SideMenu location={location} />
      <Layout>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
