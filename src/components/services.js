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
              formAction="https://drive.google.com/file/d/1ADFnqMOE3QXcNCSN2Uqj_szqDFPrqeqP/view?usp=sharing"
            >
              Order of Service for October 2, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1BTS17PAGlbaB-n-5V5wbVU_BtnPx-DqS/view?usp=sharing"
            >
              Music for for October 2, 2022
            </button>
          </form>
    
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1wDwg6GAAIrew0h6p4dy21HtO9aLNTEn_/view?usp=sharing"
            >
              Prayer List
            </button>
          </form>
          <div className="iframe-container">
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/DCe5czmXPP8"
              title="September 18, 2022, 2022"
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
