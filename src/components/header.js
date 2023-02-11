import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import * as styles from "./header.module.css"
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.title}>
          {data.site.siteMetadata.title}
          <div className={styles.links}>
            <a
              className={styles.link}
              href="//maps.google.com/?f=q&amp;hl=en&amp;q=Church of the Epiphany Eden NC&maptype=roadmap"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt /> 538 Henry St. Eden, NC 27288
            </a>

            <a className={styles.link} href="tel:1-336-623-9410">
              <FaPhone /> 336-623-9410
            </a>

            <a className={styles.link} href="mailto:church@epiphanyeden.org">
              <FaEnvelope /> church@epiphanyeden.org
            </a>

            <a
              className={styles.link}
              href="https://www.facebook.com/epiphanyeden"
            >
              <FaFacebookSquare />
            </a>

            <a
              className={styles.link}
              href="https://www.instagram.com/epiphanyeden/"
            >
              <FaInstagramSquare />
            </a>
          </div>
          <div className={styles.buttons}>
            <Link className={styles.button} to="#donate">
              Make an Offering
            </Link>
            <Link className={styles.button} to="#pledge">
              Pledge for 2023
            </Link>
            <Link className={styles.button} to="#services">
              Sunday Services
            </Link>
            <Link className={styles.button} to="#announcements">
              Announcements
            </Link>
            <Link className={styles.button} to="#textSignUp">
              Text SignUp
            </Link>
            <a
              className={styles.button}
              href="https://mailchi.mp/7585f512f250/email-signup"
            >
              Email SignUp
            </a>

          </div>
          <p className={styles.sundayService}>
            The Sunday Service is at 10 am with masks optional.
          </p>
          <p className={styles.sundayService}>
            Rockingham County is at the green (low) level according to the CDC
            Covid Community metrics.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
