import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { slide as Menu } from "react-burger-menu"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  // may need to move menu component into layout with a conditional
  return (
    <div>
      <Menu styles={styles} right>
        <a id="" className="menu-item" href="/">
          Day 1
        </a>
        <a className="menu-item" href="/">
          {" "}
          Day 2
        </a>
      </Menu>
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

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    marginTop: "1rem",
    textShadow: "none",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}
