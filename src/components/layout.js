import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
// import VBS from "./vbs"
import OutdoorService from "./outdoorService.js"
import VirtualGathering from "./virtualGathering"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  
  return (
    <div>
      <Header />
      <LandingPage />
      <OutdoorService />
      <ChurchLinks />
      {/* <VBS /> */}
      {/* <VirtualGathering /> */}
      
      <Services />
      <Donations />
      <Footer />
    </div>
  )
}

export default Layout
