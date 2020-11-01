import React, {useState} from "react"
import {Link} from 'gatsby'
import "./contact.scss"
function ContactPage() {
  const [name, setName] = useState()
  return (
    <div className="contact-page">
      <div className="contact-intro">
        <h1>Let us know how we can help!</h1>
        <h3>
          Fill out the form below with any queries you may have, and we will get
          back to you as soon as possible!
        </h3>
      </div>
      <div className="contact-form">
        <div class="contact-field">
          <input type="text" name="name" required />
          <label for="name" className="label-name">
            <span className="content-name">Name</span>
          </label>
        </div>
        <div class="contact-field">
          <input type="text" name="email" required />
          <label for="email" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        <div class="contact-field">
          <input type="text" name="subject" required />
          <label for="subject" className="label-name">
            <span className="content-name">Subject</span>
          </label>
        </div>
        <span className="content-query"
        style={{
            paddingLeft: `1rem`,
            marginBottom: `-.7rem`,
            marginTop: `1rem`
        }}
        >Enter your query here</span>
       <div class="contact-field">
      
        <textarea placeholder="" className=""/>
          
       
        </div>

        <div className="contact-submit-button">
          <Link 
          to="/thankyou"
          state={{ type: "enquiry", name: name }}
          >
            <p>Submit</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
