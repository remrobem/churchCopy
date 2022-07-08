import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as styles from "./vbs.module.css"

const Vbs = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "VBS2022.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={styles.container}>
      <Img fluid={data.file.childImageSharp.fluid} alt="VBS 2022" />
      <p className={styles.text}>Please click on the below Registration Link –</p>
      <p className={styles.text}>Because …</p>
      <p className={styles.text}>VBS is back, live and n-person again !!!</p>
      <p className={styles.text}>
        Come, join us and our Friends at Leaksville United Methodist Church as
        we co-host VBS together!
      </p>
      <p className={styles.text}>Location is – LUMC – 603 Henry St Eden, NC</p>
      <p className={styles.text}>
        VBS free and is for Children aged 3 by July 15th through Rising Sixth
        Grade
      </p>
      <p className={styles.text}>Kick-off is Sunday July 24 at 6:00 pm at LUMC</p>
      <p className={styles.text}>Then Meets Monday 07/25 – Wednesday 07/27 9 am – 12 noon</p>
      <div className={styles.buttons}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSelk-Dwe4I-tUbXxfEm2EnPtzBsfWOlNLK8_hs3MMS8Hw8lng/viewform?usp=sf_link">
        <button className={styles.button}>VBS Registration</button>
      </a>
      </div>
    </div>
  )
}
export default Vbs
// import React from "react"
// import * as styles from "./vbs.module.css"
// import image from "../../content/assets/VBS_image.png"
// import { FaPhone } from "react-icons/fa"

// const Vbs = () => {
//   return (
//     <div className={styles.container}>
//       <a name="vbs"></a>

//       <div className={styles.row}>
//         <div className={`${styles.image}`}>
//           <img src={image} alt="Compassion VBS logo"></img>
//         </div>

//         <div className={styles.item}>
//           <h2>At-Home Virtual Vacation Bible School</h2>
//           <h2>
//             <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCCYD5jZCh4O5DRUeBPgUsKKEJtl9EhbtEbI9ZGSOYdAtWwA/viewform">
//               <button className={styles.button}>
//                 Information and Registration
//               </button>
//             </a>
//           </h2>
//           <h2>
//             <p className={styles.text}>
//               {`Or call `}
//               <a className={styles.link} href="tel:1-276-224-2811">
//                 <FaPhone /> 276-224-2811
//               </a>
//             </p>
//           </h2>
//           <h2>July 27 – 31</h2>
//         </div>
//         <div className={`${styles.image}`}>
//           <img src={image} alt="Compassion VBS logo"></img>
//         </div>
//       </div>
//       <h2 className={styles.text}>
//         Children will discover how Compassion helps us: welcome others, be
//         brave, love ourselves, be present with each other, and gives us a fresh
//         start.
//       </h2>
//     </div>
//   )
// }

// export default Vbs
