import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Nathan's Awesome Site</h1>
    <Link to="/blog/">BLOG</Link>
  </Layout>
)

export default IndexPage
