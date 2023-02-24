import React from "react"
import * as styles from "./lentStudy2023.module.css"
import { StaticImage } from "gatsby-plugin-image"
const LentStudy2023 = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.text}>Ashes.</h1>
      <h1 className={styles.text}>Wednesday.</h1>
      <h1 className={styles.text}>Noon and 6 pm.</h1>
      <h1 className={styles.text}>The 6 pm service as at LUMC</h1> */}
      <StaticImage
        src="../../content/assets/lentenStudy2023.png"
        alt="Lenten Study info"
        loading="eager"
        object-fit="cover"
        className={styles.image}
      />
    </div>
  )
}

export default LentStudy2023
