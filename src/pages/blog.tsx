import React from 'react'

import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import SEO from '../components/seo'

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

  return (
    <Layout>
      <SEO title="Blog" />
      <p>blog!</p>
      <ul>
        {data.allMarkdownRemark.edges
          .sort((x, y) => x.node.frontmatter.date < y.node.frontmatter.date)
          .map(x => <li><Link to={x.node.frontmatter.path}>{x.node.frontmatter.title}</Link></li>)
        }
      </ul>
    </Layout>
  )
}

export default Blog