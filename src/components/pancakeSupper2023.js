// import React from "react"
// import * as styles from "./longestNight.module.css"
// import image from "../../content/assets/pancakeSupper2023"
// // import { FaPhone } from "react-icons/fa"

// const LongestNight = () => {
//   return (
//     <div className={styles.container}>
//       <a href="https://www.facebook.com/madre.linda.7">
//         <img className={styles.image} src={image} alt="Longest Night Service"></img>
//       </a>
//     </div>
//   )
// }

// export default LongestNight

import React from "react"
import * as styles from "./pancakeSupper2023.module.css"
import image from "../../content/assets/pancakeSupper2023.jpg"
import { StaticImage } from "gatsby-plugin-image"
const PancakeSupper2023 = () => {
  return (
    <div>
      <h1 className={styles.text}>Pancakes</h1>
      <h1 className={styles.text}>Tuesday</h1>
      <h1 className={styles.text}>5 pm to 7 pm</h1>
      <StaticImage
        src="../../content/assets/pancakeSupper2023.jpg"
        alt="Pancake supper info"
      />
    </div>
  )
}

export default PancakeSupper2023
