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
            Videos can be found on{" "}
            <a href="https://www.facebook.com/epiphanyeden">Facebook</a> and{" "}
            <a href="https://www.youtube.com/channel/UCQhee_wvQ62Bcv5lr2ftGVg">
              YouTube
            </a>
          </p>
          <p className={styles.text}>or by clicking the links below.</p>
          <form>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://1drv.ms/b/s!AiflQFCf7v9ptjEPTs-3oxK98ZzF?e=n8BMAR"
            >
              Order of Service for Jan 16, 2022
            </button>
          </form>
          {/* <form>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://1drv.ms/b/s!AiflQFCf7v9ptTkVA2clsWgadR-O?e=M9NG2r"
            >
              Music for Dec 19, 2021

            </button>
          </form> */}
          <iframe
            width="90%"
            // height="315"
            src="https://www.youtube.com/embed/80wRoHZJb74"
            title="Sunday January 16, 2022"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
