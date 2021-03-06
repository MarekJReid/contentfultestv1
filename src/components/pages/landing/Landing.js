import React from "react"

import Hero from "./hero/Hero"
import BoxPicLeft from '../../templates/slidinboxes/BoxPicLeft'
import BoxPicRight from '../../templates/slidinboxes/BoxPicRight'
import MailChimpLanding from '../../templates/mailchimp-signup/MailChimpLanding'
import Footer from "../../footer"
import NewsLandingHome from "../news/NewsLandingHome"
function Landing() {
  return (
    <div>
      <Hero />
      <div
        style={{
          padding: "0 10vw",
        }}
      >
        <NewsLandingHome />
        <BoxPicLeft boxId="0" />
        <BoxPicRight boxId="1" />
        <BoxPicLeft boxId="2" /> 
        <MailChimpLanding />
      </div>
      <Footer />
    </div>
  )
}

export default Landing
