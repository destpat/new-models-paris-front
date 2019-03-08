import React from 'react';
import StaticRefinementList from './utilis/StaticRefinementList';
import { eyesColorsBinding } from '../../utilis/bindingValue'

const EyesColor = () => {
  return (
    <div>
      <StaticRefinementList
        attribute="eyesColor"
        values={eyesColorsBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Couleur des yeux"
      />
    </div>
  )
}

export default EyesColor;
