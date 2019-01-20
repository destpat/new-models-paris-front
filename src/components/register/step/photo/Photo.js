import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import RenderDropzoneField from './RenderDropzoneField'
import Grid from '@material-ui/core/Grid'

import styled from 'styled-components'
import NextButton from '../../utilis/button/NextButton'
import { withRouter } from 'react-router-dom'
import { setNextStep } from '../../registerAction'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`

const TitleHelper = styled.p`
  text-align: center;
  font-weight: 100;
  margin: 0;
`

const SubTitle = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 0.8em;
  margin-top: 2px;
`

const Form = styled.form`
  margin-top: 50px;
`

const PhotoContainer = styled.img`
  height: 30vh;
  object-fit: scale-down;
  margin-bottom: 20px;
`

const FakePhoto = styled.div`
  height: 30vh;
  width: 300px;
  margin-bottom: 20px;
`

/*
*  @description Component
*  Ajout des photo
*/

class Contact extends Component {
  render() {
    const { handleSubmit, photos, photoFraming, submitSucceeded } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Mes photos </Title>
        <Grid container item justify="center" >
          <TitleHelper>
            {"Envoie nous tes plus jolies photos"}
          </TitleHelper>
        </Grid>
        <Grid container item justify="center" >
          <SubTitle>
            De préférence de shooting si tu en as
          </SubTitle>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {
            !!photos.find(photo => photo.photoFraming === photoFraming).preview ?
              <PhotoContainer src={photos.find(photo => photo.photoFraming === photoFraming).preview} alt="models"/>
            :
            <FakePhoto></FakePhoto>
          }
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={32}>
          <Grid item>
            <RenderDropzoneField photoFraming="photo1" label="Portrait" submitSucceeded={submitSucceeded}/>
          </Grid>
          <Grid item>
            <RenderDropzoneField photoFraming="photo2" label="Plain-pied" submitSucceeded={submitSucceeded}/>
          </Grid>
          <Grid item>
            <RenderDropzoneField photoFraming="photo3" label="Américain" submitSucceeded={submitSucceeded}/>
          </Grid>
        </Grid>
      <NextButton/>
    </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.register.photos,
    photoFraming: state.register.currentPhoto
  }
}

Contact = reduxForm({
  form: 'photoForm',
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    // Vérifie que toute les photos on bien étais ajouté
    if (props.photos.every((photo) => photo.preview)) {
      dispatch(setNextStep(5))
      props.history.push(`password`)
    }
  },
})(Contact)

export default connect(mapStateToProps)(withRouter(Contact));
