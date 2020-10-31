import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"

import {
  clickMobileNavMenu,
  clickMobNavClose,  
  navPageLoad,
} from "../components/animation/animations"

function Header() {
  const [mobileNavMenu, setMobileNavMenu] = useState(false)

  let navbar = useRef(null)
  let mobNavMenu = useRef(null)
  let mobNavMenuLinks = useRef(null)
  let mobNavMenuClose = useRef(null)

  useEffect(() => {
    navPageLoad(navbar)
    // nav2trans(navbar)
  }, [])

  const cclickMobileNavMenu = () => {
    setMobileNavMenu(!mobileNavMenu)
    if (mobileNavMenu) {
      clickMobileNavMenu(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
    }
  }

  const cclickMobNavClose = () => {
    setMobileNavMenu(!mobileNavMenu)
    clickMobNavClose(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
  }

  return (
    <div style={{ margin: `0` }}>
      {/* Mobile Nav */}
      <div className="mobile-nav-box">
        <div className="mobile-menu-icon" onClick={cclickMobileNavMenu}>
          <div className="mobile-menu" ref={el => (mobNavMenu = el)}>
            <div className="title"></div>
            <div
              className="close-icon"
              onKeyDown={cclickMobNavClose}
                onClick={cclickMobNavClose}
              ref={el => (mobNavMenuClose = el)}
            ></div>
            <div className="links-box">
              <ul ref={el => (mobNavMenuLinks = el)}>
                <li onKeyDown={cclickMobNavClose}  onClick={cclickMobNavClose}>
                  {" "}
                  <Link to="/about">
                    <p>About</p>
                  </Link>
                </li>

                <li onKeyDown={cclickMobNavClose}  onClick={cclickMobNavClose}>Story</li>
                <li onKeyDown={cclickMobNavClose}  onClick={cclickMobNavClose}>Blog</li>
                <li onKeyDown={cclickMobNavClose}  onClick={cclickMobNavClose}>Store</li>
                <li onKeyDown={cclickMobNavClose}  onClick={cclickMobNavClose}>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-box" ref={el => (navbar = el)}>
        <Link to="/">
          <div className="nav-title">
            <span className="">The H</span>
            <span
            className="nav-title-o"
            >o</span>
            
            <span>
            pe Barometer</span>
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
    </div>
  )
}

export default Header
