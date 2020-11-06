import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsLanding from "../components/pages/news/NewsLanding"

const News = () => (
  <Layout>
    <SEO title="The Latest Hope Barometer News" />
    <NewsLanding />
  </Layout>
)

export default News