import React from 'react'
import '../../../../src/App.scss'
import Hero from './hero/Hero'
import Footer from '../../Footer'
function Landing() {
    return (
        <div>
             <Hero />

           
            <div 
            style={{
                padding: '0 10vw'
            }}
            >
                   {/* 
            <BoxPicLeft boxId="0"/>
            <BoxPicRight boxId="1"/>
            <BoxPicLeft boxId="2"/>
            <MailChimpSignUpForm />
            </div>
                      */}  
             
        </div>
        <Footer />
        </div>
    )
}

export default Landing
