import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
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
        { name: `keywords`, content: site.siteMetadata.keywords.join(",") },
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Exploring the unknown knowledge areas`,
}

export default SEO
