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
        {/* <h1 className={styles.pageHeading}>Sunday Services</h1> */}
        <main>
          {/* <p className={styles.text}>
            Sunday services have been recorded for your viewing.
          </p> */}
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1azow5H2DvNemRVd7lSz2IxE1o5Jl6sKh/view?usp=sharing"
            >
              Order of Service for Feb 20, 2022
            </button>
          </form>
          <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1b2vPeGiKEAdxZlby7Z_P3VjzEcDGuDBz/view?usp=sharing"
            >
              Music for Feb 20, 2022

            </button>
            <form className={styles.form}>
            <button
              className={`${styles.button} ${styles.button_wide}`}
              formAction="https://drive.google.com/file/d/1T2MbawKEIXA8ZKvq_jZLLrMd9nwFgz5P/view?usp=sharing"
            >
             Prayer List

            </button>
          </form>
          <div className="iframe-container">
            <iframe
              width="300"
              height="300"
              src="https://www.youtube.com/embed/j_Bu28E2mRE"
              title="February 13, 2022"
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
