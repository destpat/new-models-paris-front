import React from 'react';
import CustomRefinementList from './utilis/CustomRefinementList';
import { eyesColorsBinding } from '../../utilis/bindingValue'

const EyesColor = () => {
  return (
    <div>
      <CustomRefinementList
        attribute="eyesColor"
        operator="and"
        values={eyesColorsBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Couleur des yeux"
      />
    </div>
  )
}

export default EyesColor;
