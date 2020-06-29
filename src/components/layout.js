import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  
  return (
    <div>
      <Header />
     
      <LandingPage />
      <ChurchLinks />
      <Services />
      {/* <main>{children}</main> */}
      <Footer />
    </div>
  )
}

export default Layout
