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
    console.log()
    return (
        <div>{data.allContentfulNews.edges[0].node.newsTitle}


        </div>
    )
}

export default NewsLandingPage
