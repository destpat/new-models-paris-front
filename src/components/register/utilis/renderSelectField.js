import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import detectingMobileDevice from './detectingMobileDevice';

/*
*  @description Component
*  Gestion des select rendu différent pour les mobiles,
*  afin d'optimiser l'intégration
*/

const renderSelectField = ({ datas, input, label, meta, helperText, classes, style, id }) => {
  let displayError = meta.submitFailed && meta.error ? true : false;
  if (detectingMobileDevice) {
    return (
      <FormControl error={displayError} style={style}>
        <InputLabel>{label}</InputLabel>
        <NativeSelect {...input} id={id}>
          <option value="" />
          {
            datas.map((data, index) => {
              return <option key={index} value={data.value}>{data.name}</option>
            })
          }
        </NativeSelect>
        <FormHelperText>{displayError ? meta.error : null}</FormHelperText>
      </FormControl>
    )
  } else {
    return (
      <FormControl error={displayError} style={style}>
        <InputLabel>{label}</InputLabel>
        <Select {...input}
                data-cy={id}
                error={displayError}>
          {
            datas.map((data, index) => {
              return <MenuItem key={index} value={data.value} data-cy={`${id}-${index}`}>{data.name}</MenuItem>
            })
          }
        </Select>
        {
          displayError ?
            <FormHelperText>{ meta.error }</FormHelperText>
          : null
        }
      </FormControl>
      )
    }
  }
export default renderSelectField;
