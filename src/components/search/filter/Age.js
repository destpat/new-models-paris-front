import React from 'react';
import { Category } from './style';
import CustomRangeSliderDate from './utilis/CustomRangeSliderDate'

const Age = () => {
  return (
    <div>
      <Category>Age</Category>
      <CustomRangeSliderDate attribute="birthdateTimestamp" unit="ans"/>
    </div>
  )
}

export default Age;
