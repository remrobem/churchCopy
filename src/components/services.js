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
        <h1 className={styles.pageHeading}>Sunday Services</h1>
        <main>
          <p className={styles.text}>
            In-person services and events at Epiphany have been suspended due to
            the COVID-19 pandemic.
          </p>
          <p className={styles.text}>
            Sunday services have been recorded for your viewing.
          </p>
          <p className={styles.text}>
            Most of the services are recorded using Facebook. However, you do
            not need a Facebook account to view the video.
          </p>
          <p className={styles.text}>
            When you receive a page requesting you to logon, select the "Not
            Now" option at the bottom.
          </p>
          <form>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://1drv.ms/b/s!AiflQFCf7v9prG_-xp1nM3A4W0J3?e=ziQ4yL"
            >
              Order of Service for Christmas Eve Service (10 am)
            </button>
          </form>
        </main>
      </div>

      <div className={styles.buttonContainer}>
        {services.map(service => {
          return (
            <form key={service.node.frontmatter.videoLink}>
              <button
                className={styles.button}
                formAction={service.node.frontmatter.videoLink}
              >
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
