import React, {useEffect, useRef} from 'react'
import {TweenLite} from 'gsap'

import MailChimpSignUpForm from './MailChimpSignUpForm'


function MailChimpLanding() {
    let containerMC = useRef(null)
   
    useEffect(() => {
        TweenLite.fromTo(containerMC, 1, 
         {autoAlpha: 0},
         {
         duration: 5,
        autoAlpha: 1,
         delay: .75,
         ease: `none`,
         scrollTrigger: {
           id: "id",
           trigger: containerMC,
           start: "center bottom",
           toggleActions: "play none none reverse",
           // markers: true
         },
        })
    }, [])

    return (
        <div
        style={{
            paddingBottom: `15vh`
        }} ref={el => (containerMC = el)}
        >
            <MailChimpSignUpForm />
        </div>
    )
}

export default MailChimpLanding
