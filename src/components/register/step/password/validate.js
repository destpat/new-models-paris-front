const validate = values => {
  console.log(values);
  const errors = {};
  if (!values.cgu) {
    errors.cgu = 'Champs requis'
  }
  if (!values.password) {
    errors.password = 'Champs requis'
  }
  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Champs requis'
  }
  if (values.password) {
    if (values.password.length < 8) {
      errors.password = 'Votre mot de passe doit contenir au moins 8 caractères'
    }
    if (!/\d/.test(values.password)) {
      errors.password = 'Votre mot de passe doit contenir au moins un chiffre'
    }
    if (!/.*[a-z].*/.test(values.password)) {
      errors.password = 'Votre mot de passe doit contenir au moins une lettre minuscule'
    }
    if (!/.*[A-Z].*/.test(values.password)) {
      errors.password = 'Votre mot de passe doit contenir au moins une lettre majuscule'
    }
  }
  if (values.password && values.passwordConfirmation) {
    if (values.passwordConfirmation !== values.password) {
      errors.passwordConfirmation = 'Les mots de passe ne sont pas identique'
    }
  }
  return errors;
}

export default validate;
