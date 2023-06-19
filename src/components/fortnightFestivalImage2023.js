import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './fortnightFestival2023.module.css';
// import MyImage from '../../content/assets/freedomFortnight2023.jpg';

const FortnightFestivalImage2023 = ({ alt }) => (
  <div className={styles.container}>
  <StaticImage
    src="../../content/assets/freedomFortnight2023.jpg"
    alt={alt}
    className={styles.image}
  />
  <p className={styles.text}>It is Free.  {" "}
  <a href="https://bit.ly/freedomfortnight">Registration </a> not required but it is helpful.</p>
</div> 
);

export default FortnightFestivalImage2023;
