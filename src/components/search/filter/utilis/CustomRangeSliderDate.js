import React, { Component } from 'react'
import Rheostat from 'rheostat'
import moment from 'moment'
import { connectRange } from 'react-instantsearch-dom'
import styled from 'styled-components'
import './rangeSlider.css'

const ValueContainer = styled.div`
  text-align: center;
  margin-bottom: 15px;
`

const Value = styled.span`
  padding: 10px;
  font-size: 1.1em
`

const unixToAge = (unixDate) => {
  return moment().diff(unixDate * 1000, 'years', false);
}

class RangeSlider extends Component {
  state = {
    min: 100,
    max: 200
  };

  componentWillReceiveProps(nextProps) {
    const { currentRefinement, canRefine } = nextProps;
    if (
      canRefine &&
      (currentRefinement.min !== this.state.min ||
        currentRefinement.max !== this.state.max)
    ) {
      this.setState({
        ...currentRefinement,
      });
    }
  }

  onChange = ({ values: [min, max] }) => {
    const { currentRefinement, refine } = this.props;
    if (currentRefinement.min !== min || currentRefinement.max !== max) {
      refine({
        min,
        max,
      });
    }
  };

  onValuesUpdated = ({ values: [min, max] }) => {
    this.setState({
      min,
      max,
    });
  };

  render() {
    let { min, max, currentRefinement, unit } = this.props;
    if (min === max) {
      return null;
    }
    return (
      <div>
        <Rheostat
          min={min}
          max={max}
          values={[currentRefinement.min, currentRefinement.max]}
          onChange={this.onChange}
          onValuesUpdated={this.onValuesUpdated}>
        </Rheostat>
        <ValueContainer>
          <Value>
            {unixToAge(this.state.min)} {unit}
          </Value>
          <span> - </span>
          <Value>
            {unixToAge(this.state.max)} {unit}
          </Value>
        </ValueContainer>
      </div>
    );
  }
}

const CustomRangeSlider = connectRange(RangeSlider);

export default CustomRangeSlider
