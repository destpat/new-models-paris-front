import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({ input, label, meta, helperText, style }) => {
  let displayError = meta.submitFailed && meta.error ? true : false;
  return (
    <TextField
      label={label}
      helperText={displayError ? meta.error : helperText}
      style={style}
      error={displayError}
      {...input}
    />)
}

export default renderTextField;
