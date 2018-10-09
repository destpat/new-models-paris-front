import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment} from './action'
import { Field, reduxForm } from 'redux-form'

class Inforamtion extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  value: state.inforamtion.value
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment())
})

Inforamtion = reduxForm({
  form: 'inforamtion',
   onSubmit: () => {console.log('submit');},
})(Inforamtion)

export default connect(mapStateToProps, mapDispatchToProps)(Inforamtion);
