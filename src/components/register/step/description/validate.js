const validate = values => {
  const errors = {};
  if (!values.hairsColors) {
    errors.hairsColors = 'Champs requis'
  }
  if (!values.eyesColors) {
    errors.eyesColors = 'Champs requis'
  }
  if (!values.height) {
    errors.height = 'Champs requis'
  }
  return errors;
}

export default validate;
