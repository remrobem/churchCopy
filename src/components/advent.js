import React from "react"
import styles from "./advent.module.css"

const Advent = () => {
  return (
    <div className={styles.container}>
      <a name="advent"></a>

      <div className={styles.row}>
        <div className={styles.item}>
          <h2 className={styles.text}>Advent</h2>
          <h2 className={styles.text}>And the Word became Flesh…</h2>
          <h2 className={styles.text}>
            An Advent Retreat offered jointly for and by St. Thomas, Reidsville,
            St. Luke’s, Eden, and Epiphany, Eden.
          </h2>
          <h2 className={styles.text}>
            Saturday, December 5 from 10:00 am to 1:00 pm
          </h2>
          <h2 className={styles.text}>
            Retreat leaders: The Rt. Rev. William Gregg, The Rev. Wheigar Bright
            and The Rev. Linda Nye
          </h2>
          {/* <h2>Join the meeting on Facebook Live @stthomasreidsville</h2>
          <h2>Or Zoom at https://us02web.zoom.us/j/84933334949?pwd=ZXpaV0N5dDhtTWlYODZmdlFXSWUzZz09</h2> */}
        </div>
      </div>
      <div>
        <form>
          <button
            className={styles.button}
            formAction="https://us02web.zoom.us/j/84933334949?pwd=ZXpaV0N5dDhtTWlYODZmdlFXSWUzZz09">
            Join the Zoom Meeting Here
          </button>
        </form>
      </div>
    </div>
  )
}

export default Advent
