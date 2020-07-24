import React from "react"
import styles from "./virtualGathering.module.css"
import image from "../../content/assets/AndTheySaw.jpg"

const Vbs = () => {
  return (
    <div className={styles.main}>
      <a name="gathering"> </a>

      <div className={styles.container}>
        <div className={styles.image}>
          <img src={image} alt="And They Saw image"></img>
        </div>

        <div>
          <h2>Virtual Gathering</h2>
          <p className={styles.text}>
            We want to give our parishioners a virtual option for conversation
            and a chance to see one another, if only on a screen. If you're
            interested, select the button below and choose one of the following
            date and time options, and we will send you a Zoom invitation to
            join our conversation on that day. This is an informal gathering
            with no meeting or other work to do. Strictly social! We hope to see
            you at one of the gatherings!
          </p>
        </div>

        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6EFdrnj0AWkMUYAOB7P07OFaKCRpccSQzmJ8mgxyOIuJXZA/viewform?usp=sf_link">
            <button className={styles.button}>Select Date and Time</button>
          </a>
        </div>
      </div>

      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Vbs
