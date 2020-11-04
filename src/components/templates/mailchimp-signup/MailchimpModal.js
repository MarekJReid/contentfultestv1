import React, { useState, useEffect, useRef } from "react"
import { TweenLite } from "gsap"

import MailchimpSignUpForm from "./MailChimpSignUpForm"

function MailchimpModal() {
  const [open, setOpen] = useState(false)

  let modal = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 2000)
    openModal()
  }, [open])

  const openModal = () => {
    if (open) {
      TweenLite.to(modal, 0.5, { opacity: 1 })
    }
  }

  const closeModal = () => {
    TweenLite.fromTo(
      modal,
      0.5,
      { scale: 1, opacity: 1 },
      { opacity: 0, scale: 0 }
    )
  }

  return (
    <div className="mailchimp-modal" ref={el => (modal = el)}>
      <div class="modal-box">
        <div class="close" onClick={closeModal}>
          <h2>X</h2>
        </div>
        <MailchimpSignUpForm />
      </div>
    </div>
  )
}

export default MailchimpModal
