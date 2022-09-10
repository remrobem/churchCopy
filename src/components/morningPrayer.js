import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./morningPrayer.module.css"

const MorningPrayer = () => {
  return (
    <main>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../..//content/assets/prayerBook.jpg"
          alt="Scoop For School"
          loading="eager"
        />
      </section>
      <section className={styles.container}>
        <p className={styles.text}>
          Beginning September 12 at 6:30 am, we will have Morning Prayer on Zoom
          on Monday Mornings.
        </p>
        <p className={styles.text}>
          You are welcome to come as you are, the Lord doesn't care if you show
          up in PJs.
        </p>
        <p className={styles.text}>See you there!!</p>
        <p className={styles.text}>If you need a Book of Common Prayer, email outreach@epiphanyeden.org</p>
        <p className={styles.text}>
          <a href="https://us02web.zoom.us/j/9599583196?pwd=Zm1JS3Q1S2VYVVFrODNKSTIxaytsdz0">
            <button className={styles.button}>Join Morning Prayer</button>
          </a>
        </p>
      </section>
    </main>
  )
}
export default MorningPrayer
