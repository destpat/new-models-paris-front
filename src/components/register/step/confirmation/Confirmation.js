import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { Auth } from 'aws-amplify';

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
  state = {
    singnUpSuccess: false,
    singnUpFailure: false,
    singnUpLoading: true
  }

  componentWillMount() {
    const { email, password } = this.props;
      this.setState({
        singnUpLoading: true
      })
      Auth.signUp({
        username: email.toLowerCase(),
        password: password,
        attributes: {
            email: email.toLowerCase()
        }
    })
    .then(() => {
      this.setState({
        singnUpSuccess: true,
        singnUpLoading: false
      })
    })
    .catch((err) => {
      this.setState({
        singnUpFailure: true,
        singnUpLoading: false
      })
    });
  }
  render() {
    const { handleSubmit, history } = this.props;
    const { singnUpSuccess, singnUpLoading } = this.state;
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
          <div className={`circle-loader ${singnUpLoading ? '' : 'load-complete'}`}>
            <div className="checkmark draw" style={{display: singnUpSuccess ? 'block' : 'none'}}></div>
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

const contactFormSelector = formValueSelector('contactForm')
const passwordFormSelector = formValueSelector('passwordForm')

const mapStateToProps = state => {
  return {
    email: contactFormSelector(state, 'email'),
    password: passwordFormSelector(state, 'password')
  }
}

export default withRouter(connect(mapStateToProps)(Confirmation));
