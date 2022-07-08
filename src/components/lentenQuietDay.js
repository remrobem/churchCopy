import React from "react"
import { Link } from "gatsby"
import * as styles from "./lentenQuietDay.module.css"
import image from "../../content/assets/LentenQuietDay.png"

const LentenQuietDay = () => {
  return (
    <div className={styles.container}>
        <Link  to="https://us02web.zoom.us/j/88963176532">
           <img className={styles.image} src={image} alt="Lenten Quiet Day"
          ></img>
        </Link>
    </div>
  )
}

export default LentenQuietDay
