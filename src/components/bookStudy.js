import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./bookStudy.module.css"

const BookStudy = () => {
  return (
    <main className={styles.container} id="bookstudy">
      <h1 className={styles.title}>Book Study</h1>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../..//content/assets/AccidentalSaints.jpg"
          alt="Accidental Saints Book Cover"
          loading="eager"
        />
      </section>
      <section className={styles.container}>
        <p className={styles.book}>
          "Accidental Saints: Finding God in All the Wrong People"
        </p>
        <p className={styles.text}>by</p>
        <p className={styles.book}>Nadia Bolz-Weber</p>
        <p className={styles.text}>
          Wednesday at 6:00 pm
        </p>
        <p className={styles.text}>
          On 11/30, we plan on finishing the book by discussing chapters 16 through 19.
        </p>

        <p className={styles.text}>
          We will meet in-person at the church and also have a Zoom meeting. You
          can join the Zoom meeting by clicking on the button below.
        </p>
        <p className={styles.text}>
          The book is available in printed or electronic versions at your
          favorite book retailer.
        </p>
        <p className={styles.text}>
          If you need help getting a copy, please email
          outreach@epiphanyeden.org.
        </p>
        <p className={styles.text}>
          <button
            type="button"
            className={styles.button}
            onClick={e => {
              e.preventDefault()
              window.location.href = "https://us02web.zoom.us/j/86264215594"
            }}
          >
            Join Book Study (Wed 6 pm)
          </button>
        </p>
      </section>
    </main>
  )
}
export default BookStudy
