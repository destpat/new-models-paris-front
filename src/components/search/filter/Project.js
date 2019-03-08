import React from 'react';
import StaticRefinementList from './utilis/StaticRefinementList';
import { extraTypeBinding } from '../../utilis/bindingValue'

const Project = () => {
  return (
    <div>
      <StaticRefinementList
        attribute="extraType.S"
        values={extraTypeBinding.map(({name, value}) => ({  label: name,  value }))}
        categoryLabel="Type de project"
      />
    </div>
  )
}

export default Project;
