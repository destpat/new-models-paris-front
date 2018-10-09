import React from 'react';
import { Route } from "react-router-dom";
import Informations from './step/information/Information';
import HomeRegistration from './HomeRegistration';

const Register = ({match}) => {
  return (
    <div>
      <Route exact path={match.url} component={HomeRegistration}/>
      <Route path={`${match.url}/information`} component={Informations}/>
    </div>
  )
}

export default Register;
