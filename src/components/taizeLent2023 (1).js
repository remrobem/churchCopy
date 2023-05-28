import React from "react"
import * as styles from "./taizeLent2023.module.css"
import "@fontsource/aboreto"
import { StaticImage } from "gatsby-plugin-image"
const TaizeLent2023 = () => {
  return (
    <div className={styles.container} id="taize">
      <StaticImage
        src="../../content/assets/taizeLent2023.jpg"
        alt="Taize on Wednesdays 6 pm"
        loading="lazy"
        object-fit="cover"
        className={styles.image}
      />
      <h1 className={styles.text}>
        A service of song, silence and contemplation
      </h1>
      <h2 className={styles.smallText}>Wednesdays at 6 pm</h2>
    </div>
  )
}

export default TaizeLent2023
