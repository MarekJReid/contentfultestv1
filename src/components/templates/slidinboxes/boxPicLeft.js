import React, { useRef, useEffect } from 'react'
import boxInfo from './boxInfo.json'




import { picLeftSideTextBox, picLeftSideTextBoxText, picLeftSidePicBox } from '../../animations/animations'

const BoxPicLeft = (boxId) => {



  const { boxRef, boxCss, textCss, slug, title, subtitle, content, id } = boxInfo[boxId.boxId]
  let trigger = useRef(null)
  let picBox = `${boxRef}Pic`
  picBox = useRef(null);
  let textBox = `${boxRef}TextBox`
  textBox = useRef(null)
  let textBoxText = `${boxRef}TextBoxText`
  textBoxText = useRef(null);

  useEffect(() => {
    picLeftSidePicBox(picBox, picBox)
    picLeftSideTextBox(textBox, picBox)
    picLeftSideTextBoxText(textBoxText, picBox)
  }, []);

  let img = id + 1


  return (
    
    <div 
    ref={el => (trigger = el)}
    style={
    
      {
        display: `flex`,
        flexDirection: `column`,
        height: `100vh`
      }
    }>
      <div className={`${boxCss}`}>                                          
        <div className={`${boxCss}-pic`} ><img src={require(`../../../images/sliders/${img}.jpg`)} ref={(el) => (picBox = el)}/>
                                                                     
                                                                     
          </div>
        
        <div className={`${boxCss}-text-box`} ref={(el) => (textBox = el)}>
          <div className={`${textCss}`} ref={(el) => (textBoxText = el)}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxPicLeft
