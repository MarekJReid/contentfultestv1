import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import "../../../../../src/App.scss"
import {
  nav2trans,
  heroBoxTrans,
  clickMobileNavMenu,
  clickMobNavClose,
} from "../../../animation/animations"

function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOut, setIsOut] = useState(false)
  let heroBox = useRef(null)
  let header = useRef(null)
  let heroTextBoxTexth3 = useRef(null)
  let heroTextBoxText = useRef(null)

  let mobNavMenu = useRef(null)
  let mobNavMenuLinks = useRef(null)
  let mobNavMenuClose = useRef(null)

  useEffect(() => {
    heroBoxTrans(heroBox, heroTextBoxText, heroTextBoxTexth3)
    nav2trans(header, heroBox)
  })

  const cclickMobileNavMenu = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setIsOpen(!isOpen)
      clickMobileNavMenu(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
    }
  }

  const cclickMobNavClose = () => {
    setIsOpen(!isOpen)
    clickMobNavClose(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
  }

  return (
    <div className="box-hero" ref={el => (heroBox = el)}>
      {/* Mobile Nav */}
      <div className="mobile-nav-box">
        <h1 style={{ color: `yellow` }}>The Hope Barometer</h1>
        <div className="" onClick={cclickMobileNavMenu}>
          <div class="">
            <div
              style={{
                color: `yellow`,
                fontSize: `300%`,
                marginTop: `-.42rem`,
                paddingRight: `1.5rem`,
              }}
            >
              {" "}
              ={" "}
            </div>
          </div>
          <div className="mobile-menu" ref={el => (mobNavMenu = el)}>
            <Link to="/">
              <div className="nav-title">
                <h5
                  style={{
                    color: `yellow`,
                    fontSize: `300%`,
                    marginTop: `.2rem`,
                    marginBottom: `-.5rem`,
                    paddingLeft: `.5rem`,
                    paddingTop: `.5rem`,
                  }}
                >
                  The Hope
                </h5>
                <h5
                  style={{
                    color: `yellow`,
                    fontSize: `300%`,
                    margin: `0`,
                    paddingLeft: `7rem`,
                  }}
                >
                  Barometer
                </h5>
              </div>
            </Link>

            <div
              className="close-icon"
              onKeyDown={cclickMobNavClose}
              onClick={cclickMobNavClose}
              ref={el => (mobNavMenuClose = el)}
             
            >
              x
            </div>
            <div className="links-box">
              <ul ref={el => (mobNavMenuLinks = el)}>
                <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
                  <Link to="/about">
                    <p style={{ color: `yellow` }}>About</p>
                  </Link>
                </li>

                <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
                  <Link to="/survey">
                    <p style={{ color: `yellow` }}>Survey</p>
                  </Link>
                </li>
                <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
                  <Link to="/reports">
                    <p style={{ color: `yellow` }}>Reports</p>
                  </Link>
                </li>
                <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
                  <Link to="/news">
                    <p style={{ color: `yellow` }}>News</p>
                  </Link>
                </li>
                <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
                  <Link to="/partners">
                    <p style={{ color: `yellow` }}>Partners</p>
                  </Link>
                </li>
                <li onKeyDown={cclickMobNavClose} onClick={cclickMobNavClose}>
                  <Link to="/contact">
                    <p style={{ color: `yellow` }}>Contact</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-box" ref={el => (header = el)}>
        <Link to="/">
          <div className="nav-title">
            <span className="">The H</span>
            <span className="nav-title-o">o</span>

            <span>pe Barometer</span>
          </div>
        </Link>
        <div className="nav-links">
          <ul>
            <li></li>
            <li>
              <Link to="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link to="/survey">
                <p>Survey</p>
              </Link>
            </li>
            <li>
              <Link to="/reports">
                <p>Reports</p>
              </Link>
            </li>
            <li>
              <Link to="/news">
                <p>News</p>
              </Link>
            </li>
            <li>
              <Link to="/partners">
                <p>Our Partners</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

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
