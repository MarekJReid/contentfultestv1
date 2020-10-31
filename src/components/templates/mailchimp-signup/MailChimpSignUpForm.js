import React,{ useEffect, useRef } from "react"
import { TweenLite } from 'gsap'

import "./mailchimp-modal.scss"
function MailChimpSignUpForm() {

  let form = useRef(null)

  useEffect(() => {
    TweenLite.from(form, 1,
      { autoAlpha: 0,
        scrollTrigger: {
          id: "mailchimp",
          trigger: form,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
         
        }
      })
  })

  return (
    <div className="form-container" ref={el => (form = el)}>
      <h1>Sign-up to our mailing list</h1>
      <h3>Recieve all the latest news, results and next survey date first!</h3>


      <div class="form-section">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  )
}

export default MailChimpSignUpForm
