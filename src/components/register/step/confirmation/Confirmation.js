import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { Auth } from 'aws-amplify'

import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { createUser, setSignupLoading } from '../../registerAction'
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

/*
*  @description Component
*  Etape final du formulaire d'inscription
*/
class Confirmation extends Component {
  redirectToInstagram() {
    var destination = "https://www.instagram.com/newmodels.paris/"
    if( navigator.userAgent.match(/Android/i) ) {
      // use Android's redirect
      document.location = destination
    }
    else {
      // use iOS redirect
      window.location.replace( destination )
    }
  }

  async componentWillMount() {
    const { email, password, setSignupLoading, createUser} = this.props;
      setSignupLoading(true)
      try {
        let lowerCaseEmail = email.toLowerCase();

        // Inscription de l'utilisateur
        await Auth.signUp({
          username: lowerCaseEmail,
          password: password,
          attributes: {
            email: lowerCaseEmail
          }
        })

        // Login de l'utilisateur pour la récupération du token
        let user = await Auth.signIn(lowerCaseEmail, password)
        let userId = user.signInUserSession.idToken.payload.sub
        // Ajout des données de l'utilisateur en base de données
        createUser({
          ...this.props.createUserInformation,
          id: userId
        })

      } catch (error) {
        setSignupLoading(false)
      }
    }
  render() {
    const { handleSubmit, singnupLoading, singnupSuccess } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        {
          singnupLoading ?
          <TitleHelper>
            Envoi des informations en cours
          </TitleHelper>
          :
          <Title> Candidature envoyée </Title>
        }
        <Grid container item justify="center">
          <Grid item xs={12} md={3}>
            {
              singnupLoading ?
              ''
              :
              <TitleHelper>
                Ta candidature à bien été transmise, tu recevras une réponse d’ici 48 heures afin de savoir si elle à été validée
              </TitleHelper>
            }
          </Grid>
        </Grid>
        <div className="circle-loader-container">
          <div className={`circle-loader ${singnupLoading ? '' : 'load-complete'}`}>
            <div className="checkmark draw" style={{display: singnupSuccess ? 'block' : 'none'}}></div>
          </div>
        </div>
        <ValidateButtonContainer>
          <StyledButton onClick={() => this.redirectToInstagram()}>
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

const descriptionFormSelector = formValueSelector('descriptionForm')
const informationFormSelector = formValueSelector('informationForm')
const typeFormSelector = formValueSelector('typeForm')
const AdditionalInformationsFormSelector = formValueSelector('AdditionalInformationsForm')

const mapStateToProps = state => {
  let { day, month, year } = informationFormSelector(state, 'day', 'month', 'year')
  let extraTypeSeclection = typeFormSelector(state, 'shortFilms', 'photoShoot', 'musicVideo', 'fashionShow')
  let additionalSelection = AdditionalInformationsFormSelector(state, 'fashionMode', 'fitness', 'bikini', 'underwear', 'lingerie', 'vixen', 'nude')
  let height = descriptionFormSelector(state, 'height')
  let extraType = []
  let clothes = []

  for (let key in extraTypeSeclection) {
    if (extraTypeSeclection.hasOwnProperty(key) && extraTypeSeclection[key] === true) {
      extraType.push(key);
    }
  }

  for (let key in additionalSelection) {
    if (additionalSelection.hasOwnProperty(key) && additionalSelection[key] === true) {
      clothes.push(key);
    }
  }

  let birthdate = `${month}-${day}-${year}`

  return {
    email: contactFormSelector(state, 'email'),
    singnupLoading: state.register.singnupLoading,
    singnupSuccess: state.register.singnupSuccess,
    password: passwordFormSelector(state, 'password'),
    createUserInformation: {
      photos: state.register.photos,
      ...informationFormSelector(state, 'firstname', 'lastname', 'sex'),
      ...descriptionFormSelector(state, 'hairColor', 'eyesColor'),
      ...contactFormSelector(state, 'email', 'phone', 'city', 'postCode'),
      other: AdditionalInformationsFormSelector(state, 'other'),
      height: +height,
      birthdate,
      extraType,
      clothes
    }
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: (data) => dispatch(createUser(data)),
  setSignupLoading: (loading) => dispatch(setSignupLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
