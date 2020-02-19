import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry Mario, this page is in another castle</p>
  </Layout>
)

export default NotFoundPage
