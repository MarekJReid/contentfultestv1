import React from "react"
import { useStaticQuery, StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import "./card.scss"
function NewsCards() {
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
  console.log(data.allContentfulNews.edges[0].node.image1.fluid)
  return ( 
     
        <div className="news-grid">
      
          {data.allContentfulNews.edges.map(article => (
            <div className="news-card">
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
