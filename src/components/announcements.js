import React from "react"
import styles from "./announcements.module.css"

const Announcements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.announcement}>
        <h1>Estate Sale</h1>
        <div className={styles.text}>
          <p>
            The Epiphany Church Women are sponsoring an estate sale Friday, June
            18 and Saturday, June 19 from 9:00 a.m. to 12:00 noon.
          </p>
          <p>The sale will be held at <a href="https://goo.gl/maps/bZJxUri2hh6X7Vht5">Ample Storage.</a> </p>
          <p>All proceeds will go to outreach. </p>
          <p>We need volunteers to work the sale, set up and clean up.</p>
          <p>We will also need men to help with this sale. </p>
          <p>
            Please contact Mary Ivie for more details and/or to let her know how
            you can help.
          </p>
          <p>Contact information: mary.ivie@gmail.com or 336-613-7952.</p>
        </div>
      </div>

      <div className={styles.announcement}>
        <h1>Sunday School - on Tuesdays!!</h1>
        <div className={styles.text}>
          <p>
            Starting June 15, adult Sunday School will be Tuesdays at 7 pm. We
            will meet for about 1 hour.
          </p>
          <p>
            We hope this change might make Sunday School available to more
            people.
          </p>
          <p>
            The format will remain the same: watch the National Cathedral sermon
            from the prior Sunday and discuss it.
          </p>
          <p>
            It is very informal. It is not uncommon for the discussions to
            wander a bit, which is ok.
          </p>
          <p>We hope you will join us.</p>
          <p>
            It will remain a Zoom meeting with the{" "}
            <a href="https://us02web.zoom.us/j/86264215594">existing link.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
