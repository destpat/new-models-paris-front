import React from 'react'
import { connect } from 'react-redux'
import {
  Route,
  Redirect,
} from "react-router-dom";

/*
* @component
* @description Protection des route du formulaire pour que l'utilisateur ne
* puisse pas sauté des étapes lors de l'inscription
*/

function RegisterRoute({ component: Component, stepNumber, currentStep , ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        stepNumber <= currentStep  ? (
          <Component {...props} />
        ) : (
          <Redirect
          to={{
            pathname: "/candidatures",
            state: { from: props.location }
          }}
        />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.register.currentStep
  }
}

export default connect(mapStateToProps)(RegisterRoute)
