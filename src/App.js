import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import { Route, Link, Switch} from "react-router-dom";
import Register from './components/register/Register';

const Header = styled.header`
  background-color: #fafafa;
  border-bottom: 1px solid #eeeeee;
  height: 80px;
  display: flex;
  align-items: center;
`
const LogoLink = styled(Link)`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: auto;
`

const MenuLink = styled(Link)`
  color: #444444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8em;
  margin-right: 35px;
`;

const Nav = styled.nav`
  justify-content: flex-end;
  margin-right: 100px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <LogoLink to="/"><img src={logo} alt="logo new models paris" height="70"/></LogoLink>
          <Nav>
            <MenuLink to="/women">Women</MenuLink>
            <MenuLink to="/new">New</MenuLink>
            <MenuLink to="/men">Men</MenuLink>
            <MenuLink to="/video">Video</MenuLink>
            <MenuLink to="/candidatures">Become a model</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
          </Nav>
        </Header>
        <Switch>
          <Route path="/candidatures" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;
