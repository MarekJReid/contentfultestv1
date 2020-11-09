import React, { useRef, useEffect, useState } from "react"
import { TimelineLite, TweenLite, gsap } from "gsap"
import Img from 'gatsby-image'

import "../../pages/partners/partners.scss"


import Layout from "../../layout"
let tl = new TimelineLite()

function Country(props) {
  console.log(props)
  const [subPage, setSubPage] = useState(1)
  const {
    country,
    about,
    introduction,
    contribution,
    institution,
    image
  } = props.pageContext

  let page = useRef(null)
  let img = useRef(null)
  let heading = useRef(null)
  let qauls = useRef(null)
  let para = useRef(null)
  let nav = useRef(null)

  useEffect(() => {
    tl.fromTo(img, 1, { scale: 0.9 }, { opacity: 1, scale: 1 })
    TweenLite.fromTo(
      heading,
      0.75,
      { x: 100, opacity: 0 },
      { opacity: 1, x: 0 }
    )
    TweenLite.fromTo(
      qauls,
      0.45,
      { x: 50, opacity: 0 },
      { opacity: 1, x: 0, delay: 0.25 }
    )
    TweenLite.fromTo(
      para,
      0.65,
      { x: -10, opacity: 0 },
      { opacity: 1, x: 0, delay: 0.5 }
    )
    gsap.from(nav, 1, { autoAlpha: 0 })
  })

  return (
    <Layout>
      <div class="country-page">
        <div class="country-wrapper">
          <div class="country-container-pic">
           <Img fluid={image.fluid} key={image.src} />
          </div>
          <div class="country-container-text">
            <h1 ref={el => (heading = el)}>{country}</h1>
            <p className="institution" ref={el => (qauls = el)}
            
            style={{
              textAlign: `center`,
              marginTop: `-.5rem`
            }}
            >{institution}</p>
            <div class="content-header">
              

              <nav>
                <ul ref={el => (nav = el)}
                style={{
                  paddingBottom: `.5rem`
                }}
                >
                  <li onClick={() => setSubPage(1)}>
                    <span className={subPage === 1 ? "active" : ""}>
                      Introduction
                    </span>
                  </li>
                  <li onClick={() => setSubPage(2)}>
                    <span className={subPage === 2 ? "active" : ""}>
                      Institution
                    </span>
                  </li>
                  <li onClick={() => setSubPage(3)}>
                    <span className={subPage === 3 ? "active" : ""}>
                      Conclusions
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            {subPage === 1 ? (
              <p className="para" ref={el => (para = el)}>
            
                {introduction}
              </p>
            ) : subPage === 2 ? (
              <p className="para" ref={el => (para = el)}> {about} about us </p>
            ) : (
              <p className="para" ref={el => (para = el)}> {contribution} </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Country
