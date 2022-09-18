import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import devleLogo from "../images/Devle.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `28px`,
        fontWeight: "bold",
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <div
      style={{
        margin: 0,
        backgroundColor: "#513252",
        padding: "20px",
        borderRadius: 5,
      }}
    >
      <img alt="Devle logo" height={20} style={{ margin: 0 }} src={devleLogo} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
