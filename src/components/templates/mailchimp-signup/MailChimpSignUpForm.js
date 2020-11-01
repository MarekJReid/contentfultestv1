import React,{ useEffect, useRef,useState } from "react"
import { TweenLite } from 'gsap'
import {Link} from 'gatsby'
import "./mailchimp-modal.scss"
function MailChimpSignUpForm() {
  const [name, setName] = useState("George")
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
          <Link 
          to="/thankyou"
          state={{ submissionFrom: "mailchimp", name: name }}
          style={{
            marginTop: `.4rem`
          }}
          >
           <input type="submit" value="Subscribe" />
          </Link>
          
        </form>
      </div>
    </div>
  )
}

export default MailChimpSignUpForm
