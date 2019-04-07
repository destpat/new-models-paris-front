import React, { Component } from 'react'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form'
import RenderDropzoneField from './RenderDropzoneField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

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
  margin-top: 5px;
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
*  Ajout des photos
*/

class Photos extends Component {
  state = {
    addMorePhotos: false
  }
  render() {
    const { addMorePhotos } = this.state;
    const { handleSubmit, photos, photoFraming, submitSucceeded } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Mes photos </Title>
        <Grid container item justify="center" >
          <TitleHelper>
            Merci de nous envoyer quelques photos de toi
          </TitleHelper>
        </Grid>
        <Grid container item justify="center" >
          <SubTitle>
            ( Nous acceptons uniquement les photos professionnelles )
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
            <RenderDropzoneField photoFraming="photo1" label="Portrait" required={true} submitSucceeded={submitSucceeded}/>
          </Grid>
          <Grid item>
            <RenderDropzoneField photoFraming="photo2" label="Plain-pied" required={true} submitSucceeded={submitSucceeded}/>
          </Grid>
          <Grid item>
            <RenderDropzoneField photoFraming="photo3" label="Américain" required={true} submitSucceeded={submitSucceeded}/>
          </Grid>
          <Grid item hidden={!addMorePhotos}>
            <RenderDropzoneField photoFraming="photoSup1" label="( Facultatif )" submitSucceeded={submitSucceeded}/>
          </Grid>
          <Grid item hidden={!addMorePhotos}>
            <RenderDropzoneField photoFraming="photoSup2" label="( Facultatif )" submitSucceeded={submitSucceeded}/>
          </Grid>
          <Grid item hidden={!addMorePhotos}>
            <RenderDropzoneField photoFraming="photoSup3" label="( Facultatif )" submitSucceeded={submitSucceeded}/>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          onClick={() => this.setState({addMorePhotos: true})}
          spacing={24}>
          {
            !addMorePhotos ?
              <Button color="primary">
                Ajouter plus de photos
              </Button>
            :
            ''
          }
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

Photos = reduxForm({
  form: 'photoForm',
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    // Vérifie que toute les photos on bien étais ajouté
    const { photos } = props;
    let allowNextStep = photos[0].preview && photos[1].preview && photos[2].preview
    if (!!allowNextStep) {
      dispatch(setNextStep(6))
      props.history.push(`password`)
    }
  },
})(Photos)

export default connect(mapStateToProps)(withRouter(Photos));
