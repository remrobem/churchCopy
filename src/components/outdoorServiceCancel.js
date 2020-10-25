import React from "react"
import styles from "./outdoorServiceCancel.module.css"
import { Link } from "gatsby"

const OutdoorServiceCancel = () => {
  return (
    <div className={styles.container} id="outdoor">
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Outdoor Service</h1>
          <h2>October 25, 2020</h2>
          <h1 className={styles.cancel}>Canceled due to poor weather conditions</h1>
          {/* <h2>Please come back later to reserve a spot for October 18</h2> */}
          <h2>We will have the regular 10 am indoor service live-streamed on 
            <a className={styles.link} href="https://www.facebook.com/madre.linda.7">Facebook</a> 
            and available in the 
            <Link className={styles.link} to="https://epiphanyeden.org/#epiphany_services"> Services</Link>
            {/* <a className={styles.link} href="https://epiphanyeden.org/#epiphany_services">Services</a>  */}
            list below</h2>
          <h2></h2>
        </div>
      </div>
    </div>
  )
}

export default OutdoorServiceCancel
