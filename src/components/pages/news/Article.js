import React from 'react'
import {Link} from 'gatsby'
import Layout from '../../layout'

function Article(props) {
    const {
        author,
        title,
        subtitle,
        date,
        body
        
      } = props.pageContext

    return (
        <Layout>
            <div class="news-article-container">
                <div class="article-container">
                <div class="heading-section">
                    <h1>
                    {title}
                    </h1>
                    <h3>
                    {subtitle}
                    </h3>
                    <h4
                    style={{
                        display: `inline`,
                        fontSize:`110%`
                    }}
                    >
                    Author <p><strong>{author}</strong></p>
                    </h4>
                    </div>
                    <p>
                    <strong>Date Written:</strong> {date}
                    </p>
                   
                    <div class="p">{body}</div>
                <p>
                <Link to='/news'
                style={{
                    paddingBottom: `5rem`,
                    fontWeight: `bold`
                }}
                >Back to articles</Link>
                </p>
                
                </div>
            </div>
        </Layout>
    )
}

export default Article
