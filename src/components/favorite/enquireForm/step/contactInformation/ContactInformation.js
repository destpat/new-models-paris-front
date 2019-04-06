import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../../../register/utilis/renderTextField'
import renderPhoneField from '../../../../register/utilis/renderPhoneField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import validate from './validate'

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information de contact
*/

class ContactInformationForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid container direction="column">
          <Grid container justify="center" spacing={16}>
            <Grid container item md={8} xs={10} spacing={16}>
              <Grid item md={6} xs={12}>
                <Field
                    name="lastname"
                    id="lastname"
                    label="Nom *"
                    style={{width:'100%'}}
                    component={renderTextField}/>
              </Grid>
              <Grid item md={6} xs={12}>
                <Field
                    name="firstname"
                    id="firstname"
                    label="Prénom *"
                    style={{width:'100%'}}
                    component={renderTextField}/>
              </Grid>
            </Grid>
            <Grid container item md={8} xs={10} spacing={16}>
                  <Grid item md={6} xs={12}>
                    <Field
                        name="productionName"
                        id="production"
                        label="Nom de la production"
                        style={{width:'100%'}}
                        component={renderTextField}/>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                        name="artistName"
                        id="artiste-name"
                        label="Nom de l'artiste *"
                        style={{width:'100%'}}
                        component={renderTextField}/>
                </Grid>
            </Grid>
            <Grid container item md={8} xs={10} spacing={16}>
              <Grid item md={6} xs={12}>
                <Field
                    name="email"
                    id="email"
                    label="Email *"
                    style={{width:'100%'}}
                    component={renderTextField}/>
              </Grid>
              <Grid item md={6} xs={12}>
                <Field
                    name="phone"
                    id="phone-field"
                    label="Téléphone *"
                    style={{width:'100%'}}
                    component={renderPhoneField}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item justify="center">
          <Button style={{width: 150, marginTop: 80}} color="primary" variant="outlined" type="submit"> Suivant </Button>
        </Grid>
      </form>
    )
  }
}

ContactInformationForm = reduxForm({
  form: 'contactInformationForm',
  validate: validate,
  onSubmit: (values, dispatch, props) => {
    props.setStep(1)
  },
})(ContactInformationForm)

export default ContactInformationForm;
