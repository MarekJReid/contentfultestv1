import React, { useRef, useState, useEffect } from "react"
import { TweenLite, Power3 } from "gsap"

import "../about.scss"
import intro from './intro.json'

function InfoBoxLeft() {
  const [boxNumber, setBoxNumber] = useState(1)
  let introBox = useRef(null)
  let n = boxNumber


// fade boxes + slide left
// update state with new content
// fade boxes + slide left 



  const next = () => {
    boxNumber === 2 ? setBoxNumber(0) : setBoxNumber(boxNumber + 1)
    TweenLite.from(introBox, 1, {opacity: 0})
  }
  console.log(n)

  let name = intro[n].name
  let text = intro[n].intro

console.log(text)
  
  return (
    <div>
      <div className="intro-box" ref={(el) => (introBox = el)}>
        <div className="intro-box-picture"></div>
        <div className="intro-box-text-container">
         {name}
         <p>{text}</p>
        </div>
      </div>
      <div classNameName="next-button">
        <span onClick={next}>Next</span>
      </div>
    </div>
  )
}

export default InfoBoxLeft
