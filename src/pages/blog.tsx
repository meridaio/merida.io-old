import React from 'react'

import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import { mkBlog } from '../../output/Page.Blog'

const Blog: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MarkdownBlogPages {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `)

  const Blog = mkBlog(data.allMarkdownRemark.edges.map(x => x.node.frontmatter))()
  return (
    <Layout>
      <SEO title="Blog" />
      <Blog />
    </Layout>
  )
}

export default Blog