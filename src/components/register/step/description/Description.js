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
  font-weight: 300;
`

const TitleHelper = styled.p`
  text-align: center;
  font-weight: 100;
`

const Form = styled.form`
  margin-top: 50px;
`

class Contact extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Description </Title>
        <Grid container item justify="center" >
          <TitleHelper>
            Une petite description pour les prodcutions
          </TitleHelper>
        </Grid>
        <Grid container spacing={24} direction="column">
          <Grid container item spacing={0} justify="center" >
            <Grid item xs={11} md={3}>
              <Field name="height"
                     id="height-field"
                     label="Taille"
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

Contact = reduxForm({
  form: 'descriptionForm',
  validate,
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    dispatch(setNextStep(3))
    props.history.push(`type`)
  },
})(Contact)

export default withRouter(Contact);
