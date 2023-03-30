import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
// import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
import Announcements from "./announcements"
import IndoorService from "./indoorService"
import Gift from "./gift"
import LaundryLove from "./laundryLove"
import TextSignUp from "./textSignUp"
import LentStudy2023 from "./lentStudy2023"
import BellTowerTreasures from "./bellTowerTreasures"
import TaizeLent2023 from "./taizeLent2023"
import HolyWeek2023 from "./holyWeek2023"
// import HomelessShelterMeals2023 from "./homelessShelterMeals2023"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      {/* <LandingPage /> */}
      <HolyWeek2023 />
      <LentStudy2023 />
      <TaizeLent2023 />
      <BellTowerTreasures />
      <Gift />
      <ChurchLinks />ß
      <LaundryLove />
      {/* <HomelessShelterMeals2023 /> */}
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
