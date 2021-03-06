import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import gatsbyPng from '../images/gatsby-icon.png';

const Header = ({ siteTitle, author }) => {

  return (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={gatsbyPng} width="100" alt="gatsby png"/>
          <h1>{author}</h1>
          <h1>{siteTitle}</h1>
        </Link>
      </h1>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
