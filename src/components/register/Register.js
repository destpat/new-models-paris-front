import React from 'react';
import { Route, Link } from "react-router-dom";
import Information from './step/Information';

const Register = ({match}) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/information`}>Information</Link>
        </li>
        <li>
          <Link to={`${match.url}/contact`}>Contact</Link>
        </li>
        <li>
          <Link to={`${match.url}/description`}>Description</Link>
        </li>
        <li>
          <Link to={`${match.url}/figuration`}>Figuration</Link>
        </li>
        <li>
          <Link to={`${match.url}/photo`}>Photo</Link>
        </li>
        <li>
          <Link to={`${match.url}/validate`}>Validation step</Link>
        </li>
      </ul>
      <Route path={`${match.url}/information`} component={Information}/>
      <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}/>
    </div>
  )
}


export default Register;
