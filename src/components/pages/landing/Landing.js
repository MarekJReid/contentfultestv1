import React from "react"

import Hero from "./hero/Hero"
import BoxPicLeft from '../../templates/slidinboxes/BoxPicLeft'
import BoxPicRight from '../../templates/slidinboxes/BoxPicRight'
import MailChimpSignUpForm from '../../templates/mailchimp-signup/MailChimpSignUpForm'
import Footer from "../../footer"
function Landing() {
  return (
    <div>
      <Hero />
      <div
        style={{
          padding: "0 10vw",
        }}
      >
        <BoxPicLeft boxId="0" />
        <BoxPicRight boxId="1" />
        <BoxPicLeft boxId="2" /> 
        <MailChimpSignUpForm />
      </div>
      <Footer />
    </div>
  )
}

export default Landing
