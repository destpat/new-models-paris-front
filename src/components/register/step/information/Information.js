import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../utilis/renderTextField'
import renderSelectField from '../../utilis/renderSelectField'
import {getDay, getYears, month} from './dateSelectValue'
import validate from './validate'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import NextButton from '../../utilis/NextButton'
import { withRouter } from 'react-router-dom'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`

const TitleHelper = styled.p`
  text-align: center;
  font-weight: 100;
`

const Form = styled.form`
  margin-top: 5%;
`

class Information extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
    <Form onSubmit={handleSubmit}>
      <Title> Inscription</Title>
      <Grid container item justify="center" >
        <Grid item xs={12} md={3}>
          <TitleHelper> Afin de créer ton profil nous avons besoin de créer quelques informations </TitleHelper>
        </Grid>
      </Grid>
      <Grid container spacing={24} direction="column">
        <Grid container item spacing={0} justify="center" >
          <Grid item xs={12} md={3}>
            <Field name="firstname"
                   label="Prénom"
                   style={{width:'100%'}}
                   component={renderTextField}/>
          </Grid>
        </Grid>
        <Grid container item spacing={0} justify="center" >
          <Grid item xs={12} md={3}>
            <Field
              name="lastname"
              label="Nom"
              style={{width:'100%'}}
              component={renderTextField}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{marginTop: '2%'}}>
        <Grid container item md={3} justify="space-between">
          <Grid item xs={12} md={3}>
          <Field
            style={{width: '100%'}}
            name="day"
            label="Jour"
            datas={getDay()}
            component={renderSelectField}/>
          </Grid>

          <Grid item xs={12} md={3}>
            <Field
              style={{width: '100%'}}
              name="month"
              label="Mois"
              datas={month}
              component={renderSelectField}
              />
          </Grid>
          <Grid item xs={12} md={3}>
            <Field
              style={{width: '100%'}}
              name="year"
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
  form: 'information',
  validate,
  onSubmit: (values, dispatch, props) => {
    props.history.push(`contact`)
  },
})(Information)

export default withRouter(Information);
