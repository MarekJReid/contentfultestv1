import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { TweenLite } from "gsap"

import {
  clickMobileNavMenu,
  clickMobNavClose,
} from "../components/animation/animations"

function Header() {
  const [mobileNavMenu, setMobileNavMenu] = useState(false)

  let navbar = useRef(null)
  let mobNavMenu = useRef(null)
  let mobNavMenuLinks = useRef(null)
  let mobNavMenuClose = useRef(null)
  let header = useRef(null)

  const cclickMobileNavMenu = () => {
    setMobileNavMenu(!mobileNavMenu)
    if (mobileNavMenu) {
      clickMobileNavMenu(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
    }
  }
console.log(mobileNavMenu)
  const cclickMobNavClose = () => {
    setMobileNavMenu(!mobileNavMenu)
    clickMobNavClose(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
  }

  return (
    <div class="">
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
              {" "}
              <div> x </div>
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
        <div class="home-link">
          <Link to="/">
            <div className="nav-title">
              <span className="">The H</span>
              <span className="nav-title-o">o</span>

              <span>pe Barometer</span>
            </div>
          </Link>
        </div>
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
    </div>
  )
}

export default Header
