const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Champs requis'
  }
  if (!values.phone) {
    errors.phone = 'Champs requis'
  }
  return errors;
}

export default validate;
