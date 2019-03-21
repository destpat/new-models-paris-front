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
         getGutterWidth,
         FavoriteBorderCustom,
         FavoriteCustom
       } from './style'
import { setFavoriteUser, removeFavoriteUser } from '../../favorite/favoriteAction'

/*
 *  @description Component
 *  Affichage en grille des profils utilisateurs
*/
class UsersGrid extends Component {
  checkIfUserIsFavorite = (id) => {
    const { favoriteUsers } = this.props
    return favoriteUsers[favoriteUsers.findIndex(user => user.id === id)]
  }
  render() {
    const { size: { width }, users, setFavoriteUser, removeFavoriteUser, type } = this.props
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
                      {firstname}
                      <br/>
                      <br/>
                      Voir le portfolio
                    </HoverText>
                  </PhotoContainer>
                  <UserNameContainer>
                    {
                      this.checkIfUserIsFavorite(id) ?
                      <FavoriteCustom onClick={() => { removeFavoriteUser(id) }}/>
                      :
                      <FavoriteBorderCustom onClick={() => { setFavoriteUser(user) }}/>
                    }
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
