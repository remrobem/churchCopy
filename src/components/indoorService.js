import React from "react"
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
            <p>Sunday service is at 10 am and is held indoors. </p>
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
              We hope you'll join us in person each Sunday. </p> <p>If you aren't
              able to attend, please watch the service live or recorded on <span>
              <a href="https://www.facebook.com/epiphanyeden"> Facebook</a> or {" "}
              <a href="https://www.youtube.com/channel/UCQhee_wvQ62Bcv5lr2ftGVg"> YouTube
              </a>
              </span>
            </p>
            <p>Or use the links below.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndoorService
