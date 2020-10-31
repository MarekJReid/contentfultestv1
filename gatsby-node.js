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
        path: `/news/${edge.node.slug}/`,
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

    // Partners Pages
    const data = await graphql(`
    query MyQuery {
      allCountriesJson {
        edges {
          node {
            country
            institution {
              name
              about
            }
            intro
            findings
          }
        }
      }
    }
  `)
  const Country = require.resolve("./src/components/templates/partners/Country.js")

  data.data.allCountriesJson.edges.forEach(edge => {
    createPage({
      path: `/partners/${edge.node.country}/`,
      component: Country,
      context: {
        country: edge.node.country,
        intro: edge.node.intro,
        institutionName: edge.node.institution.name,
        institutionAbout: edge.node.institution.about,
        findings: edge.node.findings,
      },
    })
  })
  }
  
  
  
  