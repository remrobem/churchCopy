import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import * as styles from "./mentalHealthMonth2023.module.css"

const MentalHealthMonth2023 = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "quote1.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      image2: file(relativePath: { eq: "quote2.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      image3: file(relativePath: { eq: "quote3.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      image4: file(relativePath: { eq: "quote4.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      image5: file(relativePath: { eq: "quote5.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      image6: file(relativePath: { eq: "quote6.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      image7: file(relativePath: { eq: "quote7.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  `)

  const images = [
    data.image1,
    data.image2,
    data.image3,
    data.image4,
    data.image5,
    data.image6,
    data.image7,
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 8000)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <div>
      <StaticImage
        src="../../content/assets/banner.jpeg"
        alt="Mental Healh Month"
        loading="eager"
        object-fit="cover"
        className={styles.container}
      />
      <GatsbyImage
        image={images[currentIndex].childImageSharp.gatsbyImageData}
        alt={`Quote ${currentIndex + 1}`}
        className={styles.container}
      />
    </div>
  )
}

export default MentalHealthMonth2023
