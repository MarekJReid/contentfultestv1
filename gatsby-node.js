exports.createPages = async ({ actions: { createPage }, graphql }) => {
    
    const newsData = await graphql(`
    query newsArticle {
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
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
            image2 {
              fluid(maxWidth: 980) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
            image3 {
              fluid(maxWidth: 980) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
            newsTitle
            bodyNormal2 {
              bodyNormal2
            }
            bodyNormal3 {
              bodyNormal3
            }
            subtitle
            institution
          }
        }
      }
    }
    
    `)
    const ArticleTemplate = require.resolve("./src/components/templates/news/ArticleTemplate.js")
   
    newsData.data.allContentfulNews.edges.forEach(edge => {
      createPage({
        path: `/news/${edge.node.newsTitle.replace(/\s+/g, '-').toLowerCase()}/`,
        component: ArticleTemplate,
        context: {
          author: edge.node.author,
          title: edge.node.newsTitle,
          subtitle: edge.node.subtitle,
          date: edge.node.date,
          body1: edge.node.bodyNormal,
          body2: edge.node.bodyNormal2,
          body3: edge.node.bodyNormal3,
          image1: edge.node.image1,
          image2: edge.node.image2,
          image3: edge.node.image3
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
  
  
  
  