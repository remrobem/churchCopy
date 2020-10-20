import React from "react"
import styles from "./outdoorService.module.css"

const OutdoorService = () => {
  return (
    <div className={styles.container} id="outdoor">
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Outdoor Holy Eucharist Service</h1>
          <h2>Sunday October 25, 2020</h2>
          <h2>10 am</h2>
        </div>
        <div className={styles.message}>
          <h2>
            Attendence is limited to 20 people and must be reserved ahead of time.
            <form>
              <button
                className={`${styles.button}`}
                formAction="https://www.eventbrite.com/e/outdoor-holy-eucharist-tickets-126001958249"
              >
                Reserve A Spot
              </button>
            </form>
          </h2>
          <p>Note that reservations are for individuals, not families</p>
          <p>
            Please cancel your reservations if it turns out you will not attend
          </p>
          <p>
            In the event of inclement weather on Saturday or Sunday, please
            check back here or see emails regarding your reservation
          </p>
          <h3>
            Bring your own Prayer Book or Order of Service on paper or
            electronic device.
          </h3>
          <h3>
            Below are the requirements which MUST be followed in order to join
            us for worship.
          </h3>
          <ol>
            <li>
              Ushers will be trained on all procedures. You must follow the
              instructions of the ushers at all times. This includes entry and
              exit procedures.
            </li>
            <li>
              If you have any symptoms of Covid 19, or have been exposed to a
              person with Covid 19, please worship at home.
            </li>
            <li>
              Face coverings will be worn at all times while attending worship.
              These must cover the nose and mouth, and may not be lowered or
              removed until you return to your car. If you have a medical reason
              for not wearing a mask, please watch the service on our website or
              on Facebook Live.
            </li>
            <li>
              Spaces will be marked in the yard and worshippers must remain in
              their designated areas.
            </li>
            <li>
              Social distancing must be practiced at all times, including before
              and after worship. It’ll be tempting to hug our friends and get
              close for conversations. However 6 feet distance must be
              maintained for anyone not permanently living in the same
              household.
            </li>

            <li>
              Upon arrival each worshipper will complete a brief form regarding
              symptoms of and exposure to Covid-19. Social distancing will be
              maintained between worshippers during the sign-in period.
            </li>
            <li>
              The building will be locked and no one may enter before,during or
              after the service. Restrooms will not be available.
            </li>
            <li>
              Each person should bring his/her/their own chair or blanket. None
              will be provided.
            </li>
            <li>
              If ushers have other requirements once you arrive, please follow
              their instructions.
            </li>
          </ol>
          {/* </p> */}
        </div>
      </div>
    </div>
  )
}

export default OutdoorService
