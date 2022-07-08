import React from "react"
import { Link } from "gatsby"
import * as styles from "./ash-wednesday1.module.css"
import announcement from "../../content/assets/StThomasAshWednesday.jpg"

const AshWednesday1 = () => {
  return (
    <div className={styles.container}>
        <Link  to="https://www.facebook.com/stthomasreidsville">
           <img className={styles.image} src={announcement} alt="Ash Wednesday Service"
          ></img>
        </Link>
    </div>
  )
}

export default AshWednesday1
