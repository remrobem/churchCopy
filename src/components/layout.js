import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
// import Donations from "./donations"
import Pledge from "./pledge"
import Announcements from "./announcements"
// import Advent from "./advent"
// import LentenStudy from "./lentenStudy"
// import LentenQuietDay from "./lentenQuietDay"
// import VBS from "./vbs"
// import OutdoorService from "./outdoorService"
import IndoorService from "./indoorService"
// import OutdoorServiceCancel from "./outdoorServiceCancel"
// import VirtualGathering from "./virtualGathering"
// import HealingService from "./healingService"
// import ReconciliationService from "./reconciliationService"
// import Christmas from "./christmas"
// import ShroveTuesday from "./shrove_tuesday"
// import AshWednesday from "./ash-wednesday"
// import AshWednesday1 from "./ash-wednesday1"
import Gift from "./gift"

const Layout = ({ location, title, children }) => {
  
  return (
    <div>
      <Header />
      <LandingPage />
      <Gift />
      <Announcements />
      {/* <OutdoorService /> */}
      <IndoorService />
      {/* <LentenQuietDay /> */}
      {/* <LentenStudy /> */}
      {/* <AshWednesday /> */}
      {/* <AshWednesday1 /> */}
      {/* <ShroveTuesday /> */}
      {/* <Christmas /> */}
      {/* <LongestNight /> */}
      {/* <Advent /> */}
      {/* <HealingService /> */}
      {/* <OutdoorServiceCancel /> */}
      {/* <ReconciliationService /> */}
      <ChurchLinks />
      {/* <VBS /> */}
      {/* <VirtualGathering /> */}
      <Services />
      {/* <Pledge /> */}
      <Donations />
      <Footer />
    </div>
  )
}

export default Layout
