import React, { useRef, useEffect, useState } from "react"
import {
  heroBoxTrans,
} from "../../../animation/animations"

import NavHero from './NavHero'

function Hero() {

  let heroBox = useRef(null)
  let header = useRef(null)
  let heroTextBoxTexth3 = useRef(null)
  let heroTextBoxText = useRef(null)

  useEffect(() => {
    heroBoxTrans(heroBox, heroTextBoxText, heroTextBoxTexth3)
  })


  return (
    <div className="box-hero" ref={el => (heroBox = el)}>
      <NavHero />
      <div className="animation-box">
        <div className="animation-text-box">
          <h1 ref={el => (heroTextBoxText = el)}>
            Welcome to the Hope Barometer
          </h1>
          <h3 ref={el => (heroTextBoxTexth3 = el)}>
            Gauging the current global concept of hope
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Hero
