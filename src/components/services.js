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
            Sunday services have been recorded for your viewing.
          </p>
          <p className={styles.text}>
            Videos can be found on <a href="https://www.facebook.com/epiphanyeden">Facebook</a> and <a href="https://www.youtube.com/channel/UCQhee_wvQ62Bcv5lr2ftGVg">YouTube</a>
          </p>
          <p className={styles.text}>
            or by clicking the links below.
          </p>
          <form>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://1drv.ms/b/s!AiflQFCf7v9ptDfzPxFi48xiVV_Y?e=3rm9Kf"
            >
              Order of Service for October 31, 2021
            </button>
          </form>
          <form>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://1drv.ms/b/s!AiflQFCf7v9ptDQwtVWGl6U468On?e=3kPT99"
            >
              Music for October 31, 2021

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
