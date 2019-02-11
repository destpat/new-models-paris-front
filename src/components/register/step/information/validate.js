import moment from 'moment';

const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Champs requis'
  }
  if (!values.lastname) {
    errors.lastname = 'Champs requis'
  }
  if (!values.sex) {
    errors.sex = 'Champs requis'
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
  if (values.day && values.month && values.year) {
    let birthdate = `${values.year}-${values.month}-${values.day}`;
    if (moment().diff(birthdate, 'years') < 18) {
      errors.year = 'Seules les personnes majeures peuvent s\'inscrire';
    }
  }
  return errors;
}

export default validate;
