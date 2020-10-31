exports.createPages = async ({ actions: { createPage }, graphql }) => {
    
    const newsData = await graphql(`
    query {
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
    const ArticleTemplate = require.resolve("./src/components/templates/news/ArticleTemplate.js")
   
    newsData.data.allContentfulNews.edges.forEach(edge => {
      createPage({
        path: `${edge.node.slug}/`,
        component: ArticleTemplate,
        context: {
          author: edge.node.author,
          title: edge.node.newsTitle,
          subtitle: edge.node.subtitle,
          date: edge.node.date,
          body: edge.node.bodyNormal.bodyNormal
        },
      })
    })
  }
  
  
  
  