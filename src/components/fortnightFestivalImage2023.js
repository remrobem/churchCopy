import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './fortnightFestival2023.module.css';

const FortnightFestivalImage2023 = ({ alt }) => (
  <div className={styles.container}>
    <h1 className={styles.header}>
      The Freedom Fortnight Festival has been moved to the Bridge St. Rec Center
    </h1>

    <p className={styles.text}>Same date and time:</p>
    <p className={styles.text}>Saturday, June 24 from noon until 4 pm.</p>
    <p className={styles.text}>It is Free.</p>
    <p>
      <a href="https://bit.ly/freedomfortnight">Registration </a> is not required but it is helpful.
    </p>
    <StaticImage
      src="../../content/assets/freedomFortnight2023.jpg"
      alt={alt}
      className={styles.image}
    />
    <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.3336054541933!2d-79.77271472486018!3d36.4978083846882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8852eaebc06045b9%3A0xbca145a6c30ef9dd!2sBridge%20Street%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1687359173461!5m2!1sen!2sus" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Bridge St Rec Center"> </iframe>
    </div>
  </div>
);

export default FortnightFestivalImage2023;
