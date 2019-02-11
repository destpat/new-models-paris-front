import React from 'react'
import { Route, Switch } from "react-router-dom"
import Informations from './step/information/Information'
import Contact from './step/contact/Contact'
import Description from './step/description/Description'
import ExtraType from './step/type/ExtraType'
import AdditionalInformations from './step/additionalInformations/AdditionalInformations'
import Photos from './step/photo/Photos'
import Password from './step/password/Password'
import Confirmation from './step/confirmation/Confirmation'
import HomeRegistration from './step/HomeRegistration'

import RegisterRoute from './RegisterRoute'

/*
*  @description Component
*  Déclaration des différentes route du formulaire
*/

const Register = ({match}) => {
  return (
    <Switch>
      <Route exact path={match.url} component={HomeRegistration} />

      <Route path={`${match.url}/information`} component={Informations} stepNumber={0}/>
      <Route path={`${match.url}/contact`} component={Contact} stepNumber={1}/>
      <Route path={`${match.url}/description`} component={Description} stepNumber={2}/>
      <Route path={`${match.url}/type`} component={ExtraType} stepNumber={3}/>

      <Route path={`${match.url}/additional-informations`} component={AdditionalInformations} stepNumber={4}/>

      <Route path={`${match.url}/photos`} component={Photos} stepNumber={5}/>
      <Route path={`${match.url}/password`} component={Password} stepNumber={6}/>
      <Route path={`${match.url}/confirmation`} component={Confirmation} stepNumber={7}/>

    </Switch>
  )
}

export default Register
