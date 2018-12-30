/* eslint-disable */
const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validate = values => {
  const errors = {};
  if (!values.phone) {
    errors.phone = 'Champs requis'
  }
  if (values.phone) {
    if (values.phone.replace(/\s/g, '').length !== 10) {
      errors.phone = 'Votre numéro de téléphone doit comporter 10 chiffres'
    }
  }
  if (!values.mail) {
    errors.mail = 'Champs requis'
  }
  if (values.mail) {
    if (!validateEmail(values.mail)) {
      errors.mail = 'Email invalide'
    }
  }
  if (!values.city) {
    errors.city = 'Champs requis'
  }
  if (!values.postcode) {
    errors.postcode = 'Champs requis'
  }
  return errors;
}

export default validate;
