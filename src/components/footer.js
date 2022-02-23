import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./footer.module.css"

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
      {data.site.siteMetadata.title}, © 2022
    </footer>
  )
}

export default Footer