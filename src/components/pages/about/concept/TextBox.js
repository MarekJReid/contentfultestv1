import React from "react"
import '../about.scss'

import concept from './concept.json'


function TextBox({id, titleAlign}) {
  const {name, intro} = concept[id]
 



  return (
    <div
      
       className="textBox"
    > 
      {name ? (
        <div 
      class= { id === 1 || id === 3 || titleAlign === 1 ? "titles-right" : "" }
      >
      <h1>{name}</h1> <h3> I am a sub heading </h3>
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
