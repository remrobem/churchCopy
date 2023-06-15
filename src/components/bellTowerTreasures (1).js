import React from "react"
import * as styles from "./bellTowerTreasures.module.css"
import { StaticImage } from "gatsby-plugin-image"
const BellTowerTreasures = () => {
  return (
    <div className={styles.container} id="bellTower">
      <StaticImage
        src="../../content/assets/bellTowerTreasures.jpg"
        alt="Bell Tower Treasures"
        loading="eager"
        object-fit="cover"
        className={styles.image}
      />
    </div>
  )
}

export default BellTowerTreasures
