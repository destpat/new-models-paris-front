import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { ValidateButtonContainer, StyledButton } from '../utilis/button/nextButtonStyle'
import styled from 'styled-components'
import { withRouter } from 'react-router'

const TitleHelper = styled.p`
  font-weight: 200;
  text-align: center
`
const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 2em;
  margin-top: 20vh;
`

/*
*  @description Component
*  Accueil de l'utilisateur pour la création de sont profil
*/

class HomeRegistration extends Component {
  render() {
    const { history, match } = this.props
    return (
      <div>
        <Grid container item justify="center">
          <Grid item md={6} xs={11}>
            <Title> Become a model</Title>
            <TitleHelper>
              Tu souhaites devenir modèle ou continuer ta carrière en intégrant une agence ?
              <br/>
              <br/>
              Tu es bien tombé(e) car nous recherchons actuellement de nouveaux modèles !
            </TitleHelper>
          </Grid>
        </Grid>
        <ValidateButtonContainer>
          <StyledButton
            type='submit'
            onClick={() => history.push(`${match.url}/informations`)}>
            Inscription
          </StyledButton>
        </ValidateButtonContainer>
      </div>
    )
  }
}

export default withRouter(HomeRegistration);
