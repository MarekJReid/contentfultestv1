import React from "react"
import { Link } from "gatsby"
import Layout from "../../../layout"
import AboutDisplayContainer from "./AboutDisplayContainer"
import "../about.scss"
function AboutLanding() {
  return (
    <div className="about-page">
      <Layout>
        <main
          style={{ display: `flex`, height: `100%`}}
        >
          <nav className="about-page-nav">
            <ul>
              <li><Link to="/about">  <span> Introduction</span> </Link></li>
              <li><Link to="/about/concept">  <span> Concept </span> </Link></li>
              <li><Link to="/about/author">  <span> Author </span> </Link></li>
              <li><Link to="/partners">  <span> Partners </span> </Link></li>
            </ul>  
          </nav>
          <AboutDisplayContainer />
        </main>
      </Layout>
    </div>
  )
}

export default AboutLanding
