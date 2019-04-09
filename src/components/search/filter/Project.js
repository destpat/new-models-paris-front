import React from 'react';
import CustomRefinementList from './utilis/CustomRefinementList';
import { extraTypeBinding } from '../../utilis/bindingValue'

const Project = () => {
  return (
    <div>
      <CustomRefinementList
        attribute="extraType"
        operator="and"
        values={extraTypeBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Type de projet"
      />
    </div>
  )
}

export default Project;
