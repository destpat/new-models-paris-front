import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';

import ContactInformation from './step/contactInformation/ContactInformation'
import ProjectType from './step/projectType/ProjectType'
import ProjectClothe from './step/projectClothe/ProjectClothe'
import ProjectInformations from './step/projectInformations/ProjectInformations'

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information de contact
*/

class EnquireForm extends Component {
  state = {
    index: 0
  }
  nextStep = () => {
    this.setState({index: this.state.index + 1})
  }
  previousStep = () => {
    this.setState({index: this.state.index - 1})
  }
  render() {
    const { index } = this.state
    return (
      <SwipeableViews
        animateHeight={false}
        index={index}
        slideStyle={{overflow: 'hidden'}}
        disabled={true}>
        <ContactInformation nextStep={this.nextStep}/>
        <ProjectType nextStep={this.nextStep} previousStep={this.previousStep}/>
        <ProjectClothe nextStep={this.nextStep} previousStep={this.previousStep}/>
        <ProjectInformations  nextStep={this.nextStep} previousStep={this.previousStep}/>
      </SwipeableViews>
    )
  }
}

export default withRouter(EnquireForm);
