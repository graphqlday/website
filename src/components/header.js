import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import topBar from "../pages/static/pink-topbar.svg"
import logo from "../pages/static/logo-graphql.svg"

const TopBar = styled.div`
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  height: 13px;
  background: url(${topBar}) no-repeat center center;
  background-size: cover;
`

const Nav = styled.header`
  padding: 24px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 670px) {
    padding: 16px 32px;
  }
`

const NavLinks = styled.div`
  display: block;

  .navLink {
    text-decoration: none;
    color: #000000;
    margin-right: 2em;
    display: inline-block;

    @media (max-width: 520px) {
      font-size: 1em;
      margin-right: 0.5em;
    }
  }
`

const Logo = styled(Link)`
  text-decoration: none;
  color: #000000;
  display: flex;
  align-items: center;
  margin-bottom: 0;

  .logo {
    height: 35px;
    width: 35px;
    display: inline-block;
  }

  h3 {
    display: inline-block;
    margin-left: 0.5em;

    @media (max-width: 520px) {
      font-size: 1em;
    }
  }
`

const Header = ({ children }) => (
  <>
    <TopBar />
    <Nav>
      <Logo to="/" alt="GraphQL Conf Bodensee Page">
        <img src={logo} alt="GraphQL Conf Bodensee Logo" className="logo" />
        <h3>GraphQL Day</h3>
      </Logo>
      <NavLinks align="right">
        <Link to="/#upcoming-events" alt="" className="navLink">
          Events
        </Link>
        {false && <a
          href="https://www.graphqlconf.org"
          alt=""
          target="_blank"
          rel="noopener noreferrer"
          className="navLink"
        >
          GraphQL Conf{" "}
          <span role="img" aria-label="tada emoji">
            🎉
          </span>
        </a>}
        {children}
      </NavLinks>
    </Nav>
  </>
)

export default Header
