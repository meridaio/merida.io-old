import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GitHub = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "GitHub-Mark-64px.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <span style={{
      float: "right",
      width: "48px"
    }}>
      <a href="https://github.com/meridaio">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </a>
    </span>
  )
}

export default GitHub
