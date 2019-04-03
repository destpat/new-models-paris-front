import React from 'react';
import CustomRefinementList from './utilis/CustomRefinementList';
import { clothesBinding } from '../../utilis/bindingValue'

const Clothe = () => {
  return (
    <div>
      <CustomRefinementList
        attribute="clothes"
        operator="and"
        values={clothesBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Type de tenu"
      />
    </div>
  )
}

export default Clothe;
