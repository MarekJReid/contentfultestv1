import React,{useRef, useEffect} from "react"
import '../about.scss'
import {TweenLite} from 'gsap'
import concept from './concept.json'


function TextBox({id, titleAlign}) {
  const {name, intro} = concept[id]
 
let fade = useRef(null)

useEffect(() => {
 
if (id) {TweenLite.to(fade, 3, {autoAlpha: 1, })}
})

  return (
    <div
      
       className="textBox"
       ref={el => (fade = el)}
    > 
      {name ? (
        <div 
      class= { id === 1 || id === 3 || titleAlign === 1 ? "titles-right" : "" }
      >
      <h1>{name}</h1> 
      </div>
      ) : null}
      
      
      <div class="text-box-body">
      <p>
        {intro}
      </p>
      </div>
      
     
    </div>
  )
}

export default TextBox
