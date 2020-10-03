import React from "react"
import styles from "./churchLinks.module.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const ChurchLinks = () => {
  return (
    <div>
      <form className={styles.buttonContainer}>
        <button className={styles.button}>
          <AnchorLink to="/#epiphany_services" className="anchorLink" stripHash>
            Epiphany Services
          </AnchorLink>
        </button>

        <button
          className={styles.button}
          formAction="https://1drv.ms/b/s!AiflQFCf7v9pqyDxjnFS53t99gR2?e=6LdhAD"
        >
          Newsletter
        </button>
        
        <button className={styles.button}>
          <AnchorLink to="/#epiphany_donate" className="anchorLink" stripHash>
            Make A Donation
          </AnchorLink>
        </button>
        <button
          className={styles.button}
          formAction="https://us02web.zoom.us/j/86458901723?pwd=L3pHbmxsblFqM3NpbDA5TzdEeHJ1dz09"
        >
          Sunday School at 2 pm
        </button>
      </form>

      {/* // NC Diocese links */}
      <form className={styles.buttonContainer}>
        <button
          className={styles.button}
          formAction="https://www.episdionc.org/please-note/"
        >
          Please Note
        </button>

        <button
          className={styles.button}
          formAction="https://www.episdionc.org/coronavirus/"
        >
          NC Episcopal Diocese COVID-19
        </button>

        <button
          className={styles.button}
          formAction="https://www.episdionc.org/"
        >
          NC Episcopal Diocese
        </button>
      </form>

      {/* // National Church Links */}
      <form className={styles.buttonContainer}>
        <button
          className={styles.button}
          formAction="https://cathedral.org/worship/"
        >
          National Cathedral Services
        </button>
        <button
          className={styles.button}
          formAction="https://episcopalchurch.org/"
        >
          National Episcopal Church
        </button>
      </form>
    </div>
  )
}

export default ChurchLinks
