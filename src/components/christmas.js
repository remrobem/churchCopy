import React from "react"
import styles from "./christmas.module.css"

const Christmas = () => {
  return (
    <div className={styles.container} id="christmas">
      <h2 className={styles.title}>Christmas Services</h2>
      {/* <blockquote className={styles.quote}>
        <p className={styles.text}>
          But the angel said to them, "Do not be afraid; for see-- I am bringing
          you good news of great joy for all the people: to you is born this day
          in the city of David a Savior, who is the Messiah, the Lord. This will
          be a sign for you: you will find a child wrapped in bands of cloth and
          lying in a manger."
        </p>
        <footer>Luke 2: 10-12</footer>
      </blockquote> */}
      <h3>Christmas Eve</h3>
      <h4 className={styles.text}>10:00 am Eucharist of the Incarnation.</h4>
      <p className={styles.text}>
        Watch the service<a href="https://www.facebook.com/madre.linda.7/videos/3418521311534932"> here</a> or
        Services below
      </p>
      <p className={styles.text}>
        From 11:00 am - 1:00 pm, and from 4:00 - 6:00 pm, you can drive up to a
        space in front of the church. 
        </p>
      <p className={styles.text}>
        Mother Linda will bring
        communion to everyone in your car. If someone in your family can't
        travel by car, Mother Linda will give you a wafer to take to them.
      </p>
      <h3>Christmas Day</h3>
      <h4 className={styles.text}>9:00 am Zoom Meeting</h4>
      <p className={styles.text}>Check back here for Zoom details</p>
      <p className={styles.text}>
       A short service on Christmas morning from 9:00 - 9:30 will be offered
        via Zoom, so that we might see each other's faces on that holy morning.
      </p>
    </div>
  )
}

export default Christmas
