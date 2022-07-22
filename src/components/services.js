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
              formAction="https://drive.google.com/file/d/1j2ZEKEXBckwZ2SSOBemR7ZzpjeDl-dtb/view?usp=sharing"
            >
              Order of Service for July 24, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1mp8hrtCRwRwqKMONuvPyeK7XgR-A9Tq3/view?usp=sharing"
            >
              Music for for July 24, 2022
            </button>
          </form>
    
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1P78AyT3XXfvaEShO1Zu66oB4U11f87J4/view?usp=sharing"
            >
              Prayer List
            </button>
          </form>
          <div className="iframe-container">
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/KTgGxpWgNig"
              title="July 24, 2022"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
