import React from "react"
import { Link } from "gatsby"


function Footer() {
  return (
    <div className="footer">
      <div class="footer-box">
        <div class="footer-info">
          <ul>
            <li>
              <p style={{ margin: 0 }}>
                Site Copyright The Hope Barometer 2020 ©{" "}
              </p>
            </li>
            <li>
              <Link to="/privacy-policy">
                <p className="links">Privacy Policy</p>
              </Link>
              <span> - </span>
              <Link to="/impressum">
                <p className="links"> Impressum</p>
              </Link>
              <span> - </span>
              <Link to="/impressum">
                <p className="links"> Terms & Conditions</p>
              </Link>
            </li>
          </ul>
        </div>
        <div class="footer-links">
          <div class="flex-container">
            <div class="flex-item">
              {" "}
              <Link to="/">
                <p>Home</p>
              </Link>
            </div>
            <div class="flex-item">
              {" "}
              <Link to="/about">
                <p>About</p>
              </Link>
            </div>
            <div class="flex-item">
              <Link to="/survey">
                <p>Survey</p>
              </Link>
            </div>
            <div class="flex-item"><Link to="/reports">
                <p>Reports</p>
              </Link></div>
            <div class="flex-item"><Link to="/news">
                <p>News</p>
              </Link></div>
            <div class="flex-item" 
            style={{
                width: `7rem`
            }}
            >  <Link to="/partners">
                <p>Partners</p>
              </Link></div>
              <div class="flex-item">
              <Link to="/contact">
                <p>Contact</p>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
