import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';
import { HoverText, UserNameContainer, UserName, Photo, PhotoContainer } from './style'

/*
*  @description Component
*  Affichage en grille des profils utilisateurs
*/
class UsersGrid extends Component {
  render() {
    const { size: { width }, publicUsers} = this.props;
    return (
      <StackGrid gutterWidth={width <= 480 ? 10 : 40}
                 gutterHeight={5}
                 columnWidth={width <= 480 ? 174 : 240}>
        {
          publicUsers.map((publicUser, index) => {
            return (
              <div key={index}>
                <PhotoContainer onClick={() =>  this.props.history.push(`${this.props.match.url}/${publicUser.id}`)}>
                  <Photo imageUrl={publicUser.photo} alt="models"/>
                  <HoverText>
                    {publicUser.firstname}
                    <br/>
                    <br/>
                    Voir le portfolio
                  </HoverText>
                </PhotoContainer>
                <UserNameContainer>
                  <UserName>{publicUser.firstname}</UserName>
                </UserNameContainer>
              </div>
            )
          })
        }
       </StackGrid>
    )
  }
}

const mapStateToProps = state => {
  return {
    publicUsers: state.users.publicUsers
  }
}

export default withRouter(sizeMe()(connect(mapStateToProps)(UsersGrid)));
