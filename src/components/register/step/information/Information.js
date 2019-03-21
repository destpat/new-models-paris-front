import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import renderTextField from '../../utilis/renderTextField'
import renderSelectField from '../../utilis/renderSelectField'
import {getDay, getYears, month, sex} from './dateSelectValue'
import validate from './validate'
import styled from 'styled-components'
import NextButton from '../../utilis/button/NextButton'
import { setNextStep } from '../../registerAction'

import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 100;
`

const Form = styled.form`
  margin-top: 50px;
`

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information basique,
*  sur l'utilisateur
*/

class Information extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
    <Form onSubmit={handleSubmit}>
      <Title> Informations personelles</Title>
      <Grid container spacing={8} direction="column">
        <Grid container item spacing={0} justify="center" >
          <Grid item xs={11} md={3}>
            <Field name="firstname"
                   id="firstname-field"
                   label="Prénom"
                   style={{width:'100%'}}
                   component={renderTextField}/>
          </Grid>
        </Grid>
        <Grid container item spacing={0} justify="center" >
          <Grid item xs={11} md={3}>
            <Field
              name="lastname"
              id="lastname-field"
              label="Nom"
              style={{width:'100%'}}
              component={renderTextField}
            />
          </Grid>
        </Grid>
        <Grid container item spacing={0} justify="center" >
          <Grid item xs={11} md={3}>
            <Field
              style={{width: '100%'}}
              name="sex"
              id="sex-field"
              label="Sexe"
              datas={sex}
              component={renderSelectField}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={8} direction="column" style={{marginTop: 10}}>
        <Grid container justify="center">
          <Grid container item md={3} xs={11} justify="space-between">
              <Grid item xs={3} md={3}>
              <Field
                style={{minWidth: '100%'}}
                name="day"
                id="day-field"
                label="Jour"
                datas={getDay()}
                component={renderSelectField}/>
              </Grid>
              <Grid item xs={3} md={3}>
                <Field
                  style={{minWidth: '100%'}}
                  name="month"
                  id="month-field"
                  label="Mois"
                  datas={month}
                  component={renderSelectField}
                  />
              </Grid>
              <Grid item xs={3} md={3}>
                <Field
                  style={{minWidth: '100%'}}
                  name="year"
                  id="year-field"
                  label="Année"
                  datas={getYears()}
                  component={renderSelectField}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      <NextButton/>
    </Form>
    )
  }
}

Information = reduxForm({
  form: 'informationForm',
  validate,
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    dispatch(setNextStep(1))
    props.history.push(`contact`)
  },
})(Information)

export default withRouter(Information);
