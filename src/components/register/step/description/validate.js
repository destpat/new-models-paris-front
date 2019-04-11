const validate = values => {
  const errors = {};
  if (!values.hairColor) {
    errors.hairColor = 'Champs requis'
  }
  if (!values.eyesColor) {
    errors.eyesColor = 'Champs requis'
  }
  if (!values.shoeSize) {
    errors.shoeSize = 'Champs requis'
  }
  if (!values.height) {
    errors.height = 'Champs requis'
  }
  if (+values.height > 250) {
    errors.height = 'Ta hauteur nous semble incorrecte 🤔'
  }
  if (+values.height < 0) {
    errors.height = 'Ta hauteur nous semble incorrecte 🤔 ( elle ne peut être négative )'
  }
  return errors;
}

export default validate;
