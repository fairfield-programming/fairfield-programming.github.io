/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

function Seo({ description, title, children, image, breadcrumbs }) {
  
  const site = require('../../gatsby-config')
  const metaDescription = description || site.siteMetadata.description

  if (breadcrumbs == undefined) breadcrumbs = {}

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      Object.keys(breadcrumbs).map((i, n) => {
        
        const val = breadcrumbs[i]
        
        return {
          "@type": "ListItem",
          "position": n + 1,
          "name": i,
          "item": val,
        };
      })
    ]
  };

  return (
    <>
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}></script>
      {children}
    </>
  )
}

export default Seo
