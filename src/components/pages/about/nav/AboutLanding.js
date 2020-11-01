import React from "react"
import { Link } from "gatsby"
import Layout from "../../../layout"
import AboutDisplayContainer from "./AboutDisplayContainer"
import "../about.scss"
function AboutLanding() {
  return (
    
      <Layout>
    
        <div className="about-page">
          <nav className="about-page-nav">
            <ul>
              <li><Link to="/about">  <span> Introduction</span> </Link></li>
              <li><Link to="/about/concept">  <span> Concept </span> </Link></li>
              <li><Link to="/about/author">  <span> Author </span> </Link></li>
              <li><Link to="/partners">  <span> Partners </span> </Link></li>
            </ul>  
          </nav>
          <AboutDisplayContainer />
          </div>
        
        
      </Layout>
    
  )
}

export default AboutLanding
