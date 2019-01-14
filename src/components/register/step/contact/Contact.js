import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../utilis/renderTextField'
import renderPhoneField from '../../utilis/renderPhoneField'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import NextButton from '../../utilis/button/NextButton'
import submit from './submit'
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
  margin-top: 50px;
`

class Contact extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(submit)}>
        <Title> Contact </Title>
        <Grid container item justify="center" >
          <Grid item xs={12} md={3}>
            <TitleHelper>
              Nous avons besoin de ton contact afin que tu soit informer le plus
              rapidement possible si nous avons une figuration a te proposer
            </TitleHelper>
          </Grid>
        </Grid>
        <Grid container spacing={24} direction="column">
          <Grid container item spacing={0} justify="center" >
            <Grid item xs={11} md={3}>
              <Field
                  name="phone"
                  id="phone-field"
                  label="Téléphone"
                  style={{width:'100%'}}
                  component={renderPhoneField}/>
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center">
            <Grid item xs={11} md={3}>
              <Field
                name="email"
                id="email-field"
                label="Email"
                style={{width:'100%'}}
                component={renderTextField}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{paddingTop: 12}}>
          <Grid container item md={3} xs={11} justify="space-between">
            <Grid item xs={5} md={5}>
              <Field
                name="city"
                id="city-field"
                label="Ville"
                style={{width:'100%'}}
                component={renderTextField}/>
            </Grid>
            <Grid item xs={5} md={5}>
              <Field
                name="postCode"
                id="post-code-field"
                label="Code postal"
                style={{width:'100%'}}
                component={renderTextField}/>
            </Grid>
          </Grid>
        </Grid>
      <NextButton/>
    </Form>
    )
  }
}

Contact = reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false,
})(Contact)

export default withRouter(Contact);
