import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';

import logo from '../../logo.png';

const Nav = styled('nav')`
  background: rgb(80, 103, 196);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

const LogoContainer = styled('div')`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled('img')`
  height: 100%;
  object-fit: cover;
`;

const Navbar__Link = css`
  color: white;
  border: 1px solid rgb(80, 103, 196);
  border-radius: 4px;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  padding: 5px;
  margin-left: 5px;
  &:hover {
    color: rgb(80, 103, 196);
    border: 1px solid white;
    background: white;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <LogoContainer>
          <Logo src={logo} />
          <div
            className={css`
              font-weight: bold;
            `}
          >
            FireChat
          </div>
        </LogoContainer>

        <div>
          <Link className={Navbar__Link} to="/chat">
            Login
          </Link>
          <Link className={Navbar__Link} to="/chat">
            Chat
          </Link>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
