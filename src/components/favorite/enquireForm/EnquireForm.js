import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';

import ContactInformation from './step/contactInformation/ContactInformation'
import ProjectType from './step/projectType/ProjectType'
import ProjectClothe from './step/projectClothe/ProjectClothe'
import ProjectInformations from './step/projectInformations/ProjectInformations'
import SuccessFeedback from './step/successFeedback/SuccessFeedback'

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information de contact
*/

class EnquireForm extends Component {
  state = {
    index: 0
  }
  setStep = (index) => {
    this.setState({index})
  }
  resetIndex = () => {
    this.setState({index: 0})
  }
  render() {
    const { index } = this.state
    return (
      <SwipeableViews
        animateHeight={false}
        index={index}
        slideStyle={{overflow: 'hidden'}}
        disabled={true}>
        <ContactInformation setStep={this.setStep}/>
        <ProjectType setStep={this.setStep} />
        <ProjectClothe setStep={this.setStep} />
        <ProjectInformations  setStep={this.setStep} />
        <SuccessFeedback resetIndex={this.resetIndex}/>
      </SwipeableViews>
    )
  }
}

export default withRouter(EnquireForm);
