import React,{useRef,useState } from "react"

import {Link} from 'gatsby'
import "./mailchimp-modal.scss"
function MailChimpSignUpForm() {
  const [name, setName] = useState()
  let form = useRef(null)


  return (
    <div className="form-container" >
      <h1>Sign-up to our mailing list</h1>
      <h3>Recieve all the latest news, results and next survey date first!</h3>


      <div class="form-section">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <Link 
          to="/thankyou"
          state={{ type: "mailchimp", name: name }}
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
