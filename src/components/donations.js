import React from "react"
import styles from "./donations.module.css"

const Donations = () => {
  return (
    <div className={styles.container} id="epiphany_donate">
      <h2 className={styles.title}>Please Donate</h2>
      <blockquote className={styles.quote}>
        <p className={styles.text}>
          “Do not store up for yourselves treasures on earth, where moth and
          rust consume and where thieves break in and steal; but store up for
          yourselves treasures in heaven, where neither moth nor rust consumes
          and where thieves do not break in and steal. For where your treasure
          is, there your heart will be also.”
        </p>
        <footer>Matthew 6: 19-21</footer>
      </blockquote>
      <p className={styles.text}>
        Please remember to continue fulfilling your estimated giving or make
        contributions to Epiphany.
      </p>
      <p className={styles.text}>
        Checks can be made out to Church of the Epiphany and mailed to 538 Henry
        St, Eden NC 27288
      </p>
      <p className={styles.text}>
        Or you can use the link below to use your credit card to make a
        contribution directly to Epiphany.
      </p>

      <a href="https://tithe.ly/give?c=3897734">
        <button className={styles.button}>Donate</button>
      </a>
    </div>
  )
}

export default Donations
