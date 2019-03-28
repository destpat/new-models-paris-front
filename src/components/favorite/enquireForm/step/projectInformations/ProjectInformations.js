import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import renderTextField from '../../../../register/utilis/renderTextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import validate from './validate'
import { formValueSelector } from 'redux-form';
import { createEnquire } from '../../../favoriteAction'
/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information de contact
*/

const Title = styled.span`
  font-size: 1em;
  font-weight: 300;
  margin: 15px;
`

class ProjectInformationSecond extends Component {
  render() {
    const { handleSubmit, setStep } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={24}>
          <Grid container item justify="center">
            <Grid item md={8} xs={10}>
              <Field name="numberOfModels"
                id="number-of-models"
                label="Nombre de figurant(e)s *"
                type="number"
                style={{width:'100%'}}
                component={renderTextField}/>
            </Grid>
          </Grid>
          <Grid container item justify="center" style={{paddingTop: 0}}>
            <Grid item md={8} xs={10}>
              <Field name="dateOfProject"
                id="date-of-project"
                label="Date du projet *"
                type="date"
                InputLabelProps={{
                  shrink: true
                }}
                style={{width:'100%'}}
                component={renderTextField}/>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid container item md={8} xs={10} spacing={24}>
                <Grid item md={6} xs={6}>
                <Field name="startTime"
                       id="start-time"
                       label="Heure de début *"
                       type="time"
                       InputLabelProps={{
                         shrink: true
                       }}
                       style={{width:'100%'}}
                       component={renderTextField}/>
                </Grid>
                <Grid item md={6} xs={6}>
                <Field name="endTime"
                       id="end-time"
                       label="Heure de fin *"
                       type="time"
                       InputLabelProps={{
                         shrink: true
                       }}
                       style={{width:'100%'}}
                       component={renderTextField}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item justify="center">
              <Title>
                Description du projet :
              </Title>
              <Grid container spacing={8} direction="column">
                <Grid container item spacing={0} justify="center">
                  <Grid item md={8} xs={10}>
                    <Field name="description"
                           id="description-field"
                           label="Scénario ... *"
                           multiline={true}
                           rows="4"
                           variant="outlined"
                           style={{width:'100%'}}
                           component={renderTextField}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        <Grid container item justify="center">
          <Button style={{width: 150, marginTop: 20}}
                  color="primary"
                  variant="outlined"
                  onClick={() => setStep(2)}>
            Précédent
          </Button>
          <Button style={{width: 150, marginTop: 20, marginLeft: 10}}
                  color="primary"
                  variant="outlined"
                  type="submit">
            Terminer
          </Button>
        </Grid>
      </form>
    )
  }
}

const selectorContactInformationForm = formValueSelector('contactInformationForm')
const selectorProjectClothe = formValueSelector('projectClothe')
const selectorExtraType = formValueSelector('projectType')

const mapStateToProps = state => {
  let clothes = []
  let extraType = []
  // Object contenant la partie 2 du formulaire de demande de rensignement
  let selectedClothes = selectorProjectClothe(state, 'fashionMode', 'fitness', 'bikini', 'underwear', 'lingerie', 'vixen', 'nude')
  for (let key in selectedClothes) {
    if (selectedClothes.hasOwnProperty(key) && selectedClothes[key] === true) {
      clothes.push(key);
    }
  }

  let selectedExtraType = selectorExtraType(state, 'shortFilms', 'photoShoot', 'musicVideo', 'fashionShow')
  for (let key in selectedExtraType) {
    if (selectedExtraType.hasOwnProperty(key) && selectedExtraType[key] === true) {
      extraType.push(key);
    }
  }

  return {
  enquire: {
    ...selectorContactInformationForm(state, 'email', 'phone', 'lastname', 'firstname', 'productionName', 'artistName'),
    clothes,
    extraType
  },
  usersId: state.favorites.favoriteUsers.map(favoriteUser => favoriteUser.id)
  }
}

ProjectInformationSecond = reduxForm({
  form: 'projectInformationSecond',
  validate: validate,
  onSubmit: (values, dispatch, props) => {
    // Cast du nombre de models en number
    values.numberOfModels = +values.numberOfModels
    dispatch(createEnquire({
      usersId: props.usersId,
      enquire: {
        ...values,
        ...props.enquire
      }
    }))
    props.setStep(4)
  }
})(ProjectInformationSecond)

export default connect(mapStateToProps)(ProjectInformationSecond);
