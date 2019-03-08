import React from 'react';
import StaticRefinementList from './utilis/StaticRefinementList';
import { clothesBinding } from '../../utilis/bindingValue'

const Clothe = () => {
  return (
    <div>
      <StaticRefinementList
        attribute="clothes.S"
        values={clothesBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Type de tenu"
      />
    </div>
  )
}

export default Clothe;
