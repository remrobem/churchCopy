import React from "react"
import { Link } from "gatsby"
import * as styles from "./announcements.module.css"

const Announcements = () => {
  return (
    <div className={styles.container} id="announcements">
      <div className={styles.announcement} id="ashWed">
        <h1>Ash Wednesday Services</h1>
        <div className={styles.text}>
          <p>
            We will join Leakesville United Methodist Church for Ash Wednesday
            services on March 2.{" "}
          </p>
          <p>
            There will be a service at Epiphany at 12 noon and another at 6:30
            p.m. at LUMC.
          </p>
          <p>
            {" "}
            Please join us for the liturgy and Imposition of Ashes. Masks are
            required for the service at Epiphany.
          </p>
          <br></br>
        </div>
      </div>

      <div className={styles.announcement} id="20211114">
        <h1>In-person Sunday services have restarted</h1>
        {/* <h1>Sunday services are being held indoors at 10 am</h1> */}
        <div className={styles.text}>
          <p>
            See <Link to="/#indoor">Sunday Services</Link> below for more
            details.
          </p>
          <br></br>
        </div>
      </div>
      <div className={styles.announcement} id="20211114">
        <h1>Homeless Shelter Meals</h1>
        {/* <h1>Sunday services are being held indoors at 10 am</h1> */}
        <div className={styles.text}>
          <p>
            For at least 15 years, we have helped feed and shelter our homeless
            neighbors. Our church was one of the founding churches for the
            homeless shelter which is now run by Home of Refuge Outreach.
          </p>
          <p>
            This year we have given financial support to help with operational
            costs as well as for the new facility being developed.
          </p>
          <p>Now it is time for us to feed our neighbors.</p>
          <p>
            Our remaining dates are listed below. The date is when we are to
            supply dinner. We also bring breakfast for the following morning.
          </p>
          <p>
            Because of COVID, we can drop food off at a table outside the
            shelter and the neighbors will bring it in and serve themselves.
          </p>
          <p className={styles.list}>
            You can help by doing one or more of the following:
            <li>Supply food for someone else to cook</li>
            <li>Cook or prepare food</li>
            <li>Deliver food to the shelter</li>
            <li>
              Buy supplies needed for that night- from drinks to bowls to paper
              towels
            </li>
            <li>Deliver supplies to the shelter</li>
          </p>
          <p>
            For dinner, we should provide a tasty, nutritious, and fully
            prepared meal. Some sort of dessert is real nice too.
          </p>
          <p>
            For breakfast, most days it is ok to supply something like
            bacon/sausage and eggs that the host can cook. Homemade breakfast
            casseroles and biscuits are also enjoyed. Breakfast can be dropped
            off in the evening.
          </p>
          <p>
            As we get closer to the date, we will find out how many neighbors to
            expect and what supplies we may need to bring.
          </p>
          <p>
            We don’t have an online sign-up sheet so please reply to this email
            or email{" "}
            <a href="mailto: outreach@epiphanyeden.org">
              {" "}
              outreach@epiphanyeden.org
            </a>
            . In your email, please indicate which date you would like to help
            and what you would like to do.
          </p>
          <p>
            And there might be a special place in heaven for those who volunteer
            to coordinate the meals and delivery for one night.
          </p>
          <p className={styles.list}>
            These are the dates (all on a Thursday):
            <li>March 17</li>
            <li>March 31</li>
            <li>April 7</li>
            <li>April 21</li>
          </p>
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
