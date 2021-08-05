import React from "react"
import styles from "./indoorService.module.css"

const IndoorService = () => {
  return (
    <div className={styles.container} id="outdoor">
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Indoor Services</h1>
        </div>
        <div className={styles.message}>
          <h2>
            Attendence is limited and must be reserved ahead of time.
            <form>
              <button
                className={`${styles.button}`}
                formAction="https://www.eventbrite.com/e/the-episcopal-church-of-the-epiphany-tickets-165260371219"
              >
                Reserve Your Spot for Sunday 10:00 am Service
              </button>
            </form>
          </h2>
          <p>Online reservations are limited to 16 individuals.</p>
          <p>
            Once that number is reached, other worshippers are encouraged to
            join us online.
          </p>
          <p>
            Registration is open now and will remain open until 3:00 Saturday
            afternoon.
          </p>
          <p>
            Please cancel your reservations if it turns out you will not attend
          </p>
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
              These must cover the nose and mouth. If you have a medical reason
              for not wearing a mask, please watch the service on our website or
              on Facebook Live.
            </li>
            <li>
              Seating will be arranged so as to maintain proper distance. The
              usher will direct you if you need help finding a designated seat.
            </li>
            <li>
              Social distancing must be practiced at all times, including before
              and after worship. Please refrain from gathering indoors or in the
              church yard with anyone who is not part of your household.
            </li>

            <li>
              Prayer books and hymnals will be available for your use. A
              bulletin will be provided for in-person worship. The order of
              service is online as well.
            </li>
            <li>The nursery is not available at this time.</li>
            <li>
              The office entrance will be open for those using wheelchairs and
              walkers. All others will enter through the main door into the
              church.
            </li>
          </ol>
          <h3>Restroom Protocol</h3>
          <ol>
            <li>
              The main men's and women's restrooms will be available.
            </li>
            <li>Only one person may be in the restroom at a time.</li>
            <li>
              Disinfecting wipes will be placed in each restroom. Please wipe
              down all touched surfaces before you leave. (Do not dispose of
              wipes in the toilets.) There will be a trash can outside the door
              to dispose of wipes used to disinfect the doorknob.
            </li>
            <li>
              Please go directly to and from the restroom. No other parts of the
              building will be open. (This includes the kitchen. If you feel you
              may need water during the service, please bring a bottle from
              home.)
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default IndoorService
