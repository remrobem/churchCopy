import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
import Announcements from "./announcements"
import IndoorService from "./indoorService"
import Gift from "./gift"

const Layout = ({ location, title, children }) => {
  
  return (
    <div>
      <Header />
      <LandingPage />
      <Gift />
      <Announcements />
      <IndoorService />
      <ChurchLinks />
      <Services />
      <Donations />
      <Footer />
    </div>
  )
}

export default Layout
