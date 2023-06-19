import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
import Announcements from "./announcements"
import IndoorService from "./indoorService"
import LaundryLove from "./laundryLove"
import TextSignUp from "./textSignUp"
import BellTowerTreasures from "./bellTowerTreasures"
import FreedomFortnight2023 from "./fortnightFestival2023"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <FreedomFortnight2023 />
      <LaundryLove />
      <BellTowerTreasures />
      <ChurchLinks />
      <Announcements />
      <IndoorService />
      <Services />
      <Donations />
      <TextSignUp />
      <Footer />
    </div>
  )
}

export default Layout
