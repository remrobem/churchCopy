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
        {/* <h1 className={styles.pageHeading}>Sunday Services</h1> */}
        <main>
          {/* <p className={styles.text}>
            Sunday services have been recorded for your viewing.
          </p> */}
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1mjid66INKacSyULmgqrV458nbsynapyS/view?usp=sharing"
            >
              Order of Service for The Great Vigil
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1eoDQceglIfUxVp7_4LTlZMJikLmfRi6B/view?usp=sharing"
            >
              Order of Service for Easter, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1WodBP_D083iMEm3i-a3Gbf2_VeqDogMu/view?usp=sharing"
            >
              Music for The Great Vigil
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1MSGKrCggvS_ZI3wVu4n7R61cI2pEqQdb/view?usp=sharing"
            >
              Music for Easter, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1poYnvXCyVcaOmuAz6tSwNba11Ys4_HOm/view?usp=sharing"
            >
              Prayer List
            </button>
          </form>
          <div className="iframe-container">
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/AeLub1oZMoU"
              title="Easter Sunday April 17, 2022"
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
