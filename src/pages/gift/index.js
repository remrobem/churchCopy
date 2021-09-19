import { useEffect } from "react"
import { navigate } from "gatsby-link"

const GIFT = ({ env }) => {

  useEffect(() => {
      navigate("/#gift")
  })
  return null
  
}

export default GIFT

