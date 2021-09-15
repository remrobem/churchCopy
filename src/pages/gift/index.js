import React, { useState, useEffect } from "react"
// import styles from "./gift.module.css"
import { navigate } from "gatsby-link"

const GIFT = ({ env }) => {

  useEffect(() => {
      navigate("/#gift")
  })
  return null
  
}

export default GIFT

