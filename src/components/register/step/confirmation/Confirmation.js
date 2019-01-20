import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formValueSelector } from 'redux-form'
import { Auth, Storage } from 'aws-amplify'

import axios from 'axios'

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
  async componentWillMount() {
    const { email, password, photos, setSignupLoading, createUser} = this.props;
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
        
        axios.defaults.headers.common['Authorization'] = user.signInUserSession.idToken.payload.jwtToken;
        // Création d'un tableau avec la key pour acceder au photo de l'utilisateur
        let userPhotos = []
        for (const photo of photos) {
          if (photo.preview) {
            try {
              let response = await axios({
                method: 'get',
                url: photo.preview,
                responseType: 'blob'
              })
              let updatePhoto = await Storage.put(`${Date.now().toString()}.jpg`, response.data, {
                level: 'protected',
                contentType: 'image/jpg'
              })
              userPhotos.push(updatePhoto)
            } catch (error) {
              console.log(error)
            }
          }
        }

        // Ajout des données de l'utilisateur en base de données
        createUser({
          ...this.props.createUserInformation,
          id: user.signInUserSession.idToken.payload.sub,
          photos: userPhotos
        })
      } catch (error) {
        setSignupLoading(false)
        console.log(error);
      }
  }
  render() {
    const { handleSubmit, history, singnupLoading, singnupSuccess } = this.props;
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
          <div className={`circle-loader ${singnupLoading ? '' : 'load-complete'}`}>
            <div className="checkmark draw" style={{display: singnupSuccess ? 'block' : 'none'}}></div>
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

const descriptionFormSelector = formValueSelector('descriptionForm')
const informationFormSelector = formValueSelector('informationForm')
const typeFormSelector = formValueSelector('typeForm')

const mapStateToProps = state => {
  let { day, month, year } = informationFormSelector(state, 'day', 'month', 'year')
  let extraTypeSeclection = typeFormSelector(state, 'musicVideo', 'photoShoot', 'underwear', 'vixen', 'nude')
  let height = descriptionFormSelector(state, 'height')
  let extraType = []

  for (var key in extraTypeSeclection) {
    if (extraTypeSeclection.hasOwnProperty(key) && extraTypeSeclection[key] === true) {
      extraType.push(key);
    }
  }

  let birthdate = `${month}-${day}-${year}`

  return {
    email: contactFormSelector(state, 'email'),
    singnupLoading: state.register.singnupLoading,
    singnupSuccess: state.register.singnupSuccess,
    photos: state.register.photos,
    password: passwordFormSelector(state, 'password'),
    createUserInformation: {
      ...informationFormSelector(state, 'firstname', 'lastname', 'sex'),
      ...descriptionFormSelector(state, 'hairColor', 'eyesColor'),
      ...contactFormSelector(state, 'email', 'phone', 'city', 'postCode'),
      height: +height,
      birthdate,
      extraType
    }
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: (data) => dispatch(createUser(data)),
  setSignupLoading: (loading) => dispatch(setSignupLoading(loading))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Confirmation));
