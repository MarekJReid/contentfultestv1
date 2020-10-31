import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import "./newsSass.scss"
import NewsCards from "./NewsCards"
function NewsLanding() {
//   const data = useStaticQuery(graphql`
//   query NewsQuery {
//     allContentfulNews {
//       edges {
//         node {
//           newsTitle
//         }
//       }
//     }
//   }
// `)
console.log('data')
  return (
    
<div
style={{
  marginTop: `10vh`,
  display: `flex`,
}}
>
<div className="news-constainer">
  <div className="news-intro-box">
    <div className="news-title">
      <h1> You should read all of our newss   </h1>
    </div>
   
    <div className="news-para">
      <p>
        Ducks. There how preparation such are the to the luxury discharge
        and my cons, refute. What cache a following the do and its
        continued then it was have frequency of in which, good to parks.
      </p>
    </div>
  </div>
  <NewsCards />
  
  boobs
</div>
</div>
  )
}
export default NewsLanding
