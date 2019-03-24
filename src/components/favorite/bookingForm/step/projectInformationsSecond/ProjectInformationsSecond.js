import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../../../register/utilis/renderTextField'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information de contact
*/

const Title = styled.span`
  font-size: 1em;
  font-weight: 300;
  margin: 15px;
`

class ProjectInformationFirst extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={32}>
        <Grid container item justify="center">
          <Grid item md={8}>
            <Field name="numberOfModels"
              id="number-of-models"
              label="Nombre de figurant(e)s"
              type="number"
              style={{width:'100%'}}
              component={renderTextField}/>
          </Grid>
        </Grid>
        <Grid container item justify="center" style={{paddingTop: 0}}>
          <Grid item md={8}>
            <Field name="dateOfProject"
              id="date-of-project"
              label="Date du projet"
              type="date"
              InputLabelProps={{
                shrink: true
              }}
              style={{width:'100%'}}
              component={renderTextField}/>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid container item md={8} spacing={24}>
              <Grid item md={6}>
              <Field name="startTime"
                     id="start-time"
                     label="Heure de début"
                     type="time"
                     InputLabelProps={{
                       shrink: true
                     }}
                     style={{width:'100%'}}
                     component={renderTextField}/>
              </Grid>
              <Grid item md={6}>
              <Field name="endTime"
                     id="end-time"
                     label="Heure de fin"
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
                <Grid item md={8}>
                  <Field name="other"
                         id="other-field"
                         label="Scénario ..."
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
      </form>
    )
  }
}

ProjectInformationFirst = reduxForm({
  form: 'projectInformationFirst',
  onSubmit: (values, dispatch, props) => {
    console.log('hello');
  }
})(ProjectInformationFirst)

export default withRouter(ProjectInformationFirst);
