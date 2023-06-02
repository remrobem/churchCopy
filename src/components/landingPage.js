import React from "react"
import * as styles from "./landingPage.module.css"

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messageTop}>
        <div>
          <h1 className={styles.message}>ALL ARE WELCOME</h1>
        </div>
        <div>
          <h1 className={styles.message}>
            We believe in a loving, liberating, and life-giving God: Father,
            Son, and Holy Spirit.
          </h1>
          {/* <h1 className={styles.message}>
            Pray for Ukraine
          </h1> */}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
