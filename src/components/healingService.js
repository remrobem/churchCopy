import React from "react"
import styles from "./healingService.module.css"
import image from "./../../content/assets/HoldingHope_Calendar-756x624.jpg"

const HealingService = () => {
  return (
    <div className={styles.container}>
      <a name="vbs"></a>

      <div className={styles.row}>
        <div className={`${styles.image}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div>

        <div className={styles.item}>
        <h3>Sunday, November 1, 2020 | 4:00pm</h3>
          <h2>
            HOLDING ONTO HOPE: A NATIONAL SERVICE FOR HEALING AND WHOLENESS
          </h2>
        
          <h4>
            Presiding Bishop Michael Curry leads a service of prayer to shine as
            a beacon of hope for the nation amidst the COVID-19 pandemic, racial
            reckoning and a hard-fought election. In the midst of pandemic,
            racial reckoning and a historic election, the live-streamed service
            will gather Americans for prayer, song, lament, hope and a call to
            love God and neighbor.
          </h4>

          <h2>
            <a href="https://cathedral.org/event/holding-onto-hope-a-national-service-for-healing-and-wholeness/">
              <button className={styles.button}>Details</button>
            </a>
          </h2>
        </div>
        {/* <div className={`${styles.image}`}>
          <img src={image} alt="Compassion VBS logo"></img>
        </div> */}
      </div>
    </div>
  )
}

export default HealingService
