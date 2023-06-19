import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./services.module.css"

const FreedomParkService2023 = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1 }}>
        <StaticImage
          src="../../content/assets/FreedomPark.jpg"
          alt="Image"
          placeholder="blurred"
          layout="constrained"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ flex: 1, padding: "2rem" }}>
        <h2>Sunday Service at the Park, June 4</h2>
        <p>
          This Sunday, June 4, our principal worship service will be held at{" "}
          <a href="https://goo.gl/maps/DWxqkdkGwvYtZnYa6">Freedom Park</a>,
          Picnic Shelter #2, at 10:00 am.
        </p>
        <p>A cookout, provided by your vestry, will follow the service. </p>
        <p>
          All are welcome to attend the service and we hope you'll invite your
          family and friends to join us. We hope that other park visitors will
          join us as well.{" "}
        </p>
        <p>
          This is a very casual service so please dress for fun and fellowship.
          Seating in the shelter will be limited so bring outdoor chairs for
          your family. The shelter is reserved until 3:00 p.m. - plan to stay
          and enjoy the park.
        </p>
      </div>
    </div>
  )
}

export default FreedomParkService2023
