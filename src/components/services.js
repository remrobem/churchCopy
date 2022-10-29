import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./services.module.css"

const Services = () => {
  const servicesList = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 52
      ) {
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

  // const oos = useStaticQuery(graphql`
  //     query {
  //       allMarkdownRemark(
  //         sort: { order: DESC, fields: frontmatter___date }
  //         limit: 52
  //       ) {
  //         edges {
  //           node {
  //             id
  //             frontmatter {
  //               videoLink
  //               serviceOrderlink
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)

  // filter out md that does not have a video link
  let services = servicesList.allMarkdownRemark.edges.filter(service => {
    return service.node.frontmatter.videoLink
  })

  return (
    <div className={styles.background} id="epiphany_services">
      <div className={styles.message}>
        <main>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1h0svTIXQ_fjG-hc3_87HdhKG07ltEZjN/view?usp=share_link"
            >
              Order of Service for October 30, 2022
            </button>
          </form>
          {/* <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1xxvvRwdq9mWGXCugtf5-3n5Cby-d-MsM/view?usp=sharing"
            >
              Music for for October 23, 2022
            </button>
          </form> */}
          <p>
            The Service on 10/30 will feature a selection of songs from the
            "“Lift Every Voice and Sing” hymnal.
          </p>
          <p>
            The actual songs to sing will be selected by the congregation during
            the service.
          </p>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/13MXtay2aCqljC3SCuEHa86E_9zL124cj/view?usp=sharing"
            >
              Prayer List
            </button>
          </form>
          {/* <div className="iframe-container">
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/XAJkDY3Qbwc"
              title="Oct. 2, 2022"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
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
