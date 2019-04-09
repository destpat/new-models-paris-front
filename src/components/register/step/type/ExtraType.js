import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import styled from 'styled-components'
import NextButton from '../../utilis/button/NextButton'
import validate from './validate'
import renderCheckboxField from '../../utilis/renderCheckboxField'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import { setNextStep } from '../../registerAction'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1.6em;
`

const TitleHelper = styled.p`
  text-align: center;
  font-weight: 100;
`

const Form = styled.form`
  margin-top: 50px;
`

const styles = theme => ({
  root: {
    display: 'flex',
  }
});

/*
*  @description Component
*  formulaire pour la création d'utilisateur, selection des type de figuration
*  auquel l'utilisateur veux participer
*/
class ExtraType extends Component {
  render() {
    const { handleSubmit, submitFailed, valid } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Type de projets </Title>
        <Grid container item justify="center">
          <TitleHelper>
            Quels types de projets t’intéressent ?
          </TitleHelper>
        </Grid>
        <Grid container item justify="center">
          <FormControl error={submitFailed && !valid ? true : false}>
            <FormGroup>
              <Field name="photoShoot"
                     id="photo-shoot-field"
                     label="Shooting photo"
                     component={renderCheckboxField}/>

              <Field name="shortFilms"
                     id="short-film-field"
                     label="Court-métrage"
                     component={renderCheckboxField}/>

            </FormGroup>
          </FormControl>
          <FormControl error={submitFailed && !valid ? true : false}>
            <FormGroup>
              <Field name="musicVideo"
                     id="music-video-field"
                     label="Clip vidéo"
                     component={renderCheckboxField}/>
              <Field name="fashionShow"
                     id="fashion-show"
                     label="Défilé de mode"
                     component={renderCheckboxField}/>
            </FormGroup>
            <FormHelperText>Veuillez sélectionner au <br/> moins une case</FormHelperText>
          </FormControl>
         </Grid>
        <NextButton/>
      </Form>
    )
  }
}

ExtraType = reduxForm({
  form: 'typeForm',
  destroyOnUnmount: false,
  validate,
  onSubmit: (values, dispatch, props) => {
    dispatch(setNextStep(4))
    props.history.push(`additional-informations`)
  },
})(ExtraType)

export default withStyles(styles)(withRouter(ExtraType));
