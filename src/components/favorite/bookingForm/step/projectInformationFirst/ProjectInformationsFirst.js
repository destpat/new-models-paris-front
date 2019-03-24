import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderCheckboxField from '../../../../register/utilis/renderCheckboxField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import validate from './validate'

const Title = styled.span`
  font-size: 1em;
  font-weight: 300;
  margin: 15px;
`

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information de contact
*/

class ProjectInformationFirst extends Component {
  render() {
    const { handleSubmit, submitFailed, valid, previousStep } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid container item justify="center">
          <Title>
            Quelle est le type de projet ?
          </Title>
        </Grid>
        <Grid container item justify="center">
          <FormControl>
            <FormGroup>
              <Field name="photoShoot"
                     id="photo-shoot-field"
                     label="Shootings photos"
                     component={renderCheckboxField}/>
              <Field name="shortFilms"
                     id="short-film-field"
                     label="Courts métrage"
                     component={renderCheckboxField}/>
              </FormGroup>
            </FormControl>
            <FormControl>
              <FormGroup>
                <Field name="musicVideo"
                       id="music-video-field"
                       label="Clips vidéos"
                       component={renderCheckboxField}/>
                <Field name="fashionShow"
                       id="fashion-show"
                       label="Défilé de mode"
                       component={renderCheckboxField}/>
              </FormGroup>
            </FormControl>
        </Grid>
        <Grid container item justify="center">
          <Title>
            Quelle tenue devrons porter les figurant(e)s ?
          </Title>
        </Grid>
        <Grid container item justify="center">
          <FormControl>
            <FormGroup>
              <Field name="fashionMode"
                     id="fashion-mode-outfit"
                     label="Fashion / Mode"
                     component={renderCheckboxField}/>

              <Field name="fitness"
                     id="fitness"
                     label="Fitness"
                     component={renderCheckboxField}/>
             <Field name="underwear"
                    id="underwear"
                    label="Lingerie / Sous-vêtements"
                    component={renderCheckboxField}/>

            </FormGroup>
          </FormControl>
          <FormControl error={submitFailed && !valid ? true : false}>
            <FormGroup>
              <Field name="bikini"
                     id="bikini"
                     label="Bikini"
                     component={renderCheckboxField}/>
              <Field name="vixen"
                     id="vixen"
                     label="Vixen"
                     component={renderCheckboxField}/>
             <Field name="nude"
                    id="nude"
                    label="Nu"
                    component={renderCheckboxField}/>
            </FormGroup>
            <FormHelperText>Veuillez sélectioner au <br/> moins une case</FormHelperText>
          </FormControl>
        </Grid>
        <Grid container item justify="center">
          <Button style={{width: 150, marginTop: 20}}
                  color="primary"
                  variant="outlined"
                  onClick={previousStep}>
            Précédent
          </Button>
          <Button style={{width: 150, marginTop: 20, marginLeft: 10}} color="primary" variant="outlined" type="submit">
            Suivant
          </Button>
        </Grid>
      </form>
    )
  }
}

ProjectInformationFirst = reduxForm({
  form: 'projectInformationFirst',
  validate: validate,
  onSubmit: (values, dispatch, props) => {
    props.nextStep()
  }
})(ProjectInformationFirst)

export default withRouter(ProjectInformationFirst);
