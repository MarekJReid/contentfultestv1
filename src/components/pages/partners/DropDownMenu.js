import React, { useRef, useState, useEffect } from "react"
import { TweenLite, TimelineLite } from "gsap"
import "./partners.scss"


import DropDownListItems from "./DropDownListItems"
import DownArrow from "./DownArrow"
function DropDownMenu() {
  const [hovered, setHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  let menuItems = useRef(null)
  let menuButton = useRef(null)
  let menuButtonColor = useRef(null)

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(!isOpen)
      TweenLite.fromTo(menuItems, 0.5, { autoAlpha: 0 }, { autoAlpha: 1 })
      hoveredButton()
    } else {
      TweenLite.fromTo(menuItems, 0.5, { autoAlpha: 1 }, { autoAlpha: 0 })
      setTimeout(() => {
        setIsOpen(!isOpen)
      }, 1000)
    }
  }

  const hoveredButton = () => {
    TweenLite.to(menuButton, .1, {background: "#0d6989", scale: 1.02, color: "white"})
    TweenLite.to(menuButtonColor, .1, {color: "white"})
    setHovered(true)

  }

  const buttonOut = () => {
   
      TweenLite.to(menuButton, .2, {background: "none", color: "inherit"})
      TweenLite.fromTo(menuItems, 0.5, { autoAlpha: 1 }, { autoAlpha: 0 })
      TweenLite.to(menuButtonColor, .1, {color: "inherit"})
      setIsOpen(false)
      setHovered(false)
   
      
  }
  
  
 
  
  const tl = new TimelineLite()

  return (
    <div>
      <span>
        <div class="dropdown-menu-box " onClick={toggleMenu}
        onMouseOver={hoveredButton}
        onMouseLeave={buttonOut}
        ref={el => (menuButton = el)}
        >
          <span class="dropdown-menu-box-button-normal"
          
          >
            <span ref={el => (menuButtonColor = el)}
            >Select a country </span> <DownArrow hover={hovered} open={isOpen} />
          </span>
          <div className="dropdown-box" ref={el => (menuItems = el)}>
            <DropDownListItems visible={isOpen} />
          </div>
        </div>
      </span>
    </div>
  )
}

export default DropDownMenu
