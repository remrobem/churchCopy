import React from "react"
import * as styles from "./pledge.module.css"

const Pledge = () => {
  return (
    <div className={styles.container} id="pledge">
      <h2 className={styles.title}>Pledging for 2023</h2>
      <blockquote className={styles.quote}>
        <p className={styles.text}>
          “For nothing will be impossible with God.”
        </p>
        <footer>Luke 1:37</footer>
      </blockquote>
      <p className={styles.text}>
        You can provide your pledge amount by sending an email to pledge@epiphanyeden.org
      </p>
      <p className={styles.text}>
        or by using the Pledge button below to open an email for you.
      </p>
      <p className={styles.text}>Your pledge can also be mailed to:</p>
      <p className={styles.text}>Church of the Epiphany</p>
      <p className={styles.text}>538 Henry St</p>
      <p className={styles.text}>Eden NC 27288</p>

      <div>
        <form>
          <button
            className={styles.button}
            a
            href="#mailgo"
            data-address="pledge"
            data-domain="epiphanyeden.org"
            data-subject="My Pledge for 2023"
            data-body={"Name: \nPledge amount for 2023: "}
          >
            Pledge Email
          </button>
        </form>
      </div>
    </div>
  )
}

export default Pledge
