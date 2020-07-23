import React from "react"
import styles from "./churchLinks.module.css"

const ChurchLinks = () => {
  return (
    <div>
      {/* // Epiphany Links */}

      <form className={styles.buttonContainer}>
        <button className={styles.button} formaction="#epiphany_services">
          Epiphany Services
        </button>

        <button className={styles.button} formaction="#epiphany_donate">
          Make A Donation
        </button>
      </form>

      {/* // NC Diocese links */}
      <form className={styles.buttonContainer}>
        <button
          className={styles.button}
          formaction="https://www.episdionc.org/please-note/"
        >
          Please Note
        </button>

        <button
          className={styles.button}
          formaction="https://www.episdionc.org/coronavirus/"
        >
          NC Episcopal Diocese COVID-19
        </button>

        <button
          className={styles.button}
          formaction="https://www.episdionc.org/"
        >
          NC Episcopal Diocese
        </button>
      </form>

      {/* // National Church Links */}
      <form className={styles.buttonContainer}>
        <button
          className={styles.button}
          formaction="https://cathedral.org/worship/"
        >
          National Cathedral Services
        </button>
        <button
          className={styles.button}
          formaction="https://episcopalchurch.org/"
        >
          National Episcopal Church
        </button>
      </form>
    </div>
  )
}

export default ChurchLinks
