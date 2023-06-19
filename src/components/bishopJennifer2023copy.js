import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './bishopJennifer2023copy.module.css';

const BishopJenifer2023copy = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Bishop Jennifer Brooke-Davidson to visit Eden</h2>
      <h2 className={styles.heading}>Sunday June 18th at St. Luke's</h2>
      <div className={styles.imageWrapper}>
        <StaticImage
          src="../../content/assets/bishopJennifer.jpg"
          alt="Your Image"
          className={styles.image}
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.contentWrapper}>
          <p className={styles.text}>
            This Sunday, June 18, we will worship at St. Luke's Episcopal Church
            for the visitation of Bishop Jennifer Brooke-Davidson.
          </p>
          <p className={styles.text}>
            St. Luke's Episcopal Church, also called the Rock church, is located
            at{" "}
            <a href="https://goo.gl/maps/BSP5NCcWbiMQ9az3A">
              600 Morgan Rd in Eden</a>
          </p>
          <p className={styles.text}>
            Three people from Epiphany will be confirmed.
          </p>
          <p className={styles.text}>
            The service will begin at 11:00 am and a reception will follow in St.
            Luke's parish hall.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BishopJenifer2023copy;
