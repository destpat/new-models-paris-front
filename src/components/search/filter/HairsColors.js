import React from 'react';
import { hairsColorsBinding } from '../../utilis/bindingValue'
import StaticRefinementList from './utilis/StaticRefinementList';

const HairsColors = () => {
  return (
    <div>
      <StaticRefinementList
        attribute="hairColor"
        values={hairsColorsBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Couleur des cheveux"
      />
    </div>
  )
}

export default HairsColors;
