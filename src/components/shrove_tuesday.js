import React from "react"
import styles from "./shrove_tuesday.module.css"
import image from "../../content/assets/shrove_tuesday.jpeg"
// import { FaPhone } from "react-icons/fa"

const ShroveTuesday = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Shrove Tuesday</h1>
        </div>
        <div className={styles.message}>
          <h1>
            Burning of the Palms for Ash Wednesday
          </h1>
          <h1>
            7 pm
          </h1>
          <button
          type="button"
          className={styles.button}
          onClick={e => {
            e.preventDefault()
            window.location.href =
              "https://us02web.zoom.us/j/82068036592"
          }}
        >
          Join Service at 7 pm
        </button>
        </div>
      </div>
    </div>
  )
}

export default ShroveTuesday
