import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./scoopForSchool.module.css"

const ScoopForSchool = () => {
  return (
    <div className={styles.container}>
      <StaticImage
        src="/Users/robmartin/Google Drive/Church/website/website-202006/content/assets/ScoopForSchool.jpg"
        alt="Scoop For School"
        loading="eager"
        width={200}
        height={200}
      />
    </div>
  )
}
export default ScoopForSchool
