import React, { useRef, useState, useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { TweenLite } from "gsap"
import "./partners.scss"

import DropDownMenu from "./DropDownMenu"

import bg from "../../../images/partners/partners.jpg"

function PartnersLanding(props) {

  const data = useStaticQuery(graphql`
  query Partners {
    file(relativePath: {eq: "partners/partners.jpg"}, childImageSharp: {fluid: {aspectRatio: {}, base64: {}, originalName: {}}}) {
      id
      childImageSharp {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  let page = useRef(null)

  useEffect(() => {




    TweenLite.fromTo(
      page,
      1,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        delay: 0.2,
      }
    )
  })

  return (
    <div>
      <div class="partners-container" ref={el => (page = el)}>
        <div class="partners-intro-box">
          <div class="intro-box-text">
            <h1>Our Distinguished Partners</h1>
            <p>
              Our partners in instution and coutnry are the foundations of our study. 
              Without them, the breadth of our research would be severly limited. We invite you to
              delve into how they are commited to serving the purpose of this vital research.
            </p>
            <div class="box-h3-menu">
             
              <h3>Find out more about who they are below</h3>
              <DropDownMenu />
            </div>
          </div>
        </div>
      
        
        <Img fluid={data.file.childImageSharp.fluid} key={data.file.childImageSharp.fluid.id} style={{zIndex: `-1`}} />
        
      </div>
    </div>
  )
}

export default PartnersLanding
