import React, { Component } from 'react'
import { connect }  from 'react-redux'
import UsersGrid from '../users/grid/UsersGrid'
import Grid from '@material-ui/core/Grid'
import EnquireForm from './enquireForm/EnquireForm'
import MobileEnquireForm from './enquireForm/MobileEnquireForm'
import sizeMe from 'react-sizeme'
import {
  Title,
  EnquireTitle,
  TitleHelper,
  ButtonOpenBookingForm,
  FavoriteBeat,
  FavoriteContainer,
  FavoriteUsersContainer,
  Section,
  TitleFavorite,
  EnquireButton,
  MobileEnquireFormContainer
} from './style'

/*
*  @description Component
*  Affiche les utilisateurs qui sont choisis comme favoris
*/
class Favorite extends Component {
  state = {
    enquireMode: false,
    mobileEnquireFormOpen: false
  }

  handleEnquireMode = () => {
    this.setState({enquireMode: !this.state.enquireMode})
  }

  handleCloseMobileEnquireForm = () => {
    this.setState({mobileEnquireFormOpen: false})
  }

  handleOpenMobileEnquireForm = () => {
    this.setState({mobileEnquireFormOpen: true})
  }

  componentDidUpdate() {
    if (this.props.size.width < 959 && this.state.enquireMode) {
      this.setState({enquireMode: false})
    }
  }

  render() {
    const { enquireMode, mobileEnquireFormOpen } = this.state
    const { favoriteUsers, size: { width } } = this.props
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
              <TitleFavorite enquireMode={enquireMode}>
                Vos models favoris
              </TitleFavorite>
              {
                width > 959 ?
                <EnquireButton
                  color="primary"
                  onClick={this.handleEnquireMode}>
                  {
                    enquireMode ? 'Fermer' : 'Demande de booking'
                  }
                </EnquireButton>
                : ''
              }
            </Section>

            <Grid width={width} container item justify="center">
              <FavoriteUsersContainer item width={width} md={enquireMode ? 5 : 12} xs={12}>
                <UsersGrid users={favoriteUsers}/>
              </FavoriteUsersContainer>

              <Grid item md={6} style={{display: enquireMode ? 'block' : 'none'}}>
                <EnquireTitle>
                  Demande de booking
                </EnquireTitle>
                <EnquireForm />
              </Grid>

            </Grid>

            <MobileEnquireFormContainer>
              <MobileEnquireForm
                open={this.state.mobileEnquireFormOpen}
                handleCloseMobileEnquireForm={this.handleCloseMobileEnquireForm}/>
              {
                mobileEnquireFormOpen ?
                ''
                :
                <ButtonOpenBookingForm
                  variant="contained"
                  color="primary"
                  onClick={mobileEnquireFormOpen ? this.handleCloseMobileEnquireForm : this.handleOpenMobileEnquireForm}>
                  Demande de booking
                </ButtonOpenBookingForm>
              }
            </MobileEnquireFormContainer>

          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  favoriteUsers: state.favorites.favoriteUsers
})

export default sizeMe()(connect(mapStateToProps)(Favorite));
