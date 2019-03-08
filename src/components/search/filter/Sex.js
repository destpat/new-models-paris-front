import React from 'react';
import StaticRefinementList from './utilis/StaticRefinementList';
import { sexBinding } from '../../utilis/bindingValue'

const Sex = () => {
  return (
    <div>
      <StaticRefinementList
        attribute="sex"
        values={sexBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Sexe"
      />
    </div>
  )
}

export default Sex;
