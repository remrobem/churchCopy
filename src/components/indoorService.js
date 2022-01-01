import React from "react"
import { Link } from "gatsby"
import * as styles from "./indoorService.module.css"

const IndoorService = () => {
  return (
    <div className={styles.container} id="indoor">
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Sunday Service</h1>
        </div>
        <div>
          <div className={styles.text}>
            {/* <p>Sunday service is at 10 am and is held indoors. </p>
            <p>Online registration is no longer required.</p>
            <p>
              We do require all attendees sign-in for purposes of contact
              tracing.
            </p>
            <p>
              Please make sure you sign the sheet in the narthex, along with
              your phone number, when you come into church.{" "}
            </p>
            <p>
              If you choose to form a "pod" of vaccinated worshippers, you may
              sit together during the service.
            </p>
            <p>Masks are still required throughout the service.</p>
            <p>
              We hope you'll join us in person each Sunday but, if you aren't
              able to attend, please watch the servie online{" "}
              <span>
                <Link to="#epiphany_services">here.</Link>
              </span>
            </p> */}
            <h2 className={styles.heading2}>In-person worship suspended</h2>
            <p>
              Due to the rapid rise in the omicron Covid variant, our parish
              leadership is following the recommendation of our bishops and
              their health advisors and suspending in-person worship for January
              2, 9, and 16.
            </p>
            <p>
              The service will be streamed at 10 am and be available on YouTube and
              Facebook. Click
              <span>
                <Link to="#epiphany_services"> here </Link>
              </span>{" "}
              to watch.
            </p>
            <p>
              It also means that we will not be able to worship together on our
              Feast Day, January 6.
            </p>
            <p>
              This is very disappointing for all of us. Throughout the pandemic,
              Epiphany has followed all the protocols and we have done our best
              to keep our community safe. This is a continuation of that
              Christian concern for one another, especially the most vulnerable
              among us.
            </p>
            <p>
              We will get another update from our bishops on Tuesday, January 4,
              and will pass along the information we receive.
            </p>
            <p>
              Please pray for those who have contracted Covid, and those who
              care for them, especially our overburdened medical community.{" "}
            </p>
            <p>
              And please, please encourage everyone you know to be vaccinated.
              Even though it's still possible to get Covid, the risk of death or
              illness requiring hospitalization will be lessened.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndoorService
