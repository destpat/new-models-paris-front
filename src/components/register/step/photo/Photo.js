import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderDropzoneField from '../../utilis/renderDropzoneField'
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

class Contact extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Inscription</Title>
        <Grid container item justify="center" >
            <TitleHelper>
              {"Envoie nous t'es plus belle photo"}
            </TitleHelper>
        </Grid>
        <Grid container spacing={16}>
           <Grid item xs={12}>
              <Grid container justify="center" spacing={32}>
                <Grid item>
                  <Field name="photo1"
                    component={renderDropzoneField}/>
                </Grid>
                <Grid item>
                  <Field name="photo2"
                    component={renderDropzoneField}/>
                </Grid>
                <Grid item>
                  <Field name="photo3"
                    component={renderDropzoneField}/>
                </Grid>
                <Grid item>
                  <Field name="photo4"
                    component={renderDropzoneField}/>
                </Grid>
              </Grid>
            </Grid>
         </Grid>
        <NextButton/>
      </Form>
    )
  }
}

Contact = reduxForm({
  form: 'photoForm',
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    console.log('FINISH AJOUTER LA PROCHAINE ETAPE CREATION DE MOT DE PASSE');
  },
})(Contact)

export default withRouter(Contact);
