import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { resetEnquire } from '../../../favoriteAction'
import {reset} from 'redux-form';

const SubTitle = styled.div`
  text-align: center
`

const SuccessFeedback = ({ createEnquireSuccess, resetEnquire, resetIndex, resetForm }) => (
  <div>
    <SubTitle>
      {
        createEnquireSuccess ?
        'Demande envoyée avec succès 🤗'
        :
        'Envoi de votre demande en cours'
      }
    </SubTitle>
    <div className="circle-loader-container">
      <div className={`circle-loader ${createEnquireSuccess ? 'load-complete' : ''}`}>
        <div className="checkmark draw" style={{display: createEnquireSuccess ? 'block' : 'none'}}></div>
      </div>
    </div>
    <Grid container item justify="center">
      <Button style={{marginTop: 50}}
              color="primary"
              variant="outlined"
              onClick={() => {
                resetEnquire()
                setTimeout(() => {
                  resetIndex()
                  resetForm()
                }, 500);
              }}>
        Faire une nouvelle demande
      </Button>
    </Grid>
  </div>
)

const mapStateToProps = state => ({
  createEnquireSuccess: state.enquire.createEnquireSuccess
})

const mapDispatchToProps = dispatch => ({
  resetEnquire: () => dispatch(resetEnquire()),
  resetForm: () => {
    dispatch(reset('contactInformationForm'))
    dispatch(reset('projectClothe'))
    dispatch(reset('projectInformationSecond'))
    dispatch(reset('projectType'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SuccessFeedback)
