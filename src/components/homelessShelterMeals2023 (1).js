import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./homelessShelterMeals2023.module.css"

const HomelessShelterMeals2023 = () => {
  return (
    <main>
      <section className={styles.imageContainer} id="morningprayer">
        <StaticImage
          src="../..//content/assets/horo-header.jpg"
          alt="HORO Logo"
          loading="eager"
          backgroundColor="blueviolet"
        />
      </section>
      <section className={styles.container}>
        <p className={styles.text}>
          We have our dates for bringing meals to the Homeless Shelter. The dates are for dinner and breakfast the following morning.
        </p>
        <p className={styles.text}>
          <ul>
            <l1>Jan 19 Thur</l1>
            <l1>Jan 26 Thur</l1>
            <l1>Feb 8 Wed</l1>
            <l1>Feb 22 Wed</l1>
            <l1>Mar 23 Thur</l1>
            <l1>Mar 30 Thur</l1>
            <l1>Apr 6 Thur</l1>
            <l1>Apr 20 Thur</l1>
          </ul>
        </p>
        <p className={styles.text}>See you there!!</p>
        <p className={styles.text}>
         Please email <a href="mailto:outreach@epiphanyeden.org">outreach@epiphanyeden.org</a> if you would like to assist on one of these dates.
        </p>
      </section>
    </main>
  )
}
export default HomelessShelterMeals2023
