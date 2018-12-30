import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'

const renderSelectField = ({ input, label }) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox checked={input.value ? true : false}
                  onChange={input.onChange}/>
        }/>
  )
}

export default renderSelectField;
