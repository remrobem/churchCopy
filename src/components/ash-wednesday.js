import React from "react"
import styles from "./ash-wednesday.module.css"

const AshWednesday = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1 className={styles.center}>Ash Wednesday</h1>
        </div>
        <div className={styles.message}>
          <h1 className={styles.left}>Drive-up Imposition of Ashes</h1>
          <h1 className={styles.left}>10:00 am - 12:30 pm</h1>
          <h1 className={styles.left}>All are welcome</h1>
          <h1 className={styles.left}>Park in front of Epiphany</h1>
          <h1 className={styles.left}>
            Mother Linda will perform the ancient practice of sprinkling ashes without touching.
          </h1>
          <h1 className={styles.left}>
           
          </h1>
          
        </div>
      </div>
    </div>
  )
}

export default AshWednesday
