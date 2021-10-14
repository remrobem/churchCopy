import React from "react"
import * as styles from "./indoorService.module.css"

const IndoorService = () => {
  return (
    <div className={styles.container} id="outdoor">
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Indoor Services</h1>
        </div>
        <div>
          <div className={styles.text}>
            <p>
              Online registration for Sunday indoor services will no longer be
              used. We used that registration as a means of contact tracing in
              the event of a positive Covid case.
            </p>
            <p>
              We have returned to sign-ins for contact tracing to make sure we
              capture the names and numbers of all who attend. If necessary, we
              will return to registration in the future but right now Sunday
              attendance doesn't require it.
            </p>
            <p>
              Please make sure you sign the sheet in the narthex, along with
              your phone number, when you come into church. If you choose to
              form a "pod" of vaccinated worshippers, you may sit together
              during the service.
            </p>
            <p>Masks are still required throughout the service.</p>
            <p>
              We hope you'll join us in person each Sunday but, if you aren't
              able to attend, please watch the servie online. The link is on our
              website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndoorService
