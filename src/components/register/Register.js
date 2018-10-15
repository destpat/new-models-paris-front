import React from 'react';
import { Route } from "react-router-dom";
import Informations from './step/information/Information';
import Contact from './step/contact/Contact';
import HomeRegistration from './HomeRegistration';

const Register = ({match}) => {
  return (
    <div>
      <Route exact path={match.url} component={HomeRegistration}/>
      <Route path={`${match.url}/information`} component={Informations}/>
      <Route path={`${match.url}/contact`} component={Contact}/>
    </div>
  )
}

export default Register;
