import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment} from './action'

class Inforamtion extends Component {
  render() {
    return (
      <div>
        <h1>Inforamtions Step</h1>
        <h2>{this.props.value}</h2>
        <div onClick={() => {
            this.props.increment();
            console.log('click');
          }}> INCREMENTE </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Inforamtion);
