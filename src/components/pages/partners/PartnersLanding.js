import React, { useRef, useState, useEffect } from "react"
import { TweenLite } from "gsap"
import "./partners.scss"

import DropDownMenu from "./DropDownMenu"

import bg from "../../../images/partners/partners.jpg"

function PartnersLanding(props) {
  let page = useRef(null)

  useEffect(() => {
    TweenLite.fromTo(
      page,
      1,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        delay: 0.2,
      }
    )
  })

  return (
    <div>
      <div class="partners-container" ref={el => (page = el)}>
        <div class="partners-intro-box">
          <div class="intro-box-text">
            <h1>I m the intro box</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit aliquid hic architecto consectetur ratione
              voluptatem distinctio quis soluta expedita ex, cumque minima quas
              inventore unde nostrum laudantium sequi corrupti tempore.
            </p>
            <div class="box-h3-menu">
             
              <h3>I am the sentance to call the peeops to select a country</h3>
              <DropDownMenu />
            </div>
          </div>
        </div>
        <div class="partners-intro-image">
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PartnersLanding
