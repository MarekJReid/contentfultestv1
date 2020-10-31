import React from 'react'
import {useStaticQuery} from 'gatsby'
function NewsLandingPage() {
    const data = useStaticQuery(graphql`
    query NewsLanding {
        allContentfulNews {
          edges {
            node {
              slug
              author
              bodyNormal {
                bodyNormal
              }
              date
              institution
              newsTitle
              subtitle
            }
          }
        }
      }
  `)
    console.log(data.allContentfulNews.edges[0].node.newsTitle)
    return (
        <div>meehehe news page landing</div>
    )
}

export default NewsLandingPage
