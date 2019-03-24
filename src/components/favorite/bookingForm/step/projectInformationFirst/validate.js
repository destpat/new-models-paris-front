import isEmpty from 'lodash/isEmpty';

const validate = values => {
  const errors = {};
  if (isEmpty(values)) {
    errors.vixen = 'Veuillez sélectionner au moins une valeur'
  }
  if (Object.keys(values).every((k) => !values[k])) {
    errors.vixen = 'Veuillez sélectionner au moins une valeur'
  }
  console.log(errors);
  return errors;
}

export default validate
