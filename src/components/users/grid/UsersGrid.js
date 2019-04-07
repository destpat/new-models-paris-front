import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import StackGrid from "react-stack-grid"
import sizeMe from 'react-sizeme'
import { HoverText,
         UserNameContainer,
         UserName,
         Photo,
         PhotoContainer,
         StackGridContainer,
         getWidth,
         getGutterWidth
       } from './style'
import { setFavoriteUser, removeFavoriteUser } from '../../favorite/favoriteAction'
import Favorite from '../utilis/Favorite'
/*
 *  @description Component
 *  Affichage en grille des profils utilisateurs
*/
class UsersGrid extends Component {
  render() {
    const { size: { width }, users, type, favoriteUsers } = this.props
    return (
      <StackGridContainer>
        <StackGrid gutterWidth={getGutterWidth(width, type)}
                   gutterHeight={5}
                   columnWidth={getWidth(width)}>
          {
            users.map((user, index) => {
              let { id, firstname, photos } = user
              return (
                <div key={index}>
                  <PhotoContainer onClick={() =>  this.props.history.push(`profile/${id}`)}>
                    <Photo imageUrl={photos[0].url} alt="models"/>
                    <HoverText>
                      <p> {firstname} </p>
                      <br/>
                      <br/>
                      Voir le portfolio
                    </HoverText>
                  </PhotoContainer>
                  <UserNameContainer>
                    <Favorite user={user} id={id} favoriteUsers={favoriteUsers}/>
                    <UserName>
                      {firstname}
                    </UserName>
                  </UserNameContainer>
                </div>
              )
            })
          }
        </StackGrid>
      </StackGridContainer>
    )
  }
}

const mapStateToProps = state => ({
  favoriteUsers: state.favorites.favoriteUsers
})

const mapDispatchToProps = dispatch => ({
  setFavoriteUser: (user) =>
    dispatch(setFavoriteUser(user)),
  removeFavoriteUser: (id) =>
    dispatch(removeFavoriteUser(id))
})

export default withRouter(sizeMe()(connect(mapStateToProps, mapDispatchToProps)(UsersGrid)));
