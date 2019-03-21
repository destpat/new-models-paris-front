import React, { Component } from 'react'
import { connect }  from 'react-redux'
import UsersGrid from '../users/grid/UsersGrid'
import Grid from '@material-ui/core/Grid'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styled, { keyframes } from 'styled-components';

const Title = styled.h4`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 100;
  margin-top: 20vh;
`

const TitleHelper = styled.p`
  font-weight: 200;
  text-align: center
`

const Beat = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

const FavoriteBeat = styled(FavoriteIcon)`
  animation: ${Beat} 1.2s infinite;
  width: 40px;
  height: 40px;
  color: #ac99ff
`

const FavoriteContainer = styled.div`
  text-align: center;
`

/*
*  @description Component
*  Affiche les utilisateurs qui sont choisie comme favorie
*/
class Favorite extends Component {
  render() {
    const { favoriteUsers } = this.props
    return (
      <div>
        {
          favoriteUsers.length < 1 ?
          <div>
            <Title> Vous n'avez pas encore de favorie </Title>
            <Grid container item justify="center">
              <Grid item md={6} xs={11}>
                <TitleHelper>
                  Pour ajouter des favories cliquer sur le coeur à coté des modeles,
                  <br/>
                  cela vous permettra de faire une demande de renseignement
                </TitleHelper>
                <FavoriteContainer>
                  <FavoriteBeat/>
                </FavoriteContainer>
              </Grid>
            </Grid>
          </div>
          :
          <UsersGrid users={favoriteUsers}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  favoriteUsers: state.favorites.favoriteUsers
})

export default connect(mapStateToProps)(Favorite);
