import React from "react"
import styles from "./longestNight.module.css"
import image from "../../content/assets/longest-night.jpeg"
// import { FaPhone } from "react-icons/fa"

const LongestNight = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/madre.linda.7">
        <img className={styles.image} src={image} alt="Longest Night Service"></img>
      </a>
    </div>
  )
}

export default LongestNight
