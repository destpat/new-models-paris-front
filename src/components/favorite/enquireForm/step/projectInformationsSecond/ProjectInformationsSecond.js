import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../../../register/utilis/renderTextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import validate from './validate'

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information de contact
*/

const Title = styled.span`
  font-size: 1em;
  font-weight: 300;
  margin: 15px;
`

class ProjectInformationSecond extends Component {
  render() {
    const { handleSubmit, previousStep } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={24}>
          <Grid container item justify="center">
            <Grid item md={8} xs={10}>
              <Field name="numberOfModels"
                id="number-of-models"
                label="Nombre de figurant(e)s *"
                type="number"
                style={{width:'100%'}}
                component={renderTextField}/>
            </Grid>
          </Grid>
          <Grid container item justify="center" style={{paddingTop: 0}}>
            <Grid item md={8} xs={10}>
              <Field name="dateOfProject"
                id="date-of-project"
                label="Date du projet *"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                style={{width:'100%'}}
                component={renderTextField}/>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid container item md={8} xs={10} spacing={24}>
                <Grid item md={6} xs={6}>
                <Field name="startTime"
                       id="start-time"
                       label="Heure de début *"
                       type="time"
                       InputLabelProps={{
                         shrink: true
                       }}
                       style={{width:'100%'}}
                       component={renderTextField}/>
                </Grid>
                <Grid item md={6} xs={6}>
                <Field name="endTime"
                       id="end-time"
                       label="Heure de fin *"
                       type="time"
                       InputLabelProps={{
                         shrink: true
                       }}
                       style={{width:'100%'}}
                       component={renderTextField}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item justify="center">
              <Title>
                Description du projet :
              </Title>
              <Grid container spacing={8} direction="column">
                <Grid container item spacing={0} justify="center">
                  <Grid item md={8} xs={10}>
                    <Field name="description"
                           id="description-field"
                           label="Scénario ... *"
                           multiline={true}
                           rows="4"
                           variant="outlined"
                           style={{width:'100%'}}
                           component={renderTextField}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        <Grid container item justify="center">
          <Button style={{width: 150, marginTop: 20}}
                  color="primary"
                  variant="outlined"
                  onClick={previousStep}>
            Précédent
          </Button>
          <Button style={{width: 150, marginTop: 20, marginLeft: 10}}
                  color="primary"
                  variant="outlined"
                  type="submit">
            Terminer
          </Button>
        </Grid>
      </form>
    )
  }
}

ProjectInformationSecond = reduxForm({
  form: 'projectInformationSecond',
  validate: validate,
  onSubmit: (values, dispatch, props) => {
    console.log('Envoie des données au serveur et validation');
  }
})(ProjectInformationSecond)

export default withRouter(ProjectInformationSecond);
