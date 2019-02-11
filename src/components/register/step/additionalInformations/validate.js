import isEmpty from 'lodash/isEmpty';

const validate = values => {
  const errors = {};
  if (isEmpty(values)) {
    errors.vixen = 'Veuillez sélectionner au moin une valeur'
  }
  if (Object.keys(values).every((k) => !values[k])) {
    errors.vixen = 'Veuillez sélectionner au moin une valeur'
  }
  return errors;
}

export default validate
