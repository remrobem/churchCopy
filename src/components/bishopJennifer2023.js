import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./bishopJennifer2023.module.css"

const BishopJennifer2023 = () => {
  return (
    <div className={styles.component}>
      <div>
        {/* <div className={styles.imageContainer}>
          <StaticImage
            src="../../content/assets/bishopJennifer.jpg"
            alt="Bishop Jennifer"
            placeholder="blurred"
            // width={500}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div> */}

        <div className={styles.textContainer}>
          <h1 className={styles.header}>
            Bishop Jennifer Brooke-Davidson to visit Eden
          </h1>
          <p className={styles.text}>Sunday June 18th</p>
          <p className={styles.text}>St. Luke's</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <p className={styles.additionalText}>
          This Sunday, June 18, we will worship at St. Luke's Episcopal Church
          for the visitation of Bishop Jennifer Brooke-Davidson.
        </p>
        <p className={styles.additionalText}>
          St. Luke's Episcopal Church, also called the Rock church, is located
          at{" "}
          <a href="https://goo.gl/maps/BSP5NCcWbiMQ9az3A">
            600 Morgan Rd in Eden
          </a>
          .
        </p>
        <p className={styles.additionalText}>
          Three people from Epiphany will be confirmed that day.
        </p>
        <p className={styles.additionalText}>
          The service will begin at 11:00 am and a reception will follow in St.
          Luke's parish hall.
        </p>
      </div>
    </div>
  )
}

export default BishopJennifer2023
