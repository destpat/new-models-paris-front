import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { withRouter } from 'react-router'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  margin-top: 20vh;
`

const TitleHelper = styled.p`
  text-align: center;
  width: 40%;
  font-weight: 100;
`

export const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #c13282 20%, #710c3c 90%);
  border-radius: 10px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
`;

const ValidateButtonContainer = styled.div`
  text-align: center;
  margin-top: 5%;
`

class HomeRegistration extends Component {
  render() {
    const { history, match } = this.props
    return (
      <div>
        <Title> Devenir modele </Title>
        <Grid container item justify="center" >
          <TitleHelper>
            Hey bienvenue dans notre agence de modele, nous allons créer ton profile
            afin que celui ci puisse être consulter par les productions
          </TitleHelper>
        </Grid>
        <ValidateButtonContainer>
          <StyledButton
            type='submit'
            onClick={() => history.push(`${match.url}information`)}>
            C'est partie
          </StyledButton>
        </ValidateButtonContainer>
      </div>
    )
  }
}

export default withRouter(HomeRegistration);
