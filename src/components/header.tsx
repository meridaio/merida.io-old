import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GitHub from "./github"

import './header.css'

type Title = {
  siteTitle : string
}

const Header = ({ siteTitle } : Title) => (
  <>
    <header style={{
      marginBottom: `1.45rem`,
      background: `teal`
    }}>
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{ color: `white` }}>
            {siteTitle}
          </Link>
          <GitHub />
        </h1>
      </div>
    </header>
    <div className="format">
      <Link to="/" className="headerLink">
        Home
      </Link>
      <Link to="/blog" className="headerLink">
        Blog
      </Link>
      <Link to="/resume" className="headerLink">
        Resume
      </Link>
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `merida.io`,
}

export default Header
