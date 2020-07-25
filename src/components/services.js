import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./services.module.css"

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
    <div className={styles.background} id="epiphany_services">
      <div className={styles.message}>
        <p className={styles.pageHeading}>Sunday Services</p>
        <p>
          In-person services and events at Epiphany have been suspended due to
          the COVID-19 pandemic.
        </p>
        <p>Sunday services have been recorded for your viewing.</p>
      </div>

        <div className={styles.buttonContainer}>
          {services.map(service => {
            return (
              <form key={service.node.frontmatter.videoLink}>
                <button
                  className={styles.button}
                  formAction={service.node.frontmatter.videoLink}>
                  {service.node.frontmatter.title}
                </button>
              </form>
            )
          })}
        </div>
      </div>
  )
}

export default Services
