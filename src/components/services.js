import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./services.module.css"



const Services = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }, limit:52) {
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
              formAction="https://drive.google.com/file/d/1pMmPFZFGSSY8X7lTiBH0ZsgnhF0auNgq/view?usp=sharing"
            >
              Order of Service for Feb 6, 2022
            </button>
          </form>
          <form>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1qxB1mlBWqBbuofszDnrf-9L6_41Rdkfj/view?usp=sharing"
            >
              Music for Feb 6, 2022

            </button>
          </form>
          <div className="iframe-container">
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/pfcn8aSLO00"
              title="February 6, 2022"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
