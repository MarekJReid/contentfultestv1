import React, { useState, useRef, useEffect } from "react"
import { TimelineLite, TweenLite } from "gsap"

import "../about.scss"

import TextBox from "./TextBox"
import PhotoBox from "./PhotoBox"

let tl = new TimelineLite()

function AboutSliders({ contentRight, startNum }) {
  const [buttons, setButtons] = useState(true)
  const [boxNum, setBoxNum] = useState(0)

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
    setTimeout(() => {
      setButtons(!buttons)
      boxNum < 3 ? setBoxNum(boxNum + 1) : setBoxNum(0)
    }, 1000)
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
                  <span class="prev" onClick={previousClickButtons}>
                    Previous
                  </span>
                  <span class="middle"> / </span>
                </span>
              ) : null}

              <span>
                <span class="next" onClick={clickButtons}>
                  &nbsp; Next
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
