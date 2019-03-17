import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { ValidateButtonContainer, StyledButton } from '../utilis/button/nextButtonStyle'
import styled from 'styled-components'
import { withRouter } from 'react-router'

const Title = styled.h2`
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

/*
*  @description Component
*  Accueil de l'utilisateur pour la création de sont profil
*/

class HomeRegistration extends Component {
  render() {
    const { history, match } = this.props
    return (
      <div>
        <Title> bienvenue </Title>
        <Grid container item justify="center">
          <Grid item md={6} xs={11}>
            <TitleHelper>
              Nous allons remplir ton formulaire d'inscription ensemble afin que ton profil soit validé puis publié sur notre site.
            <br/>
            <br/>
              En t'inscrivant, tu sera également informé(e) des dernières news et castings.
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
