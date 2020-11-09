import React from "react"
import "./newsSass.scss"
import NewsCards from "./NewsCards"
function NewsLanding() {
  return (
    <div
      style={{
        marginTop: `10vh`,
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <div className="news-constainer">
        <div className="news-intro-box">
          <div className="news-title">
            <h1> Stay up to date with all the latest Hope Barometer News.</h1>
          </div>

          <div className="news-para">
            <p>
              Browse below for all of the latests updates and happenings around our survey. 
            </p>
          </div>
        </div>
        <NewsCards />
      </div>
    </div>
  )
}
export default NewsLanding
