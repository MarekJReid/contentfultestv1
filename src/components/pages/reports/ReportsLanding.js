import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import "./reportsSass.scss"

import reports from "./reportsDB.json"

import reportPic1 from '../../../images/reports/report1.jpg'

function ReportsLanding() {
  const [numreports, setNumreports] = useState(3)

  let reportsGrid = useRef(null)

  const clickSetNumreports = () => {
    setNumreports(numreports + 3)
  }

  const clickSetNumreportsToNull = () => {
    setNumreports(numreports - numreports + 3)
    console.log(numreports)
  }

  useEffect(() => {
    gsap.from(reportsGrid.children, .5, {
      y: -50,
      autoAlpha: 0,
      delay: 0.2,
      stagger: {
        // wrap advanced options in an object

        each: 0.5,
        from: "right",
        grid: "auto",
        ease: "power2.inOut",
      },
    })
  })

  // let reports = 3
  return (
    <div
      style={{
        marginTop: `13vh`,
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <div className="reports-constainer">
        <div className="reports-intro-box">
          <div className="reports-title">
            <h1>Hope Barometer Reports</h1>
          </div>
          <div className="reports-subtitle">
            <h3>Hope Barometer Reports</h3>
          </div>
          <div className="reports-para">
            <p>
              Here you will find reference to past years surveys and findings thereof. We invite you to read the reports and findings from other countries also over in our Partners section of the website.
            </p> 
          </div>
        </div>

        <div className="reports-grid" ref={el => (reportsGrid = el)}>
          {reports.map(item =>
            item.id < numreports ? (
              <div className="reports-card">
                <div className="reports-card-pic">
                  <img
                    src={reportPic1}
                    alt=""
                  />{" "}
                </div>
                <div className="reports-card-text">
                  <h1>{item.title}</h1>
                  <div className="seperating-line"></div>
                  <div className="reports-card-subtitle">
                    <h3>{item.author}</h3>
                  </div>
                  <div className="reports-card-author-info">
                    <span> {item.authorInfo}</span>
                  </div>
                  <div className="reports-intro"><p>{item.para.slice(0, 250)}</p></div>
                <div class="button-container">
                <div className="btn-disabled">
                   
                   <p>Coming Soon</p>
              
               </div>
                </div>
                  
                </div>
              </div>
            ) : null
          )}
{/* 
          {reports.length - 1 >= numreports ? (
            <div className="load-more-cards" onClick={clickSetNumreports}>
              load more
            </div>
          ) : null}
          {reports.length - 1 <= numreports ? (
            <div className="load-more-cards" onClick={clickSetNumreportsToNull}>
              Back to top
            </div>
          ) : null} */}
        </div>
      </div>
    </div>
  )
}

export default ReportsLanding
