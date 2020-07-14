import React from "react"
import styles from "./vbs.module.css"
import image from "../../content/assets/VBS_image.png"

const Vbs = () => {
  return (
    <div className={styles.container}>
        <a name="vbs"></a>

      <div className={`${styles.image} ${styles.children}`}>
          <img src={image} alt="Compassion VBS logo"></img>
      </div>

      <div className={styles.children}>
        <h2>At-Home Virtual Vacation Bible School</h2>
        <p>
        July 27 – 31
        </p>
        <p className={styles.text}>
          Children will discover how Compassion helps us: welcome others, be
          brave, love ourselves, be present with each other, and gives us a
          fresh start.
        </p>
        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCCYD5jZCh4O5DRUeBPgUsKKEJtl9EhbtEbI9ZGSOYdAtWwA/viewform">
            <button className={styles.button}>
              Information and Registration
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Vbs
