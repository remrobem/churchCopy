import React from "react"
import * as styles from "./ashWednesday2023.module.css"
import { StaticImage } from "gatsby-plugin-image"
const AshWednesday2023 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Ashes.</h1>
      <h1 className={styles.text}>Wednesday.</h1>
      <h1 className={styles.text}>Noon and 6 pm.</h1>
      <h1 className={styles.text}>The 6 pm service as at LUMC</h1>
      <StaticImage
        src="../../content/assets/AshWednesday2023.png"
        alt="Ash Wednesday info"
        className={styles.image}
      />
    </div>
  )
}

export default AshWednesday2023
