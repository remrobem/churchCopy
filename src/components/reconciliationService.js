import React from "react"
import styles from "./reconciliationService.module.css"
// import image from "./../../content/assets/HoldingHope_Calendar-756x624.jpg"

const ReconciliationService = () => {
  return (
    <div className={styles.container} id="reconciliation">
      <a name="reconciliation"></a>

      {/* <div className={styles.row}>
        <div className={`${styles.image}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div> */}

      <div className={styles.item}>
        <h2>
          Church of The Epiphany's Virtual Service of Healing and Reconciliation
        </h2>
        <h2>Wednesday, November 4 | 5:30pm to 7 pm</h2>
        <h2>
          <a href="https://us02web.zoom.us/j/82435350638">
            <button className={styles.button}>Join the Zoom Meeting</button>
          </a>
        </h2>
        <h3>
          Or call one these numbers and use Meeting ID: 824 3535 0638
          <ul>
            <li>(312)626-6799</li>
            <li>(646)558-8656</li>
            <li>(301)715-8592</li>
          </ul>
        </h3>
      </div>
      {/* <div className={`${styles.image}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default ReconciliationService
