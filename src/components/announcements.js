import React from "react"
import * as styles from "./announcements.module.css"

const Announcements = () => {
  return (
    <div className={styles.container} id="announcements">
      <div className={styles.announcement}>
        <h1>Registration is not required for Sunday Services</h1>
        <div className={styles.text}>
          <p>
            See the Indoor Services section below for more details.
          </p>
          <br></br>
          <br></br>
        </div>
      </div>
     <div className={styles.announcement}>
        <h1>Blessing of Animals</h1>
        <div className={styles.text}>
          <p>
            The annual Blessing of Animals will be held on Saturday, October 2,
            at 10:00 am in the church yard.
          </p>
          <p>All pets are welcome, and should be on a leash or in a carrier.</p>
          <p>
            This event isn't limited to dogs; Mother Linda has blessed many
            species in past years.
          </p>
          <p>Please invite your friends and their pets.</p>
          <br></br>
          <br></br>
        </div>
      </div>
      <div className={styles.announcement}>
        <h1>Afghan Refugees - How to Help</h1>
        <div className={styles.text}>
          <p>
            Potentially hundreds of Afghan refugees will be resettling in the
            Triad in the coming days or weeks.
          </p>
          <p>
            CWS-Greensboro (Church World Services) is a leader in the
            resettlement effort.
          </p>
          <p>
            Visit{" "}
            <span>
              <a href="https://cwsgreensboro.org/protecting-afghan-refugees-at-risk/">
                the CWS website{" "}
              </a>
            </span>
            for more information on how you can help.
          </p>
          <p>
            Episcopal Migration Ministries(EMM) is also helping nationally.
            Visit{" "}
            <span>
              <a href="https://episcopalmigrationministries.org/afghan-allies/">
                the EMM site{" "}
              </a>
            </span>
            for more information.
          </p>
          <br></br>
          <br></br>
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
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default Announcements
