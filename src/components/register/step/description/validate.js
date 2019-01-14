const validate = values => {
  const errors = {};
  if (!values.hairColor) {
    errors.hairColor = 'Champs requis'
  }
  if (!values.eyesColor) {
    errors.eyesColor = 'Champs requis'
  }
  if (!values.height) {
    errors.height = 'Champs requis'
  }
  return errors;
}

export default validate;
