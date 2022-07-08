import React from "react"
import { Link } from "gatsby"
import * as styles from "./lentenStudy.module.css"
import announcement from "../../content/assets/LentenStudy.jpg"

const LentenStudy = () => {
  return (
    <div className={styles.container}>
        <Link  to="https://us02web.zoom.us/j/86054686048">
           <img className={styles.image} src={announcement} alt="Ash Wednesday Service"
          ></img>
        </Link>
    </div>
  )
}

export default LentenStudy
