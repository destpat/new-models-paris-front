import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';

import ContactInformation from './step/contactInformation/ContactInformation'
import ProjectInformationsFirst from './step/projectInformationFirst/ProjectInformationsFirst'
import ProjectInformationsSecond from './step/projectInformationsSecond/ProjectInformationsSecond'

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;
`

/*
*  @description Component
*  formulaire pour la création d'utilisateur, demande d'information de contact
*/

class BookingForm extends Component {
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
      <div>
        <Title>
          Demande de booking
        </Title>
        <SwipeableViews animateHeight={false} index={index} slideStyle={{overflow: 'hidden'}}>
          <ContactInformation nextStep={this.nextStep}/>
          <ProjectInformationsFirst nextStep={this.nextStep} previousStep={this.previousStep}/>
          <ProjectInformationsSecond  nextStep={this.nextStep} previousStep={this.previousStep}/>
        </SwipeableViews>
    </div>
    )
  }
}

export default withRouter(BookingForm);
