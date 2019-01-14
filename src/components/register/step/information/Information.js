import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../utilis/renderTextField'
import renderSelectField from '../../utilis/renderSelectField'
import {getDay, getYears, month, sex} from './dateSelectValue'
import validate from './validate'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import NextButton from '../../utilis/button/NextButton'
import { setNextStep } from '../../registerAction'
import { withRouter } from 'react-router-dom'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`

const TitleHelper = styled.p`
  text-align: center;
  font-weight: 200;
`

const Form = styled.form`
  margin-top: 50px;
`

class Information extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
    <Form onSubmit={handleSubmit}>
      <Title> Informations </Title>
      <Grid container item justify="center" >
        <Grid item xs={12} md={3}>
          <TitleHelper> Afin de créer ton profil nous avons besoin de quelques informations </TitleHelper>
        </Grid>
      </Grid>
      <Grid container spacing={24} direction="column">
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
