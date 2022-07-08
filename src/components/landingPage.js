import React from "react"
import * as styles from "./landingPage.module.css"

const LandingPage = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.messageTop}>
        {/* <div className={styles.message}>
          <h1>ALL ARE WELCOME</h1>
        </div> */}
        <div className={styles.message}>
          {/* <h1>
            We believe in a loving, liberating, and life-giving God: Father,
            Son, and Holy Spirit.
          </h1> */}
          <h1 className={styles.message}>
            Pray for Ukraine
          </h1>
        </div>
      </div>
    </div>
  )
}


export default LandingPage
