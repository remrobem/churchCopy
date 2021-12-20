import React from "react"
import { Link } from "gatsby"
import * as styles from "./announcements.module.css"
import { FaEnvelope } from "react-icons/fa"

const Announcements = () => {
  return (
    <div className={styles.container} id="announcements">
      <div className={styles.announcement} id="20211114">
        <h1>Upcoming Services Schedule</h1>
        <br></br>
        <div className={styles.text}>
          <h2 className={styles.serviceHeading}>Longest Night Service</h2>
          <h2 className={styles.serviceSubHeading}>December 21 Tuesday</h2>
          <h2 className={styles.serviceSubHeading}> 5:30 pm.</h2>
          <p>
            On the Winter Solstice, the longest night of the year, we offer this
            service especially for those who may not feel “merry and bright”
            this time of year. Whatever the reason, this service acknowledges
            that loss, grief, depression and other realities exist even as we
            await the birth of Jesus. All are welcome to this quiet service with
            no music or Holy Communion. Please invite friends and family to join
            us.
          </p>

          <h2 className={styles.serviceHeading}>Christmas Eve Service</h2>
          <h2 className={styles.serviceSubHeading}>December 24 Friday</h2>
          <h2 className={styles.serviceSubHeading}>5:00 pm</h2>
          <p>
            All are welcome. It will be a family service and, as always,
            children are welcome and encouraged to participate.
          </p>
          <h2 className={styles.serviceHeading}>Christmas Day Service</h2>
          <h2 className={styles.serviceSubHeading}>December 25 Saturday</h2>
          <h2 className={styles.serviceSubHeading}>10:00 am</h2>
          <p>A informal service for everyone.</p>

          <h2 className={styles.serviceHeading}>
            First Sunday after Christmas
          </h2>
          <h2 className={styles.serviceSubHeading}>December 26 Sunday</h2>
          <h2 className={styles.serviceSubHeading}>10:00 am</h2>
          <p>
            We will sing Christmas carols and celebrate Holy Communion. We hope
            you will join us and bring your friends and family.
          </p>

          <h2 className={styles.serviceHeading}>Epiphany</h2>
          <h2 className={styles.serviceSubHeading}>January 6 Thursday</h2>
          <p>
            There will be a celebration of Epiphany, our Feast Day, on January
            6. More information will be available soon.
          </p>
          <br></br>
        </div>
      </div>

      <div className={styles.announcement} id="20211114">
        <h1>Office Hours</h1>
        <div className={styles.text}>
          <p>
            The church office will be closed December 26 - January 3. Phone and
            email messages will be checked periodically during that time. In
            case of a pastoral emergency, contact Mother Linda directly.
          </p>
          <br></br>
        </div>
      </div>

      <div className={styles.announcement} id="20211114">
        <h1>Sunday services are being held indoors at 10 am</h1>
        <div className={styles.text}>
          <p>
            See <Link to="/#indoor">Sunday Services</Link> below for more
            details.
          </p>
          <br></br>
        </div>
      </div>
      <div className={styles.announcement}>
        <h1>Feast of the Baptism of Jesus</h1>
        <div className={styles.text}>
          <p>Sunday, January 9, is the Feast of the Baptism of Jesus.</p>
          <p>
            If you or a family member wish to receive the Sacrament of Baptism
            on that day, please email Mother Linda or Carol by December 31.
          </p>
          <p>
            {" "}
            <a className={styles.link} href="mailto:lindaynye@epiphanyeden.org">
              <FaEnvelope /> lindanye@epiphanyeden.org
            </a>
          </p>

          <p>
            <a className={styles.link} href="mailto:church@epiphanyeden.org">
              <FaEnvelope /> church@epiphanyeden.org
            </a>
          </p>
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
