import React from "react"
import styles from "./estimateProgressBar.module.css"

const EstimateProgressBar = () => {
  const goal = 120000
  const current = 45800
  const progress = Math.round((current / goal) * 100)
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.text}>
          Goal: ${goal.toLocaleString("en", { useGrouping: true })}
        </h2>

        <div className={styles.progressbarContainer}>
          <div
            className={styles.progressbarComplete}
            style={{ width: `${progress}%` }}
          >
            <div className={styles.progressbarLiquid}></div>
          </div>
          <span className={styles.progress}>{progress}%</span>
        </div>
        <h2 className={styles.text}>
          Current: ${current.toLocaleString("en", { useGrouping: true })}
        </h2>
      </div>
    </div>
  )
}

export default EstimateProgressBar
