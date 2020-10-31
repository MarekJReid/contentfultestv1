import React from 'react'

function ArticleTemplate(props) {
    const {
        author,
        title,
        subtitle,
        date,
        body
        
      } = props.pageContext
    return (
        <div>
          {author}
        </div>
    )
}

export default ArticleTemplate
