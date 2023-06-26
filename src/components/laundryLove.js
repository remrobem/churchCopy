import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./laundryLove.module.css"

const LaundryLove = () => {
  return (
    <main className={styles.container} id="laundrylove">
      <h1 className={styles.title}>Laundry Love</h1>
      <p className={styles.book}>Coming Up:</p>
      <p className={styles.book}>Saturday July 1</p>
      <p className={styles.book}>9 to 11 am</p>
     
      <section className={styles.imageContainer}>
        <StaticImage
          src="../..//content/assets/LaundryLove1.jpg"
          alt="Laundry Love Poster"
          loading="eager"
        />
      </section>
      <section className={styles.container}>
        <p className={styles.book}>"Giving the Gift of Clean Clothes"</p>

        <p className={styles.text}>
          The first Saturday of each month is Laundry Love day at Epiphany.
        </p>

        <p className={styles.text}>We meet at the </p>
        <p className={styles.text}>Wash Tub Laundry</p>
        <p className={styles.text}>
          <a href="https://goo.gl/maps/x77QSUtpZxMLVjRw6">
            403 Kings Hwy in Eden
          </a>
        </p>
        <p className={styles.text}>from 9 am to 11 am.</p>
        <p className={styles.text}>
          We meet our neighbors, pay for their laundry and share some coffee and
          snacks.
        </p>
        <p className={styles.text}>
          if you have questions, please email outreach@epiphanyeden.org or
          contact the church.
        </p>
      </section>
    </main>
  )
}
export default LaundryLove
