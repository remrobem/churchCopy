import React from "react"
import styles from "./outdoorServiceCancel.module.css"

const OutdoorServiceCancel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Outdoor Service</h1>
          <h2>October 11, 2020</h2>
          <h1 className={styles.cancel}>Canceled due to poor weather conditions</h1>
          <h2>Please come back later to reserve a spot for October 18</h2>
          <h2>We will have the regular 10 am indoor service live-streamed on Facebook and available in the Services list below</h2>
          <h2></h2>
        </div>
      </div>
    </div>
  )
}

export default OutdoorServiceCancel
