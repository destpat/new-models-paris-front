import React, { Component } from 'react'
import { Route, Link, Switch} from "react-router-dom"
import { stack as Menu } from 'react-burger-menu'

import styled from 'styled-components'

import { withStyles } from '@material-ui/core/styles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import Register from './components/register/Register'
import Women from './components/women/Women'
import Profile from './components/profile/Profile'

import logo from './logo.png'
import  './burgerMenuStyle.css'

library.add(faInstagram, faTimesCircle)

const Header = styled.header`
  background-color: #fafafa;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 30px;
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

const MenuLinkResponsive = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  margin-bottom: 15px;
`;

const Nav = styled.nav`
  justify-content: flex-end;
  margin-right: 100px;
`;


const styles = theme => ({
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  burgerMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  }
});


class App extends Component {
  state = {
    menuOpen: false
  }

  handleStateChange (state) {
   this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.burgerMenu}>
          <Menu classNames={styles}
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/women">Women</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/new">New</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/men">Men</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/video">Video</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/candidatures">Become a model</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/login">Login</MenuLinkResponsive>
          </Menu>
        </div>
        <Header>
        <LogoLink to="/"><img src={logo} alt="logo new models paris" height="70"/></LogoLink>
        <div className={classes.menu}>
          <Nav>
            <MenuLink to="/women">Women</MenuLink>
            <MenuLink to="/new">New</MenuLink>
            <MenuLink to="/men">Men</MenuLink>
            <MenuLink to="/video">Video</MenuLink>
            <MenuLink to="/candidatures">Become a model</MenuLink>
            <MenuLink to="/login">Login</MenuLink>
          </Nav>
        </div>
        </Header>
        <Switch>
          <Route path="/candidatures" component={Register}/>
          <Route exact path="/women" component={Women}/>
          <Route path="/women/:id" component={Profile}/>
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
