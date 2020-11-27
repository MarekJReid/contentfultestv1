// import React from 'react'
// import { useStaticQuery, graphql } from "gatsby"
// import DOMPurify from "dompurify";


// function RichTextTest() {
//     const data = useStaticQuery(graphql`
//     query testRTF {
//         allContentfulTest {
//           edges {
//             node {
//               childContentfulTestRtfRichTextNode {
//                 childContentfulRichText {
//                   html
//                 }
//               }
//             }
//           }
//         }
//       }
      
//   `)
  
//   const display = data.allContentfulTest.edges[0].node.childContentfulTestRtfRichTextNode.childContentfulRichText.html
//   const sanitizedDisplay = DOMPurify.sanitize(display)
//   function createMarkup() {
//     return {__html: sanitizedDisplay};
//   }
//     return (
//         <div
//         style={{
//             height: `100vh`,
//             margin: `20vh`
//         }}
//         >
//          hi
//          <div
//          dangerouslySetInnerHTML={createMarkup()}
//          >

//          </div>
//         </div>
//     )
// }

// export default RichTextTest
