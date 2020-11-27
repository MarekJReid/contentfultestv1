import React, { useState, useRef, useEffect } from "react"
import { TimelineLite, TweenLite } from "gsap"

import "../about.scss"

import TextBox from "./TextBox"
import PhotoBox from "./PhotoBox"

let tl = new TimelineLite()

function AboutSliders({ contentRight, startNum, page }) {
  const [buttons, setButtons] = useState(contentRight)
  const [boxNum, setBoxNum] = useState(startNum)

  let picBox = useRef(null)
  let textBox = useRef(null)
  let subNavButtons = useRef(null)

  useEffect(() => {
    TweenLite.to([picBox, textBox, subNavButtons], 1, {
      autoAlpha: 1,
    })
  })

  const animations = () => {
    tl.to([picBox, textBox, subNavButtons], 1, { opacity: 0 })

    if (buttons) {
      tl.fromTo([textBox], .1, { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(
        [picBox],
        .1,
        { autoAlpha: 0,
        
        },
        {
          autoAlpha: 1,
        }
      )
    }
  }

  const clickButtons = () => {

 if (page = "intro")  { 
    setTimeout(() => {
      setButtons(!buttons)
      boxNum < 3 ? setBoxNum(boxNum + 1) : setBoxNum(0)
    }, 1000) } 
    
    if (page = "concept") {
      setTimeout(() => {
        setButtons(!buttons)
        boxNum < 6  ? setBoxNum(boxNum + 1) : setBoxNum(4)
      }, 1000)
    }
    animations()

    
  }

  const previousClickButtons = () => {
    setTimeout(() => {
      boxNum > 0 ? setBoxNum(boxNum - 1) : console.log("boob")
      setButtons(!buttons)
    }, 1000)
    animations()
  }
  const startN = startNum

  return (
    <div>
      <div class="concept-page">
        <div class="concept-wrapper">
          <div
            class={buttons ? "concept-container-pic" : "concept-container-text"}
            ref={el => (picBox = el)}
          >
            {buttons ? (
              <PhotoBox id={boxNum} />
            ) : (
              <TextBox id={boxNum} titleAlign={startN} />
            )}
          </div>

          <div
            class={
              buttons
                ? "concept-container-text-right"
                : "concept-container-pic-right"
            }
            ref={el => (textBox = el)}
          >
            {buttons ? (
              <TextBox id={boxNum} titleAlign={startN} />
            ) : (
              <PhotoBox id={boxNum} />
            )}
          </div>
          <div
            class="concept-container-button-box"
            ref={el => (subNavButtons = el)}
          >
            <div
              class={
                buttons
                  ? "concept-container-buttons-left"
                  : "concept-container-buttons-right"
              }
            >
              {boxNum > 0 ? (
                <span>
                  <span class="button" onClick={previousClickButtons}>
                    Previous
                  </span>
                  <span class="middle" style={{minWidth: `10rem`}}> &nbsp; &nbsp; &nbsp;  </span>
                </span>
              ) : null}

              <span>
                <span class="button" onClick={clickButtons}>
                  Next
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSliders
