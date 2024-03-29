import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./footer.module.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      {data.site.siteMetadata.title}, © 2023
    </footer>
  )
}

export default Footer
