import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../utilis/renderTextField'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import { setNextStep } from '../../registerAction'
import NextButton from '../../utilis/button/NextButton'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 2em;
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
    display: 'flex',
  }
});

/*
*  @description Component
*  Ajout des informations additionel
*/
class AdditionalInformations extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Informations complémentaires </Title>
        <Grid container item justify="center">
          <TitleHelper>
            As-tu plus de précisions à nous donner par rapports à t'es talents et conditions ?
          </TitleHelper>
          <Grid container spacing={24} direction="column">
            <Grid container item spacing={0} justify="center">
              <Grid item xs={11} md={3}>
                <Field name="firstname"
                       id="firstname-field"
                       label="Danse, instrument de musqiue, performances, sports ..."
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

AdditionalInformations = reduxForm({
  form: 'typeForm',
  destroyOnUnmount: false,
  onSubmit: (values, dispatch, props) => {
    dispatch(setNextStep(5))
    props.history.push(`photos`)
  },
})(AdditionalInformations)

export default withStyles(styles)(withRouter(AdditionalInformations));
