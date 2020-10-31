import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import '../../../../../src/App.scss'
import { nav2trans, heroBoxTrans } from "../../../animation/animations"

function Hero() {
  let heroBox = useRef(null)
    let header = useRef(null)
    let heroTextBoxTexth3 = useRef(null)
    let heroTextBoxText = useRef(null)

    useEffect(() => {
      heroBoxTrans(heroBox, heroTextBoxText, heroTextBoxTexth3)
      nav2trans(header, heroBox)
    }, [])

  return (
    <div className="box-hero" ref={el => (heroBox = el)}>
  
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
