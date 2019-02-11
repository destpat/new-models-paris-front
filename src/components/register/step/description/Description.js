import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../utilis/renderTextField'
import renderSelectField from '../../utilis/renderSelectField'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import styled from 'styled-components'
import NextButton from '../../utilis/button/NextButton'
import validate from './validate'
import { withRouter } from 'react-router-dom'
import {eyesColor, hairColor} from './descriptionSelectValue'
import { setNextStep } from '../../registerAction'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 2em;
`

const Form = styled.form`
  margin-top: 50px;
`

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information sur la
*  description physique de l'utilisateur
*/

class Description extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Description physique</Title>
        <Grid container item justify="center" >
        </Grid>
        <Grid container spacing={8} direction="column">
          <Grid container item spacing={0} justify="center" >
            <Grid item xs={11} md={3}>
              <Field name="height"
                     id="height-field"
                     label="Hauteur"
                     type="number"
                     inputProps={{endAdornment: <InputAdornment position="end">cm</InputAdornment>}}
                     style={{width:'100%'}}
                     component={renderTextField}/>
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center">
            <Grid item xs={11} md={3}>
              <Field
                style={{width:'100%'}}
                name="hairColor"
                id="hair-color-field"
                label="Couleurs de cheveux"
                datas={hairColor}
                component={renderSelectField}
              />
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center">
            <Grid item xs={11} md={3}>
              <Field
                style={{width:'100%'}}
                name="eyesColor"
                id="eyes-color-field"
                label="Couleur des yeux"
                datas={eyesColor}
                component={renderSelectField}
              />
            </Grid>
          </Grid>
        </Grid>
        <NextButton/>
      </Form>
    )
  }
}

Description = reduxForm({
  form: 'descriptionForm',
  validate,
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    dispatch(setNextStep(3))
    props.history.push(`type`)
  },
})(Description)

export default withRouter(Description);
