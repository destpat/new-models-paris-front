import isEmpty from 'lodash/isEmpty';

const validate = values => {
  const errors = {};
  if (isEmpty(values)) {
    errors.fashionShow = 'Veuillez sélectionner au moins une valeur'
  }
  if (Object.keys(values).every((k) => !values[k])) {
    errors.fashionShow = 'Veuillez sélectionner au moins une valeur'
  }
  return errors;
}

export default validate
