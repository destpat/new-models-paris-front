import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import NextButton from '../../utilis/button/NextButton'
import renderTextField from '../../utilis/renderTextField'
import validate from './validate'

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

class Password extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Mot de passe </Title>
        <Grid container item justify="center">
          <Grid item xs={12} md={3}>
            <TitleHelper>
              Merci de saisir un mot de passe, tu l'utiliseras pour accéder à ton compte modèle.
            </TitleHelper>
          </Grid>
        </Grid>
        <Grid container spacing={24} direction="column">
          <Grid container item spacing={0} justify="center" >
            <Grid item xs={11} md={3}>
              <Field name="password"
                     label="Mot de passe"
                     style={{width:'100%'}}
                     type="password"
                     component={renderTextField}/>
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center">
            <Grid item xs={11} md={3}>
              <Field name="passwordConfirmation"
                     label="Confirmer votre mot de passe"
                     type="password"
                     style={{width:'100%'}}
                     component={renderTextField}
              />
            </Grid>
          </Grid>
        </Grid>
        <NextButton/>
      </Form>
    )
  }
}

Password = reduxForm({
  form: 'passwordForm',
  validate,
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    props.history.push(`confirmation`)
  },
})(Password)

export default withRouter(Password);
