
import React, {useRef, useEffect} from "react"
import { useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import {TweenLite} from 'gsap'
import "../news/newsSass.scss"


function NewsLandingHome() {

    const data = useStaticQuery(graphql`
    query newsLanding {
        allContentfulNews(sort: {fields: date, order: DESC}) {
          edges {
            node {
              date(formatString: "dddd MMMM Do, YYYY")
              author
              bodyNormal {
                bodyNormal
              }
              image1 { 
                  fluid(maxWidth: 980) {
                    ...GatsbyContentfulFluid
                  }
             } 
              newsTitle
              
            }
          }
        }
      }
    `)

    const {date, author, newsTitle, bodyNormal, image1} = data.allContentfulNews.edges[0].node

   let container = useRef(null)

   useEffect(() => {
       TweenLite.fromTo(container, 1, 
        {autoAlpha: 0},
        {
        duration: 5,
       autoAlpha: 1,
        delay: .75,
        ease: `none`,
        scrollTrigger: {
          id: "id",
          trigger: container,
          start: "center bottom",
          toggleActions: "play none none reverse",
          // markers: true
        },
       })
   }, [])

  return (
    <div
      style={{
        marginTop: `10vh`,
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <div className="news-constainer" ref={el => (container = el)} >
        <div className="news-intro-box" style={{textAlign: `center`, width: `100%`, padding: `0 0 5vh 0`}}>
          <div className="news-title">
            <h1 style={{fontSize: `325%`, paddingTop: `10rem`}}> The Latest in Hope Barometer News </h1>
          </div>
        </div>
        <div class="news-landing-container">
         
          <div class="card">
          
          <div class="card-img">
       <Img fluid={image1.fluid} />
          </div>
         
          <div class="card-text"
          
          style={{height: `20rem`, display: `flex`, justifyContent: `center`}}>
           
           <div class="text-box">
          <h1>{newsTitle}</h1>
              <h3>{author}</h3>
              <h4>{date}</h4>
              <p>{bodyNormal.bodyNormal.split(" ").splice(0, 50).join(" ")} ...</p>
              <div class="button-box" style={{display: `flex`, justifyContent: `flex-end`, paddingRight: `2rem`} }>
                  <Link to={`/news/${newsTitle.replace(/\s+/g, '-').toLowerCase()}`}>
            <div class="btn-med"
            style={{padding: `.5rem 1rem`, width: `100%`, margin: `0`}}
            >
                Read more
            </div>
            </Link>
        </div>
              </div>
          </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLandingHome
