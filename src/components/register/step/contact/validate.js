const validate = values => {
  const errors = {};
  if (!values.phone) {
    errors.phone = 'Champs requis'
  }
  if (!values.mail) {
    errors.mail = 'Champs requis'
  }
  if (!values.city) {
    errors.city = 'Champs requis'
  }
  return errors;
}

export default validate;
