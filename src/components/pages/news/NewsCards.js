import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./card.scss"
function NewsCards() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulNews {
            edges {
              node {
                author
                bodyNormal {
                  bodyNormal
                }
                date
                institution
                newsTitle
                subtitle
                slug
              }
            }
          }
        }
      `}
      render={data => (
        <div className="news-grid">
          {data.allContentfulNews.edges.map(article => (
            <div className="news-card">
              <div className="news-card-pic">
                <img src={`https://picsum.photos/id/1052/300`} alt="" />
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
                <div className="news-intro">
                  {article.node.bodyNormal.bodyNormal.slice(0, 200)} ...
                </div>
                <div className="button-box">
                <Link to={`/news/${article.node.slug}`}>
                  <div className="btn-big">
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
      )}
    />
  )
}
export default NewsCards
