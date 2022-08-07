import React from "react"
import * as styles from "./indoorService.module.css"

const IndoorService = () => {
  return (
    <div className={styles.container} id="indoor">
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Sunday Service</h1>
          {/* <h1> 8:30 am Masks Required</h1> */}
          <h1>10:00 am Masks Required</h1>
        </div>
        <div>
          <div className={styles.text}>
            <p>The Sunday Service is at 10 am with masks optional.</p>
            <p>
              The church monitors the{" "}
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/science/community-levels.html">
                CDC Community{" "}
              </a>
              levels.
            </p>
            <p>The current level is green(low)</p>
            <p>
              If the level is yellow or red, masks will be required and other
              procedural changes may be made.
            </p>
            {/* <p>
              Rockingham County has moved into the yellow zone according to the
              CDC Covid metrics.
            </p>
            <p>
              Masks will be required at Sunday services for as long as the
              County remains at this level.
            </p>
            <p>
              Masks will be available in the narthex on Sunday, in case you
              forget yours.
            </p>
            <p>Thank you for helping to keep Epiphany safe.</p> */}
            {/* <p>
              With the percentage of Covid cases declining in our area, and with
              the approval of the Diocese of NC, we are lifting some of the
              restrictions in our Covid protocols for worship.
            </p>
            <p>
              Beginning this Sunday, April 3, the 10:00 Sunday service will be
              mask-optional for fully vaccinated worshippers. You may still wear
              a mask at this service if you wish, but it is not required at this
              time. Those who are not fully vaccinated will still be required to
              wear a mask throughout the service.
            </p> */}
            {/* <p>
              We'll offer a service at 8:30 on Sundays with masks required for
              four weeks to determine how many people are at this comfort level.
              At the end of that time, we'll determine the need and desire for a
              fully masked service.
            </p> */}
            {/* <p>
              We will use two metrics to determine the safety of a mask-optional
              service. The first is the NCDHHS percentage that we have used
              since the beginning of the pandemic.
            </p>
            <p>
              The second is the CDC risk level metric which is also being used
              in our diocese.
            </p>
            <p>
              If either of these metrics isn't met for two consecutive weeks, we
              will require masks at the 10:00 service. In such cases, masks will
              be available in the narthex, and there will be signage noting the
              mask requirement.
            </p> */}
            <p>We hope you'll join us in person each Sunday. </p>
            <p>
              If you aren't able to attend, please watch the service live or
              recorded on
              <span>
                <a href="https://www.facebook.com/epiphanyeden"> Facebook</a> or{" "}
                <a href="https://www.youtube.com/channel/UCQhee_wvQ62Bcv5lr2ftGVg">
                  {" "}
                  YouTube
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
