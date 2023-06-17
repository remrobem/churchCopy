import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./bishopJennifer2023.module.css"

const BishopJennifer2023 = () => {
  return (
    <div className={styles.component}>
      <div>
        <div className={styles.headerTextContainer}>
          <h1 className={styles.header}>
            Bishop Jennifer Brooke-Davidson to visit Eden
          </h1>
          <h3 className={styles.text}>Sunday June 18th at St. Luke's</h3>
          <h3 className={styles.text}></h3>
        </div>
        <div>
          <div className={styles.imageContainer}>
            <StaticImage
              src="../../content/assets/bishopJennifer.jpg"
              alt="Bishop Jennifer"
              placeholder="blurred"
              style={{ maxWidth: "50%", maxHeight: "50%" }}
            />
          </div>

          <div className={styles.textContainer}>
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
      </div>
    </div>
  )
}

export default BishopJennifer2023
