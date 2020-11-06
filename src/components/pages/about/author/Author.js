import React, { useRef, useEffect } from "react"
import { TimelineLite, TweenLite } from "gsap"

import "../about.scss"

import author from "../../../../images/about/author.jpg"

let tl = new TimelineLite()

function Author() {
  let img = useRef(null)
  let heading = useRef(null)
  let qauls = useRef(null)
  let para = useRef(null)

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
  })

  return (
    <div class="author-page">
      <div class="author-wrapper">
        <div class="author-container-pic">
          <img src={author} alt="" ref={el => (img = el)} />
        </div>
        <div class="author-container-text">
          <h1 ref={el => (heading = el)}>Andreas Krafft</h1>
          <p className="qauls" ref={el => (qauls = el)}>
            PHD - Management Sciences. University of St. Gallen
          </p>
          <p ref={el => (para = el)}>
          Andreas Krafft holds a doctoral degree in Management Sciences at the University of St. Gallen with special focus on Organizational Psychology, Culture and Development. He has academic specializations in Social Psychology of Organizations, Work and Health Psychology as well as Positive Psychology from the University of Zürich. Dr. Krafft is associate researcher and lecturer at the Institute of Systemic Management and Public Governance at the University of St. Gallen. Furthermore, he teaches at the University of Zürich in the field of Work and Health, at the Master of Applied Positive Psychology at the University of Lisbon, Portugal, as well as at other universities in India, Colombia and Italy. He is co-president of swissfuture, the Swiss Society of Futures Studies and since 2010 head of the International Research Network of the Hope-Barometer. His former publications were on management related topics, specifically on the role of leadership and innovation to promote personal wellbeing. Recently he published three books on the psychology of hope at Springer Nature in addition to scientific articles and book chapters. He is member of the International Positive Psychology Association and board member of the Swiss Positive Psychology Association. Dr. Krafft develops volunteer work in an NPO dedicated to the assistance of people particularly with chronic, non-curable or terminal diseases with special focus on Latin America.  
          </p>
          </div>
          <div class="author-publications">
          <h2>Featured Publications</h2>
          <h4>* Krafft, A. M., Martin-Krumm, C., & Fenouillet, F. (2019).</h4>
          <p>Adaptation, further elaboration, and validation of a scale to measure hope as perceived by people: Discriminant value and predictive utility vis-à-vis dispositional hope. Assessment, 26(8), 1594-1609.</p>
          <h4>Krafft, A. M., Perrig-Chiello, P., & Walker, A. M. (Eds.). (2018).</h4>
          <p> Hope for a Good Life: Results of the Hope-Barometer International Research Program (Vol. 72). Springer.</p>
          <h4>Krafft, A. M., & Walker, A. M. (2018).</h4>
          <p>Positive Psychologie der Hoffnung: Grundlagen aus Psychologie, Philosophie, Theologie und Ergebnisse aktueller Forschung. Springer-Verlag.</p>
          <h4>Krafft, A. M. (2019).</h4>
          <p>Werte der Hoffnung: Erkenntnisse aus dem Hoffnungsbarometer. Springer-Verlag.</p>
          <h4>Krafft, A. (2012).</h4>
          <p>The Management of Innovations and Personal Well-being: A Trans-Disciplinary Model and Empirical Findings. In Systemic management for intelligent organizations (pp. 99-119). Springer, Berlin, Heidelberg.</p>
          </div>
      </div>
    </div>
  )
}

export default Author
