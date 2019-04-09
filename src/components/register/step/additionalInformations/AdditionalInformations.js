import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import styled from 'styled-components'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText';

import { setNextStep } from '../../registerAction'
import NextButton from '../../utilis/button/NextButton'
import renderCheckboxField from '../../utilis/renderCheckboxField'
import renderTextField from '../../utilis/renderTextField'
import validate from './validate'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1.6em;
`

const TitleHelper = styled.p`
  text-align: center;
  font-weight: 100;
  margin-bottom: 40px;
`

const Form = styled.form`
  margin-top: 50px;
`

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

/*
*  @description Component
*  Ajout des informations additionel
*/
class AdditionalInformations extends Component {
  render() {
    const { handleSubmit, submitFailed, valid, sex } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Conditions </Title>
         <TitleHelper>
           En quelles tenues acceptes-tu de poser ?
         </TitleHelper>
        <Grid container item justify="center">
          <FormControl>
            <FormGroup>
             <Field name="fashionMode"
                    id="fashion-mode-outfit"
                    label="Fashion / Mode"
                    component={renderCheckboxField}/>

             <Field name="fitness"
                    id="fitness"
                    label="Fitness"
                    component={renderCheckboxField}/>

             <Field name="bikini"
                    id="bikini"
                    label="Bikini"
                    component={renderCheckboxField}/>
            </FormGroup>
          </FormControl>
          <FormControl error={submitFailed && !valid ? true : false}>
            <FormGroup>
              <Field name={sex === 'men' ? 'underwear' : 'lingerie'}
                     id="underwear"
                     label={sex === 'men' ? 'Sous-vêtements' : 'Lingerie'}
                     component={renderCheckboxField}/>

              <Field name="vixen"
                     id="vixen"
                     label="Vixen"
                     component={renderCheckboxField}/>

             <Field name="nude"
                    id="nude"
                    label="Nu"
                    component={renderCheckboxField}/>
            </FormGroup>
            <FormHelperText>Veuillez sélectionner au <br/> moins une case</FormHelperText>
          </FormControl>
         </Grid>
        <Grid container item justify="center">
          <TitleHelper>
            ex : danse hip-hop, instrument de musique, sport,etc.. (Factultatif)
          </TitleHelper>
          <Grid container spacing={8} direction="column">
            <Grid container item spacing={0} justify="center">
              <Grid item xs={11} md={3}>
                <Field name="other"
                       id="other-field"
                       label="ex : danse hip-hop, instrument de musique, sport, etc .."
                       multiline={true}
                       rows="4"
                       variant="outlined"
                       style={{width:'100%'}}
                       component={renderTextField}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <NextButton/>
      </Form>
    )
  }
}

const selector = formValueSelector('informationForm')
const mapStateToProsp = state => ({
  sex: selector(state, 'sex')
})

AdditionalInformations = reduxForm({
  form: 'AdditionalInformationsForm',
  destroyOnUnmount: false,
  validate,
  onSubmit: (values, dispatch, props) => {
    dispatch(setNextStep(5))
    props.history.push(`photos`)
  },
})(AdditionalInformations)

export default withStyles(styles)(connect(mapStateToProsp)(withRouter(AdditionalInformations)));
