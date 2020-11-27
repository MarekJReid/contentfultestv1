const { node } = require("prop-types")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    
    const newsData = await graphql(`
    query CountryPage {
      allContentfulNews {
        edges {
          node {
            bodyNormal {
              bodyNormal
            }
            author
            date(formatString: "dddd MMMM Do, YYYY")
            institution
            newsTitle
            image1 {
              fluid(maxWidth: 1000) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
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
    query CountryPage {
      allContentfulCountryDetails {
        edges {
          node {
            country
            institution
            childContentfulCountryDetailsAboutRichTextNode {
              childContentfulRichText {
                html
              }
            }
            childContentfulCountryDetailsContributionRichTextNode {
              childContentfulRichText {
                html
              }
            }
            childContentfulCountryDetailsIntroductionRichTextNode {
              childContentfulRichText {
                html
              }
            }
            image {
              fluid(maxWidth: 1000) {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
    
  `)
  const Country = require.resolve("./src/components/templates/partners/Country.js")

  data.data.allContentfulCountryDetails.edges.forEach(edge => {
    createPage({
      path: `/partners/${edge.node.country.toLowerCase()}/`,
      component: Country,
      context: {
        country: edge.node.country,
        institution: edge.node.institution.institution,
        data: edge.node,
        introduction: edge.node.childContentfulCountryDetailsIntroductionRichTextNode.childContentfulRichText.html,
        contribution: edge.node.childContentfulCountryDetailsContributionRichTextNode.childContentfulRichText.html,
        about: edge.node.childContentfulCountryDetailsAboutRichTextNode.childContentfulRichText.html,
        image: edge.node.image
         },
    })
  })
  }
  
  
  
  