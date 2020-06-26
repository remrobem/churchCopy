import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./services.module.scss"

const Services = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              videoLink
              serviceOrderlink
              title
            }
          }
        }
      }
    }
  `)

  // filter out md that does not have a video link
  let services = query.allMarkdownRemark.edges.filter(service => {
    return service.node.frontmatter.videoLink
  })

  return (
    <section className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>
            Due to COVID-19, services and events at Epiphany have been cancelled
            for the foreseeable future
          </h1>
        </div>

        <div className={styles.message}>
          <h1>In the interim, Sunday services are being recorded</h1>
        </div>
        <div>
          {services.map(service => {
            return (
              <a href={service.node.frontmatter.videoLink}>
                <input
                  type="button"
                  className={styles.button}
                  value={service.node.frontmatter.title}
                />
              </a>
            )
          })}
        </div>
        </div>
     
    </section>
  )
}

export default Services
