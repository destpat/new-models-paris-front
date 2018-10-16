import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../utilis/renderTextField'
import renderSelectField from '../../utilis/renderSelectField'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import styled from 'styled-components'
import NextButton from '../../utilis/NextButton'
import validate from './validate'
import { withRouter } from 'react-router-dom'
import {eyesColors, hairsColors} from './descriptionSelectValue'

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

class Contact extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Inscription</Title>
        <Grid container item justify="center" >
          <Grid item xs={12} md={3}>
            <TitleHelper>
              Une petite description pour les prodcutions
            </TitleHelper>
          </Grid>
        </Grid>
        <Grid container spacing={24} direction="column">
          <Grid container item spacing={0} justify="center" >
            <Grid item xs={12} md={3}>
              <Field name="height"
                     label="Taille"
                     type="number"
                     inputProps={{endAdornment: <InputAdornment position="end">cm</InputAdornment>}}
                     style={{width:'100%'}}
                     component={renderTextField}/>
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center">
            <Grid item xs={12} md={3}>
              <Field
                style={{width:'100%'}}
                name="hairsColors"
                label="Couleurs des cheveux"
                datas={hairsColors}
                component={renderSelectField}
              />
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center">
            <Grid item xs={12} md={3}>
              <Field
                style={{width:'100%'}}
                name="eyesColors"
                label="Couleur des yeux"
                datas={eyesColors}
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
  form: 'Information',
  validate,
  onSubmit: (values, dispatch, props) => {
    props.history.push(`type`)
  },
})(Contact)

export default withRouter(Contact);
