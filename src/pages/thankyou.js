import React from "react"
import Layout from "../components/layout"
import "../App.scss"
import img from '../images/thankyou-landing.jpg'
function ThankYou({location}) {
 let type = location.state.type
 let name = location.state.name

  return (
    <Layout>
      <div className="thankyou-page">
        <div className="thankyou-container">
          <div className="pic-container">
            <img src={img} alt=""/>
          </div>
          <div class="text-container">
            <h1>
            {type != "enquiry" ? (
              <h3>Thank you very much for subscribing to our mailing list {name} ! </h3>
            )
          :
          (
            <h1>Thank you very much for your enquiry {name}! </h1>
          )
          }
            </h1>
            {type != "enquiry" ? (<h3>
            You will be notified with all of the latest news and releases
            as soon as they come to light.
          </h3>

            ) :  <h3>We will get back to you as soon as possible.</h3>}
           
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ThankYou
