import React from 'react'
import { Router } from "@reach/router"

import '../about.scss'

// import AboutIntro from './AboutIntro'
import Intro from '../intro/Intro'
import Concept from '../concept/Concept'
import Author from '../author/Author'

function AboutDisplayContainer() {
    return (
        <div className="about-page-display-container">
        <Router>
            <Intro path="/about"  />
            <Concept exact path="/about/concept" />
            <Author exact path="/about/author" />
      </Router>
      
</div>
    )
}

export default AboutDisplayContainer

  

 
  
  