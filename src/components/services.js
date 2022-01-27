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
              formAction="https://onedrive.live.com/?authkey=%21AH7zrA9ihXhDr9U&cid=69FFEE9F5040E527&id=69FFEE9F5040E527%216998&parId=69FFEE9F5040E527%215343&o=OneUp"
            >
              Order of Service for Jan 30, 2022
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
           <div className="iframe-container">
          <iframe
            // width="100vw"
            // height="100vh"
            src="https://www.youtube.com/embed/y8I-b40m7pk"
            title="Sunday January 23, 2022"
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
