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
    <div className={styles.container}>
      <a name="epiphany_services"></a>
      <div className={styles.background}></div>
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <p>
            In-person services and events at Epiphany have been suspended due to
            the COVID-19 pandemic.
          </p>
          <p>Sunday services have been recorded for your viewing.</p>
        </div>
        <div className={styles.buttonContainer}>
          <form>
            {services.map(service => {
              return (
                <button
                  className={styles.button}
                  formaction={service.node.frontmatter.videoLink}
                >
                  {service.node.frontmatter.title}
                </button>
              )
            })}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Services
