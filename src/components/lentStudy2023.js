import React from "react"
import "@fontsource/aboreto"
import "@fontsource/glory"

import * as styles from "./lentStudy2023.module.css"

const LentStudy2023 = () => {
  return (
    <div>
      <div className={styles.container} id="lent">
        <h1 className={styles.heading}>Lenten Study Series</h1>
        <p className={styles.text}>
          Epiphany is having a Lenten study series with St. Thomas, Reidsville.
        </p>
        <p className={styles.text}>
          We will begin with a light soup supper at 5:00 and the program will
          begin at 6:00. Soup, bread, salad and drinks will be provided.{" "}
        </p>{" "}
        <p className={styles.text}>
          We will alternate between Epiphany and St. Thomas for our meetings
          each week.{" "}
        </p>{" "}
        <p className={styles.text}>
          We’ll try a hybrid meeting starting at 6:00 and see if that will work
          for future weeks.
        </p>
        <p className={styles.text}>
          The full schedule and zoom link are below.
        </p>{" "}
        <p className={styles.text}>
          <a href="https://us02web.zoom.us/j/89237049357">Zoom Link</a>
        </p>
        <p className={styles.dates}>February 28 - Epiphany</p>
        <p className={styles.dates}>March 7 - St. Thomas</p>
        <p className={styles.dates}>March 14 - Epiphany</p>
        <p className={styles.dates}>March 21 - St. Thomas</p>
        <p className={styles.dates}>March 28 - Epiphany</p>
        <p className={styles.dates}>
          March 5 (Wednesday) - Tenebrae service - Epiphany (no dinner)
        </p>
      </div>
    </div>
  )
}

export default LentStudy2023
