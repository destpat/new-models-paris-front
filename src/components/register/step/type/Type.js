import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import styled from 'styled-components'
import NextButton from '../../utilis/NextButton'
import validate from './validate'
import renderCheckboxField from '../../utilis/renderCheckboxField'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

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

const styles = theme => ({
  root: {
    display: 'flex',
  }
});


class Type extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Title> Inscription</Title>
        <Grid container item justify="center" >
          <TitleHelper>
            Pour quelle type de figuration est tu disponible
          </TitleHelper>
        </Grid>
        <Grid container item justify="center">
          <FormControl style={{marginRight: 100}}>
            <FormGroup>
              <Field name="musicVideo"
                     label="Music video"
                     component={renderCheckboxField}/>
               <Field name="photoShoot"
                      label="Photo shoot"
                      component={renderCheckboxField}/>
                <Field name="bikini"
                       label="Bikini"
                       component={renderCheckboxField}/>
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormGroup>
              <Field name="underwear"
                     label="Lingerie"
                     component={renderCheckboxField}/>
              <Field name="vixen"
                     label="Vixen"
                     component={renderCheckboxField}/>
               <Field name="nude"
                      label="Nude"
                      component={renderCheckboxField}/>
            </FormGroup>
          </FormControl>
         </Grid>
        <NextButton/>
      </Form>
    )
  }
}

Type = reduxForm({
  form: 'typeForm',
  destroyOnUnmount: false,
  validate,
  onSubmit: (values, dispatch, props) => {
    props.history.push(`photo`)
  },
})(Type)

export default withStyles(styles)(withRouter(Type));