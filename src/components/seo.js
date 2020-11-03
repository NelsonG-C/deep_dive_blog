import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetaData {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetaData.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `keywords`, content: site.siteMetaData.keywords.join(",") },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
