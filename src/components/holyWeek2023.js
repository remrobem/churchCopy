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
              <li className={styles.description}>
                From{" "}
                <a href="https://www.episcopalchurch.org/glossary/tenebrae/">
                  The Episcopal Church:
                </a>
              </li>
              <li className={styles.description}>
                This form of the monastic office (matins and lauds) is commonly
                adapted for congregational use during Holy Week.
              </li>
              <li className={styles.description}>
                The office is structured around psalms, readings, and
                responsories.
              </li>
              <li className={styles.description}>
                A distinguishing characteristic of this service is the series of
                readings from Lamentations which appear early in the office.
              </li>
              <li className={styles.description}>
                The distinctive ceremonial of Tenebrae includes use of fifteen
                lighted candles, often set on a special, triangular stand.
              </li>
              <li className={styles.description}>
                One candle is extinguished as each of the fourteen appointed
                psalms is completed.
              </li>
              <li className={styles.description}>
                The fifteenth candle, symbolic of Christ, is left lighted at the
                end of the final psalm.
              </li>
              <li className={styles.description}>
                But it is carried away to be hidden, which signifies the
                apparent victory of the forces of evil.
              </li>
              <li className={styles.description}>
                A sudden loud noise is made at the end of the service,
                symbolizing the earthquake at Christ's death.
              </li>
              <li className={styles.description}>
                The lighted candle is then restored to its place, suggesting
                Christ's eventual triumph.
              </li>
            </ul>
            <ul></ul>
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
              <li>8:00 p.m. Great Vigil of Easter (Epiphany)</li>
            </ul>
          </li>
          <li>
            <strong>Easter Day, Sunday, April 9</strong>
            <ul>
              <li>10:00 a.m. Easter Day Festival (Epiphany)</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default HolyWeek2023
