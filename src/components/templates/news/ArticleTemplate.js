import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../layout"

function Article(props) {
  const {
    author,
    title,
    subtitle,
    date,
    body1,
    body2,
    body3,
    image1,
    image2,
    image3,
  } = props.pageContext

  return (
    <Layout>
      <div class="news-article-container">
        <div class="article-container">
          <div
            class="article-image1"
            style={{ height: `60vh`, width: `100%`, position: `relative` }}
          >
            <Img fluid={image1.fluid} style={{ position: `absoloute` }} />
          </div>
          <div class="text-section">
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h4
              style={{
                display: `inline`,
                fontSize: `110%`,
              }}
            >
              Author
              <p>
                <strong>{author}</strong>
              </p>
            </h4>

            <p>
              <strong>Date Written:</strong> {date}
            </p>

            <p>{body1.bodyNormal}</p>
          </div>
          <div
            class="hello"
            style={{ height: `60vh`, width: `100%`, position: `relative` }}
          >
            <Img fluid={image2.fluid} style={{ position: `absoloute` }} />
          </div>
          <div class="text-section">
            <p>{body2.bodyNormal2}</p>
          </div>
          <div
          class="hello"
          style={{ height: `60vh`, width: `100%`, position: `relative` }}
        >
          <Img fluid={image3.fluid} style={{ position: `absoloute` }} />
        </div>

        <div class="text-section">
          <p>{body3.bodyNormal3}</p>
        </div>
        </div>

       
        <p>
          <Link
            to="/news"
            style={{
              paddingBottom: `5rem`,
              fontWeight: `bold`,
            }}
          >
            Back to articles
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default Article
