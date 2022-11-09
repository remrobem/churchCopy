import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
// import Pledge from "./pledge"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
import Announcements from "./announcements"
import IndoorService from "./indoorService"
import Gift from "./gift"
import DisplayNewsletters from "./displayNewsletters"
import MorningPrayer from "./morningPrayer"
import BookStudy from "./bookStudy"

const Layout = ({ location, title, children }) => {
  
  return (
    <div>
      <Header />
      <LandingPage />
      {/* <Pledge /> */}
      <ChurchLinks />
      <MorningPrayer />
      <BookStudy />
      <Gift />
      <Announcements />
      <IndoorService />
      <Services />
      <Donations />
      <DisplayNewsletters />
      <Footer />
    </div>
  )
}

export default Layout
