import React from "react"
import img from '../images/thankyou-landing.jpg'
import Layout from "../components/layout"


const NotFoundPage = () =>  (
  <Layout>
    <div className="thankyou-page">
      <div className="thankyou-container">
        <div className="pic-container">
          <img src={img} alt=""/>
        </div>
        <div class="text-container">
          <h1>
            OOPS!
            {/* Thank you {name} much for your {submissionType}! */}
          </h1>
          <h3>
                You have magically appeared a page or route that does not exist. Please go back to 
                continue your browsing experience.
              </h3>
         <p>Regards, The Hope Barometer</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
