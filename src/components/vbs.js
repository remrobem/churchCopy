import React from "react"
import styles from "./vbs.module.css"
import image from "../../content/assets/VBS_image.png"
import { FaPhone } from "react-icons/fa"

const Vbs = () => {
  return (
    <div className={styles.container}>
      <a name="vbs"></a>

      <div className={styles.row}>
        <div className={`${styles.image}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div>

        <div className={styles.item}>
          <h2>At-Home Virtual Vacation Bible School</h2>
          <h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCCYD5jZCh4O5DRUeBPgUsKKEJtl9EhbtEbI9ZGSOYdAtWwA/viewform">
              <button className={styles.button}>
                Information and Registration
              </button>
            </a>
          </h2>
          <h2>
            <p className={styles.text}>
              {`Or call `}
              <a className={styles.link} href="tel:1-276-224-2811">
                <FaPhone /> 276-224-2811
              </a>
            </p>
          </h2>
          <h2>July 27 – 31</h2>
        </div>
        <div className={`${styles.image}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div>
      </div>
      <h2 className={styles.text}>
        Children will discover how Compassion helps us: welcome others, be
        brave, love ourselves, be present with each other, and gives us a fresh
        start.
      </h2>
    </div>
  )
}

export default Vbs
