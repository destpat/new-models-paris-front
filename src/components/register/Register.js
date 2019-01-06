import React from 'react'
import { Route, Switch } from "react-router-dom"
import Informations from './step/information/Information'
import Contact from './step/contact/Contact'
import Description from './step/description/Description'
import Type from './step/type/Type'
import Photo from './step/photo/Photo'
import Password from './step/password/Password'
import Confirmation from './step/confirmation/Confirmation'
import HomeRegistration from './step/HomeRegistration'

import RegisterRoute from './RegisterRoute'

const Register = ({match}) => {
  return (
    <Switch>
      <Route exact path={match.url} component={HomeRegistration} />
      <RegisterRoute path={`${match.url}/information`} component={Informations} stepNumber={0}/>
      <RegisterRoute path={`${match.url}/contact`} component={Contact} stepNumber={1}/>
      <RegisterRoute path={`${match.url}/description`} component={Description} stepNumber={2}/>
      <RegisterRoute path={`${match.url}/type`} component={Type} stepNumber={3}/>
      <RegisterRoute path={`${match.url}/photo`} component={Photo} stepNumber={4}/>
      <RegisterRoute path={`${match.url}/password`} component={Password} stepNumber={5}/>
      <RegisterRoute path={`${match.url}/confirmation`} component={Confirmation} stepNumber={6}/>
    </Switch>
  )
}

export default Register
