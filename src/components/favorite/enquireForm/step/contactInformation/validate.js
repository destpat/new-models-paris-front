/* eslint-disable */
const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
/* eslint-enable */

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Champs requis'
  }
  if (!values.lastname) {
    errors.lastname = 'Champs requis'
  }
  if (!values.artistName) {
    errors.artistName = 'Champs requis'
  }
  if (!values.email) {
    errors.email = 'Champs requis'
  }
  if (!validateEmail(values.email)) {
    errors.email = 'Adresse email invalide'
  }
  if (!values.phone) {
    errors.phone = 'Champs requis'
  }
  return errors;
}

export default validate;
