import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { Route, Link, Switch, NavLink} from "react-router-dom"
import { slide as Menu } from 'react-burger-menu'

import styled from 'styled-components'

import { withStyles } from '@material-ui/core/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


import Register from './components/register/Register'
import Women from './components/women/Women'
import Men from './components/men/Men'
import Search from './components/search/Search'
import Profile from './components/users/profile/Profile'
import Favorite from './components/favorite/Favorite'
import Home from './components/home/Home'
import Login from './components/login/Login'

import logo from './logo.png'
import  './burgerMenuStyle.css'


// Google analytics
if (process.env.REACT_APP_STAGE === 'prod') {
  ReactGA.initialize('UA-138144375-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

library.add(faInstagram, faTimesCircle, faFacebookF)


const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #eeeeee;
  height: 95px;
  @media (max-width: 480px) {
    height: 66px;
  }
  display: flex;
  align-items: center;
`

const LogoLink = styled(Link)`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: auto;
`

const MenuLink = styled(NavLink)`
  color: #444444;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.7em;
  margin-right: 25px;
  &:hover {
    color: #ac99ff
    transition: 0.3s;
  }

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

const Logo = styled.img`
  height: 85px;
  @media (max-width: 480px) {
    height: 65px;
  }
`

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
  },
  icon: {
    position: 'relative',
    top: 5,
    left: 5,
    width: 20,
    height: 20,
    color: '#ac99ff'
  },
  iconBurger: {
    position: 'relative',
    top: 5,
    left: 5,
    width: 25,
    height: 25,
    color: '#ac99ff'
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
      <div>
        <div className={classes.burgerMenu}>
          <Menu classNames={styles}
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/women">Femmes</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/men">Hommes</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/search">Rechercher</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/candidatures">Devenir modèle</MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/login"> Login </MenuLinkResponsive>
            <br/>
            <MenuLinkResponsive onClick={() => this.closeMenu()} to="/favorites">
              Mes favoris <FavoriteIcon className={classes.iconBurger}/>
            </MenuLinkResponsive>
          </Menu>
        </div>
        <Header>
        <LogoLink to="/">
          <Logo src={logo} alt="logo New Models Paris"/>
        </LogoLink>
        <div className={classes.menu}>
          <Nav>
            <MenuLink to="/women" activeClassName="selected-nav">Femmes</MenuLink>
            <MenuLink to="/men" activeClassName="selected-nav">Hommes</MenuLink>
            <MenuLink to="/search" activeClassName="selected-nav">Rechercher</MenuLink>
            <MenuLink to="/candidatures" activeClassName="selected-nav">Devenir modèle</MenuLink>
            <MenuLink to="/login" activeClassName="selected-nav">Login</MenuLink>
            <MenuLink to="/favorites" activeClassName="selected-nav">
              Mes favoris <FavoriteIcon className={classes.icon}/>
            </MenuLink>
          </Nav>
        </div>
        </Header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/candidatures" component={Register}/>
          <Route exact path="/women" component={Women}/>
          <Route exact path="/men" component={Men}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/favorites" component={Favorite}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/profile/:id" component={Profile}/>
        </Switch>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(App);
