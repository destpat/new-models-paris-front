import React from 'react';
import { Category } from './style';
import CustomRangeSlider from './utilis/CustomRangeSlider'

const Height = () => {
  return (
    <div>
      <Category>Taille</Category>
      <CustomRangeSlider attribute="height" unit="cm"/>
    </div>
  )
}

export default Height;
