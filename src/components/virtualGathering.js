import React from "react"
import * as styles from "./virtualGathering.module.css"
import image from "../../content/assets/AndTheySaw.jpg"

const Vbs = () => {
  return (
    <div className={styles.main}>
      <a name="gathering"></a>

      <div className={styles.container}>
        <div className={styles.image}>
          <img src={image} alt="And They Saw image"></img>
        </div>

        <div>
          <h2>Virtual Gathering</h2>
          {/* <p className={styles.text}>
            We want to give our parishioners a virtual option for conversation
            and a chance to see one another, if only on a screen. If you're
            interested, select the button below and choose one of the following
            date and time options, and we will send you a Zoom invitation to
            join our conversation on that day. This is an informal gathering
            with no meeting or other work to do. Strictly social! We hope to see
            you at one of the gatherings!
          </p> */}
          <p className={styles.text}>
            We want to give our parishioners a virtual option for conversation
            and a chance to see one another, if only on a screen.{" "}
          </p>
          <p className={styles.text}>
            If you're interested, please fill out the survey below with your
            preferred days and times. This is an informal gathering with no
            meeting or other work to do. Strictly social! We hope to see you at
            one of the gatherings!
          </p>
          <p className={styles.text}>
            <form>
              <button
                className={styles.button}
                formAction="https://docs.google.com/forms/d/e/1FAIpQLSeo2vi4THrwYWEdHJgMgp9VTsAXUhNRVi6slRk2FHq_Bp_2QA/viewform?usp=sf_link"
              >
                Survey Here or Below
              </button>
            </form>
          </p>
        </div>

        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeo2vi4THrwYWEdHJgMgp9VTsAXUhNRVi6slRk2FHq_Bp_2QA/viewform?embedded=true"
            width="900"
            height="1443"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        {/* <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6EFdrnj0AWkMUYAOB7P07OFaKCRpccSQzmJ8mgxyOIuJXZA/viewform?usp=sf_link">
            <button className={styles.button}>Select Date and Time</button>
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Vbs
