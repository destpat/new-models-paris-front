import React from 'react';
import CustomRefinementList from './utilis/CustomRefinementList';
import { sexBinding } from '../../utilis/bindingValue'

const Sex = () => {
  return (
    <div>
      <CustomRefinementList
        attribute="sex"
        operator="and"
        values={sexBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Sexe"
      />
    </div>
  )
}

export default Sex;
