import React, {useRef, useEffect} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {TweenLite} from 'gsap'
import Img from 'gatsby-image'
import "./card.scss"
function NewsCards() {
  let card = useRef(null)

  useEffect(() => {
    TweenLite.fromTo(card, .5, {y: "-10vh", autoAlpha: 0}, {y: 0, autoAlpha: 1} )
  })

  const data = useStaticQuery(graphql`
  query newsCards {
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
 
  return ( 
     
        <div className="news-grid">
      
          {data.allContentfulNews.edges.map(article => (
            <div className="news-card" ref={el => (card = el)}>
              <div className="news-card-pic">
              <Img fluid={article.node.image1.fluid} style={{minHeight: `100%`}}/>
              </div>
              <div className="news-card-text">
                <h1>{article.node.newsTitle}</h1>
                <div className="seperating-line"></div>
                <div className="news-card-subtitle">
                  <h3>{article.node.author}</h3>
                </div>
                <div className="news-card-author-info">
                  <span> {article.node.institution}</span>
                </div>
                <div className="news-card-author-info">
                  <span> {article.node.date}</span>
                </div>
                <div className="news-intro">
                {article.node.bodyNormal.bodyNormal.slice(0, 250)} ..
                </div>
                <div className="button-box">
                <Link to={`/news/${article.node.newsTitle.replace(/\s+/g, '-').toLowerCase()}`}>
                  <div className="btn-med" style={{padding: `1rem 3rem`}}>
                    <p>
                     Read More
                    </p>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
     
    
  )

}
export default NewsCards
