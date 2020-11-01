import React, {useRef, useEffect} from "react";
import {gsap} from 'gsap'
import "./survey.scss";
function Survey() {

    let pic = useRef(null)
    let textBox = useRef(null)



    useEffect(() => {
        gsap.fromTo(pic, 1, {height: 0}, {height: "100%"} )
        gsap.to(textBox, 1, {height: "100%", opacity: 1})
    })
  return (
    <div
      style={{
        height: `90vh`,
        marginTop: `10vh`,
        display: `flex`,
        justifyContent: `center`,
        justifyItems: `center`
      }}
    >
      <div className="survey-page-container">
      <div className="survey-page-image">
            <img src={`https://picsum.photos/id/177/1000/250`} alt="" ref={(el) => (pic = el)} />
          </div>
        <div className="survey-page-section">
          
          <div className="survey-page-intro-box" ref={(el) => (textBox = el)}>
            <div className="survey-page-intro-box-heading">
              <h1> <span className="heading-right"> Welcome to the Hope </span> <span  className="heading-left" > Barometer Survey</span> </h1>
            </div>
            <div className="survey-page-intro-box-para">
              <p>
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections.
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections.
              </p>
            </div>
            <div className="survey-page-link-button"><p>Click here to visit our survey site</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
