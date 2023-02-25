import React from "react"
import * as styles from "./bellTowerTreasures.module.css"
import { StaticImage } from "gatsby-plugin-image"
const BellTowerTreasures = () => {
  return (
    <div className={styles.container} id="bellTower">
      {/* <h1 className={styles.text}>Ashes.</h1>
      <h1 className={styles.text}>Wednesday.</h1>
      <h1 className={styles.text}>Noon and 6 pm.</h1>
      <h1 className={styles.text}>The 6 pm service as at LUMC</h1> */}
      <StaticImage
        src="../../content/assets/bellTowerTreasures.jpg"
        alt="Bell Tower Treasures"
        loading="eager"
        object-fit="cover"
        className={styles.image}
      />
      <StaticImage
        src="../../content/assets/bellTowerDonations.jpg"
        alt="Bell Tower Treasures Donations"
        loading="eager"
        object-fit="cover"
        className={styles.image}
      />
    </div>
  )
}

export default BellTowerTreasures
