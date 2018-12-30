import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ValidateButtonContainer, StyledButton } from '../../utilis/button/nextButtonStyle'
import './confirmation.css'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 1.6em;
`

const TitleHelper = styled.p`
  text-align: center;
  font-weight: 100;
`

const Form = styled.form`
  margin-top: 50px;
`

class Confirmation extends Component {
  render() {
    const { handleSubmit, history } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Inscription réussie </Title>
        <Grid container item justify="center" >
          <Grid item xs={12} md={3}>
            <TitleHelper>
              Ton profil va être étudier dans les prochains jours.
              Nous te recontactons très prochainement.
            </TitleHelper>
          </Grid>
        </Grid>
        <div className="circle-loader-container">
          <div className="circle-loader load-complete">
            <div className="checkmark draw" style={{display: 'block'}}></div>
          </div>
        </div>
        <ValidateButtonContainer>
          <StyledButton onClick={() => history.replace('/instagram')}>
            <CustomFontAwesomeIcon icon={['fab', 'instagram']}/>
            Instagram
          </StyledButton>
        </ValidateButtonContainer>
      </Form>
    )
  }
}

export default withRouter(Confirmation);
