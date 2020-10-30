import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SideMenu from "../components/menu"
import styles from "../components/layout.module.css"

export default function BlogPost({ data, location }) {
  const post = data.markdownRemark
  console.log(post)
  // consider addng next article button
  return (
    <div className={styles.content}>
      <SideMenu location={location} />
      <div>
        <Layout>
          <div className={styles.layout}>
            <div className={styles.contentContainer}>
              <p className={styles.postNote}>
                <span></span>
                {post.frontmatter.date}
                <span>•</span>
                <span>{post.frontmatter.readTime}</span>
              </p>
              <h1>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        readTime
      }
    }
  }
`
