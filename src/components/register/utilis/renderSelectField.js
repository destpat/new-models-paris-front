import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const renderSelectField = ({ datas, input, label, meta, helperText, classes, style }) => {
  let displayError = meta.submitFailed && meta.error ? true : false;
  return (
    <FormControl style={style}>
      <InputLabel>{label}</InputLabel>
      <Select {...input}
              error={displayError}>
        <MenuItem value="">
          <em>none</em>
        </MenuItem>
        {
          datas.map((data, index) => {
            return <MenuItem key={index} value={data.value}>{data.name}</MenuItem>
          })
        }
      </Select>
    </FormControl>
  )
}

export default renderSelectField;
