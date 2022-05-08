import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./services.module.css"

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
              formAction="https://drive.google.com/file/d/1c63JMEegHsRflwymlk9kqHdi98KEAmRb/view?usp=sharing"
            >
              Order of Service for May 8, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1QtaH-oq1Q3KsLS9dgxwVtnQH2n5dYhnP/view?usp=sharing"
            >
              Music for for May 8, 2022
            </button>
          </form>
    
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1D0b7IFuAVHFUBwCHurpyUwfiyIDcYF8-/view?usp=sharing"
            >
              Prayer List
            </button>
          </form>
          <div className="iframe-container">
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/XCDCWUW0XpM"
              title="May 1, 2022"
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
