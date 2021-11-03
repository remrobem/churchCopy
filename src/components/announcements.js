import React from "react"
import { Link } from "gatsby"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import * as styles from "./announcements.module.css"

const Announcements = () => {
  return (
    <div className={styles.container} id="announcements">
      <div className={styles.announcement}>
        <h1>Nov 7, 2021 - Daylight Saving Time Ends</h1>
        <div className={styles.text}>
          <p>Be sure to turn your clocks back 1 hour on Saturday night.</p>
          <p> Enjoy the extra hour of sleep. </p>
          <br></br>
        </div>
      </div>
      <div className={styles.announcement}>
        <h1>All Saints Day</h1>
        <div className={styles.text}>
          <p>We are observing All Saints Day on Sunday, November 7. </p>
          <p>
            If you have names to add to our remembrance list for the bulletin
            that Sunday, get them to Carol in the church office by Wednesday,
            November 3.
          </p>
          <p>
            <a className={styles.link} href="tel:1-336-623-9410">
              <FaPhone /> 336-623-9410
            </a>
          </p>
          <p>
            <a className={styles.link} href="mailto:church@epiphanyeden.org">
              <FaEnvelope /> church@epiphanyeden.org
            </a>
          </p>
          <br></br>
        </div>
      </div>
      <div className={styles.announcement}>
        <h1>Registration is not required for Sunday Services</h1>
        <div className={styles.text}>
          <p>
            See <Link to="/#indoor">Sunday Services</Link> below for more
            details.
          </p>
          <p>Sunday service is at 10 am</p>
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
        <h1>Keep up with the diocese</h1>
        <div className={styles.text}>
          <p>
            Sometimes it is easy for us to forget that Church of the Epiphany is
            part of the Diocese of North Carolina.
          </p>
          <p>
            Our diocese is very active providing resources, information and
            opportunities for Epiphany and each of us as individuals. As does
            the
            <span>
              <a href="https://www.episcopalchurch.org/">
                {" "}
                national Episcopal church.
              </a>
            </span>
          </p>
          <p>
            Please take a few minutes to visit the Diocese of North Carolina web
            site at{" "}
            <span>
              <a href="https://www.episdionc.org/">
                https://www.episdionc.org/
              </a>
            </span>{" "}
            and poke around a bit.
          </p>
          <strong>Pro tip: </strong>
          Cruise over to the
          <span>
            <a href="https://www.episdionc.org/publications/"> Publications </a>
          </span>
          page and make sure you are on the list to get "The Disciple" magazine
          and the "Please Note" weekly email.
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
