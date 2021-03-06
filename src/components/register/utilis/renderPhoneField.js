import React from 'react'
import MaskedInput from 'react-text-mask'
import TextField from '@material-ui/core/TextField'


/*
*  @description Component
*  Ajout d'un mask pour les numéro de téléphone
*  et affichage d'un clavier sur mobile
*/

const PhoneMaskInput = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      mask={[/\d/,/\d/,' ',/\d/,/\d/,' ', /\d/,/\d/,' ',/\d/,/\d/,' ',/\d/,/\d/]}
      guide={false}/>
  );
}

const renderPhoneField = ({ input, label, meta, helperText, style, inputProps, type, id}) => {
  let displayError = meta.submitFailed && meta.error ? true : false;
  return (
    <TextField
      id={id}
      label={label}
      helperText={displayError ? meta.error : helperText}
      style={style}
      error={displayError}
      InputProps={{
        inputComponent: PhoneMaskInput
      }}
      type="tel"
      {...input}>
    </TextField>
  )
}

export default renderPhoneField;
