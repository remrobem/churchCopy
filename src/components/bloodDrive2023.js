import React from "react"
import * as styles from "./bloodDrive2023.module.css"


const BloodDrive2023 = () => {
  return (
    <div id="blooddrive" className={styles.container} >
      <div>
        <iframe className={styles.frame}
          src="https://mailchi.mp/31639742b872/your-help-is-needed-in-our-community-13817074"
          // style={{ width: "100vw", height: "100vh" }}
          title="Blood Drive"
        ></iframe>
      </div>
    </div>
  )
}

export default BloodDrive2023
