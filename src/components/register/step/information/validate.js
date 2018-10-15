const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Champs requis'
  }
  if (!values.lastname) {
    errors.lastname = 'Champs requis'
  }
  if (!values.day) {
    errors.day = 'Champs requis'
  }
  if (!values.month) {
    errors.month = 'Champs requis'
  }
  if (!values.year) {
    errors.year = 'Champs requis'
  }
  return errors;
}

export default validate;
