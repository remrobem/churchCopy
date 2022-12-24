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
    <div className={styles.background} id="services">
      <div className={styles.message}>
        <main>
        <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1DWL6rHxb2xvJe_qwt1dTFQVdjY_dgH_o/view?usp=share_link"
            >
              Order of Service for December 24, 2022
            </button>
          </form>
          
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1tb3Ge9TIcgSe_msGW6DU5L_j9u6r4aE6/view?usp=share_link"
            >
              Music for for December 24, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1SjQYJOhSc_Dv12XUm_pb6DGBz1uX_qDL/view?usp=share_link"
            >
              Order of Service for December 25, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1DlRopqli6gr7Htxk6j2F_nQEWNeeooSJ/view?usp=share_link"
            >
              Music for for December 25, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1d_WLRoGgAkVsiv5gfZLBOkDyx8wxOE4z/view?usp=share_link"
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
