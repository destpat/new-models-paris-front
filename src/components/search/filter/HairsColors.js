import React from 'react';
import { hairsColorsBinding } from '../../utilis/bindingValue'
import CustomRefinementList from './utilis/CustomRefinementList';

const HairsColors = () => {
  return (
    <div>
      <CustomRefinementList
        attribute="hairColor"
        values={hairsColorsBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Couleur des cheveux"
      />
    </div>
  )
}

export default HairsColors;
