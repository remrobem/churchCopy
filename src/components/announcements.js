import React from "react"
import styles from "./announcements.module.css"

const Announcements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.announcement}>
        <h1>Women's Group Meeting</h1>
        <div className={styles.text}>
          <p>
            Let’s plan to meet Wednesday morning, June 9 at 10:00 a.m. at Ample
            Storage (beside Tractor Supply) to begin pricing items for our sale.
          </p>
          <p>
            Go to the right side of the building, second door to get to our
            storage unit, #21.
          </p>
          <p>
            Plan to have lunch at Rio Grande at 12:00. If you can’t meet us at
            10:00, please feel free to join us for lunch.
          </p>
          <p>Each person is responsible for paying for her own lunch. </p>
          <p>
            If you have any questions, please contact Mary Ivie at
            mary.ivie@gmail.com or 336-613-7952.{" "}
          </p>
          <p>
            If you plan to join us for lunch, please let Mary know so she can
            let Rio Grande know our number.
          </p>
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
