import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import sizeMe from 'react-sizeme'
import { HoverText,
         UserNameContainer,
         UserName,
         Photo,
         PhotoContainer,
         getWidth,
         getGutterWidth
       } from './style'
import { setFavoriteUser, removeFavoriteUser } from '../../favorite/favoriteAction'
import Favorite from '../utilis/Favorite'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

const Container = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

const Profile = styled.div`
  width: ${props => getWidth(props.width)}px;
  margin: 0px ${props => getGutterWidth(props.width, props.type)}px;
`

/*
 *  @description Component
 *  Affichage en grille des profils utilisateurs
*/
class UsersGrid extends Component {
  render() {
    const { size: { width }, users, type, favoriteUsers } = this.props
    return (
      <Container>
        {
          users.map((user, index) => {
            let { id, firstname, photos } = user
            return (
              <Profile key={index} width={width} type={type}>
                <PhotoContainer onClick={() => this.props.history.push(`profile/${id}`)}>
                  {
                    type === 'search' ?
                    <Photo imageUrl={photos[0].url} alt="models"/>
                    :
                    <LazyLoad height={200}>
                      <Photo imageUrl={photos[0].url} alt="models"/>
                    </LazyLoad>
                  }
                  <HoverText>
                    <p> {firstname} </p>
                    Voir le portfolio
                  </HoverText>
                </PhotoContainer>
                <UserNameContainer>
                  <Favorite user={user} id={id} favoriteUsers={favoriteUsers}/>
                  <UserName>
                    {firstname}
                  </UserName>
                </UserNameContainer>
              </Profile>
            )
          })
        }
      </Container>
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
