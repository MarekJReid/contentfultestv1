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
          <h1 ref={el => (heading = el)}>Andreas Whatshisname</h1>
          <p className="qauls" ref={el => (qauls = el)}>
            Lorem ipsum dolor sit amet.
          </p>
          <p ref={el => (para = el)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            adipisci. Maiores inventore quas dignissimos, obcaecati quisquam
            iure cupiditate eius neque fugiat consequuntur. Nesciunt deserunt
            provident debitis aliquid saepe repudiandae ipsum velit
            exercitationem? Deserunt veritatis neque suscipit, tempora iure aut
            vitae nobis, deleniti blanditiis sit optio esse consectetur minima
            beatae nostrum earum explicabo ab, voluptates porro ipsum distinctio
            veniam quasi. Ullam enim id, labore dignissimos sint quam doloremque
            autem eius quas adipisci alias tempora laboriosam obcaecati quaerat?
            Aliquam reprehenderit deserunt veritatis, assumenda corrupti dolores
            esse, quis ad molestiae saepe qui quae autem amet at illum maiores
            fugit eaque blanditiis. Quasi, libero sunt. Quasi laudantium
            reiciendis nisi. Fuga quis, dolorum quam ea pariatur inventore illum
            suscipit, totam molestiae maxime exercitationem a hic dolorem
            delectus perspiciatis. Ex nobis pariatur doloribus voluptatem quia
            magni debitis facere dolores animi nihil, porro, modi veniam officia
            amet fuga, ipsam recusandae ipsa. Provident nihil quae accusantium
            eligendi eum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Author
