import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

const TitleHelper = styled.p`
  margin-top: 20px;
  font-weight: 200;
  text-align: center;
  line-height: 1.8;
`

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1.6em;
  margin-top: 20vh;
`

/*
*  @description component
*  Future page de login
*/
class Login extends Component {
  render() {
    return (
      <div>
        <Grid container item justify="center">
          <Grid item md={6} xs={11}>
            <Title> Page en construction </Title>
            <TitleHelper>
              Cette page est actuellement en construction.
              <br/>
              Nous t’enverrons un e-mail quand ton espace personnel sera disponible.
            </TitleHelper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Login
