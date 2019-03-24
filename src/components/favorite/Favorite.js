import React, { Component } from 'react'
import { connect }  from 'react-redux'
import UsersGrid from '../users/grid/UsersGrid'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styled, { keyframes } from 'styled-components'
import BookingForm from './bookingForm/BookingForm'

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
const FavoriteUsersContainer = styled(Grid)`
  height: calc(100vh - 200px);
  overflow: scroll;
`

const Section = styled.section`
  position: relative;
  width: 100%;
  left: 3%;
  @media (max-width: 480px) {
    left: 6%;
  }
`

const TitleFavorite = styled.h1`
  font-size: 2.3em;
  margin-bottom: ${props => props.enquireMode ? '10px': '0px'};
  margin-top: 10px;
  font-weight: 200;
`

const EnquireButton = styled(Button)`
  position: absolute;
  right: 150px;
  top: 20px;
  font-size: 0.9em;
`
/*
*  @description Component
*  Affiche les utilisateurs qui sont choisie comme favoris
*/
class Favorite extends Component {
  state = {
    enquireMode: false
  }

  handleEnquireMode = () => {
    this.setState({enquireMode: !this.state.enquireMode})
  }
  render() {
    const { enquireMode } = this.state
    const { favoriteUsers } = this.props
    return (
      <div>
        {
          favoriteUsers.length < 1 ?
          <div>
            <Title> Vous n'avez pas encore de favoris </Title>
            <Grid container item justify="center">
              <Grid item md={6} xs={11}>
                <TitleHelper>
                  Pour ajouter des favoris cliquer sur le coeur à coté des modeles,
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
          <div>
            <Section>
              <TitleFavorite enquireMode={enquireMode}>Vos models favoris</TitleFavorite>
              {
                !enquireMode ?
                  <EnquireButton color="primary" onClick={this.handleEnquireMode}>Demande de booking</EnquireButton>
                :
                ''
              }
              <EnquireButton color="primary" onClick={this.handleEnquireMode}>Demande de booking</EnquireButton>
            </Section>
            <Grid container item justify="center">
              <FavoriteUsersContainer item md={enquireMode ? 5 : 12} xs={12}>
                <UsersGrid users={favoriteUsers}/>
              </FavoriteUsersContainer>
                <Grid item md={6} style={{display: enquireMode ? 'block' : 'none'}}>
                  <BookingForm />
                </Grid>
            </Grid>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  favoriteUsers: state.favorites.favoriteUsers
})

export default connect(mapStateToProps)(Favorite);
