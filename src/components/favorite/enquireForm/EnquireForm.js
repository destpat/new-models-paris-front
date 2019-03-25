import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';

import ContactInformation from './step/contactInformation/ContactInformation'
import ProjectInformationsFirst from './step/projectInformationFirst/ProjectInformationsFirst'
import ProjectInformationsSecond from './step/projectInformationsSecond/ProjectInformationsSecond'

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
      <SwipeableViews animateHeight={false} index={index} slideStyle={{overflow: 'hidden'}}>
        <ContactInformation nextStep={this.nextStep}/>
        <ProjectInformationsFirst nextStep={this.nextStep} previousStep={this.previousStep}/>
        <ProjectInformationsSecond  nextStep={this.nextStep} previousStep={this.previousStep}/>
      </SwipeableViews>
    )
  }
}

export default withRouter(EnquireForm);
