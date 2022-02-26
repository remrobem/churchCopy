import React, { useEffect, useRef } from "react"
import postscribe from "postscribe"
import * as styles from "./newsletters.module.css"

const Newsletters = () => {
  const newsRef = useRef(null)

  useEffect(() => {
    if (newsRef) {
      postscribe(
        "#news",
        "<script src=//epiphanyeden.us17.list-manage.com/generate-js/?u=a3f429c9b2ab91d27de19f6cd&fid=13041&show=10></script>"
      )
    }
  }, [newsRef])

  return (
    <div className={styles.container} id="newsletters">
      <p id="news" ref={newsRef} className={styles.item}> Newsletters</p>
    </div>
  )
}

export default Newsletters
