import React from "react"
import styles from "./virtualGathering.module.css"
import image from "../../content/assets/AndTheySaw.jpg"
import { FaPhone } from "react-icons/fa"

const Vbs = () => {
  return (
    <div>
      <a name="gathering"></a>
      <div className={styles.container}>
        <div className={styles.children}>
          <h2>Virtual Gathering</h2>
          <p className={styles.text}>
            We want to give our parishioners a virtual option for conversation
            and a chance to see one another, if only on a screen. If you're
            interested, select the button below and choose one of the following date and time
            options, and we will send you a Zoom invitation to join our
            conversation on that day. This is an informal gathering with no
            meeting or other work to do. Strictly social! We hope to see you at
            one of the gatherings!
          </p>
          <div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6EFdrnj0AWkMUYAOB7P07OFaKCRpccSQzmJ8mgxyOIuJXZA/viewform?usp=sf_link">
              <button className={styles.button}>
                Select Date and Time
              </button>
            </a>
          </div>
        </div>
        <div className={`${styles.image} ${styles.children}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div>
      </div>

  

    </div>
  )
}

export default Vbs
