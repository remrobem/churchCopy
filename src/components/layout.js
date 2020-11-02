import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
// import VBS from "./vbs"
import OutdoorService from "./outdoorService"
import OutdoorServiceCancel from "./outdoorServiceCancel"
import VirtualGathering from "./virtualGathering"
import HealingService from "./healingService"
import ReconciliationService from "./reconciliationService"

const Layout = ({ location, title, children }) => {
  
  return (
    <div>
      <Header />
      <LandingPage />
      {/* <HealingService /> */}
      {/* <OutdoorService /> */}
      {/* <OutdoorServiceCancel /> */}
      <ReconciliationService />
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
