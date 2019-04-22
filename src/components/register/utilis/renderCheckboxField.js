import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'

const renderCheckboxField = ({ input, label, id }) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox checked={input.value ? true : false}
                  id={id}
                  onChange={input.onChange}/>
        }/>
  )
}

export default renderCheckboxField;
