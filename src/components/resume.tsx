import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

const Resume: React.FC = () => {
  return (
    <span>
      <iframe src={"../../resume.pdf"} style={{
          width: "100%",
          height: "900px"
        }}/>
    </span>
  )
}

export default Resume
