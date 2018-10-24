import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../utilis/renderTextField'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import NextButton from '../../utilis/NextButton'
import validate from './validate'
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

class Contact extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
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
              <Field name="phone"
                     label="Téléphone"
                     style={{width:'100%'}}
                     type="number"
                     component={renderTextField}/>
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center">
            <Grid item xs={11} md={3}>
              <Field
                name="mail"
                label="Email"
                style={{width:'100%'}}
                component={renderTextField}
              />
            </Grid>
          </Grid>
          <Grid container item spacing={0} justify="center">
            <Grid item xs={11} md={3}>
              <Field
                name="city"
                label="Ville"
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

Contact = reduxForm({
  form: 'contactForm',
  validate,
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    props.history.push(`description`)
  },
})(Contact)

export default withRouter(Contact);
