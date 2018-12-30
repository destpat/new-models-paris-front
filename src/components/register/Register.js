import React from 'react';
import { Route } from "react-router-dom";
import Informations from './step/information/Information';
import Contact from './step/contact/Contact';
import Description from './step/description/Description';
import Type from './step/type/Type';
import Photo from './step/photo/Photo';
import Password from './step/password/Password';
import Confirmation from './step/confirmation/Confirmation';
import HomeRegistration from './step/HomeRegistration';

const Register = ({match}) => {
  return (
    <div>
      <Route exact path={match.url} component={HomeRegistration}/>
      <Route path={`${match.url}/information`} component={Informations}/>
      <Route path={`${match.url}/contact`} component={Contact}/>
      <Route path={`${match.url}/description`} component={Description}/>
      <Route path={`${match.url}/type`} component={Type}/>
      <Route path={`${match.url}/photo`} component={Photo}/>
      <Route path={`${match.url}/password`} component={Password}/>
      <Route path={`${match.url}/confirmation`} component={Confirmation}/>
    </div>
  )
}

export default Register;
