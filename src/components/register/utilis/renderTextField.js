import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({ input, label, meta, helperText, style, inputProps, type }) => {
  let displayError = meta.submitFailed && meta.error ? true : false;
  return (
    <TextField
      label={label}
      helperText={displayError ? meta.error : helperText}
      style={style}
      error={displayError}
      InputProps={inputProps}
      type={type}
      {...input}
    />
  )
}

export default renderTextField;
