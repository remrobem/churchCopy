import React from "react"
import * as styles from "./holyWeek2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const HolyWeek2023 = () => {
  return (
    <div>
      <section className={styles.imageContainer} id="holyWeek">
        <StaticImage
          src="../../content/assets/holyWeek.png"
          alt="Holy Week"
          loading="eager"
          backgroundColor="white"
        />
      </section>
      <section className={styles.container}>
        <h2>Holy Week Schedule</h2>
      </section>
      <section className={styles.container}>
        <ul>
          <li>
            <strong>Sunday, April 2</strong>
            <ul>
              <li>10:00 a.m. Palm Sunday/Passion Sunday (Epiphany)</li>
              <li>2:00 p.m. Community Easter Egg Hunt (LUMC)</li>
            </ul>
          </li>
          <li>
            <strong>Wednesday, April 5</strong>
            <ul>
              <li>6:00 p.m. Tenebrae (Epiphany)</li>
            </ul>
          </li>
          <li>
            <strong>Maundy Thursday, April 6</strong>
            <ul>
              <li>6:30 p.m. (LUMC)</li>
            </ul>
          </li>
          <li>
            <strong>Good Friday, April 7</strong>
            <ul>
              <li>12:00 Noon Liturgy for Good Friday (Epiphany)</li>
              <li>
                6:00 p.m. Stations of the Cross-Downtown (Start at Epiphany)
              </li>
            </ul>
          </li>
          <li>
            <strong>Holy Saturday, April 8</strong>
            <ul>
              <li>10:00 a.m. Epiphany Memorial Garden</li>
              <li>8:00 p.m. Great Vigil of Easter and HE (Epiphany)</li>
            </ul>
          </li>
          <li>
            <strong>Easter Day, Sunday, April 9</strong>
            <ul>
              <li>10:00 a.m. Easter Day Festival HE (Epiphany)</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default HolyWeek2023
