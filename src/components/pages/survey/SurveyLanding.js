import React, {useRef, useEffect} from "react";
import {gsap} from 'gsap'
import "./survey.scss";
import bg from  '../../../images/hero-landing.jpg'
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image'

function Survey(props) {

  const data = useStaticQuery( graphql`
  query SurveyImage {
    file(relativePath: {eq: "hero-landing.jpg"}) {
      id
      childImageSharp {
        fluid(maxHeight: 300) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
      }
    }
  }
  
  

`)

console.log(data.file.childImageSharp.fluid)

    let pic = useRef(null)
    let textBox = useRef(null)



    useEffect(() => {
        gsap.fromTo(pic, 1, {height: 0}, {height: "100%"} )
        gsap.to(textBox, 1, {height: "100%", opacity: 1})
    })
  return (
    <div
      className="survey-page"
    >
      <div className="survey-page-container">
      <div className="survey-page-image">

           
            <Img fluid={data.file.childImageSharp.fluid}  style={{zIndex: `-1`, minHeight: `100vh`}} ref={(el) => (pic = el)} />

            </div>
            
        
        <div className="survey-page-section">
          
          <div className="survey-page-intro-box" ref={(el) => (textBox = el)}>
            <div className="survey-page-intro-box-heading">
              <h1> <span className="heading-right"> Welcome to the Hope </span> <span  className="heading-left" > Barometer Survey</span> </h1>
            </div>
            <div className="survey-page-intro-box-para">
              <p>
                We would like to invite you to participate in the 2020 survey of hope. With a specific focus on the current climate regarding the pandemic we as humanity are facing and its subsequent challenges.
              </p>
            </div>
            <a href="https://www.efs-survey.com/uc/Uni_St_Gallen/27cd/" target="_blank" className="survey-page-link-button">
            <div ><p>Click here to visit our survey site</p></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;




