import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './fortnightFestival2023.module.css';

const FortnightFestivalImage2023 = ({ alt }) => (
  <div className={styles.container}>
    <h1 className={styles.header}>
      The Freedom Fortnight Festival has been moved to the Bridge St. Rec Center
    </h1>

    <p className={styles.text}>Same date and time: Saturday, June 24 from noon until 4 pm.</p>
    <p className={styles.text}>It is Free.</p>
    <p>
      <a href="https://bit.ly/freedomfortnight">Registration </a> is not required but it is helpful.
    </p>
    <StaticImage
      src="../../content/assets/freedomFortnight2023.jpg"
      alt={alt}
      className={styles.image}
    />
  </div>
);

export default FortnightFestivalImage2023;
