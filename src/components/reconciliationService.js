import React from "react"
import styles from "./reconciliationService.module.css"
// import image from "./../../content/assets/HoldingHope_Calendar-756x624.jpg"

const HealingService = () => {
  return (
    <div className={styles.container}>
      <a name="reconciliation"></a>

      {/* <div className={styles.row}>
        <div className={`${styles.image}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div> */}

      <div className={styles.item}>
        <h2>
          Church of The Epiphany's Virtual Service of Healing and Reconciliation
        </h2>
        <h2>Wednesday, November 4, 2020 | 5:30pm</h2>
        <h2>
          <a href="https://us02web.zoom.us/j/82435350638">
            <button className={styles.button}>Join the Zoom Meeting</button>
          </a>
        </h2>
      </div>
      {/* <div className={`${styles.image}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default HealingService
