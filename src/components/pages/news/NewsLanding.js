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
            <h1> You should read all of our newss </h1>
          </div>

          <div className="news-para">
            <p>
              Ducks. There how preparation such are the to the luxury discharge
              and my cons, refute. What cache a following the do and its
              continued then it was have frequency of in which, good to parks.
            </p>
          </div>
        </div>
        <NewsCards />
      </div>
    </div>
  )
}
export default NewsLanding
