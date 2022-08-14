import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./scoopForSchool.module.css"

const ScoopForSchool = () => {
  return (
    <main>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../..//content/assets/ScoopForSchool.jpg"
          alt="Scoop For School"
          loading="eager"
        />
      </section>
      <section className={styles.container}>
        <p className={styles.text}>
          ‘Sundae’ August 21st we will be hosting a back to school ice cream
          social where friends and family can gather and eat ice cream!
        </p>
        <p className={styles.text}>
          {" "}
          We will be collecting elementary school supplies. Here are some ideas on what to
          bring. You can drop off items at the church Sunday or when the office is open.
        </p>
        <p className={styles.text}>Thank You!!</p>
        <p>
          <ul className={styles.list}>
            <li>Crayons-24 count</li>
            <li>Washable markers</li>
            <li>Pencils</li>
            <li>Erasers</li>
            <li>Glue sticks</li>
            <li>Hand sanitizer</li>
            <li>Lined paper - wide ruled</li>
            <li>Spiral notebooks - wide ruled</li>
            <li>Tissues</li>
            <li>Ziploc storage bags - gallon and quart</li>
            <li>Colored pencils</li>
            <li>Lysol or Clorox wipes</li>
            <li>Children’s scissors</li>
          </ul>
        </p>
      </section>
    </main>
  )
}
export default ScoopForSchool
