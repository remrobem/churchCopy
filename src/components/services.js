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
            Most of the services are recorded on <a href="https://www.facebook.com/epiphanyeden">Facebook.</a> 
          </p>
          <p className={styles.text}>
            Starting January 17, 2021, the video will also be uploaded to
            YouTube and the link below will open the video in YouTube.
          </p>
          <p className={styles.text}>
            This process takes some time so the Youtube video will not be
            available for at least 1 hour after the service ends.
          </p>
          {/* <p className={styles.text}>
            When you receive a page requesting you to logon, select the "Not
            Now" option at the bottom.
          </p> */}
          <form>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://1drv.ms/b/s!AiflQFCf7v9prkdR2gs4byKHpMud?e=Y1o4Wk"
            >
              Order of Service for Maundy Thursday April 1, 2021
            </button>
          </form>
          <form>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://1drv.ms/b/s!AiflQFCf7v9prkhxfEOrcD2yKzbf?e=SZsMyb"
            >
              Order of Service for Good Friday April 2, 2021
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
