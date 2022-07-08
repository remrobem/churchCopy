import React from "react"
import * as styles from "./shrove_tuesday.module.css"
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
              "https://youtu.be/Igyf-0BiEU8"
          }}
        >
          Watch the Service
        </button>
        </div>
      </div>
    </div>
  )
}

export default ShroveTuesday
