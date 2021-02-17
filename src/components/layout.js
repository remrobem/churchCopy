import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
import Advent from "./advent"
// import VBS from "./vbs"
import OutdoorService from "./outdoorService"
import OutdoorServiceCancel from "./outdoorServiceCancel"
import VirtualGathering from "./virtualGathering"
import HealingService from "./healingService"
import ReconciliationService from "./reconciliationService"
import Christmas from "./christmas"
import ShroveTuesday from "./shrove_tuesday"
import AshWednesday from "./ash-wednesday"
import AshWednesday1 from "./ash-wednesday1"

const Layout = ({ location, title, children }) => {
  
  return (
    <div>
      <Header />
      <LandingPage />
      {/* <AshWednesday /> */}
      <AshWednesday1 />
      <ShroveTuesday />
      {/* <Christmas /> */}
      {/* <LongestNight /> */}
      {/* <Advent /> */}
      {/* <HealingService /> */}
      {/* <OutdoorService /> */}
      {/* <OutdoorServiceCancel /> */}
      {/* <ReconciliationService /> */}
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
