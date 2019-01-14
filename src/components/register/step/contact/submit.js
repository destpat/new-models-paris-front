import { SubmissionError } from 'redux-form'
import { Auth } from 'aws-amplify';
import { setNextStep } from '../../registerAction'

/* eslint-disable */
const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
/* eslint-enable */

const submit = (values, dispatch, props) => {
  // Faux code pour vérifier si l'email de l'utilisateur existe déjà
  const code = '000000'
  if (!values.phone) {
    throw new SubmissionError({
      phone: 'Champs requis'
    })
  }
  if (values.phone) {
    if (values.phone.replace(/\s/g, '').length !== 10) {
      throw new SubmissionError({
        phone: 'Votre numéro de téléphone doit comporter 10 chiffres'
      })
    }
  }
  if (!values.email) {
    throw new SubmissionError({
      eamil: 'Champs requis'
    })
  }
  if (values.email) {
    if (!validateEmail(values.email)) {
      throw new SubmissionError({
        email: 'Adresse e-mail invalide'
      })
    }
  }
  if (!values.city) {
    throw new SubmissionError({
      city: 'Champs requis'
    })
  }
  if (!values.postCode) {
    throw new SubmissionError({
      postCode: 'Champs requis'
    })
  }
  // Vérfication de l'existance de l'adresse email chez cognito
  return Auth.confirmSignUp(values.email.toLowerCase(), code, {
      /*
      * If set to False, the API will throw an AliasExistsException error if the
      * phone number/email used already exists as an alias with a different user
      */
      forceAliasCreation: false
  }).then(data => console.log(data))
    .catch( err => {
      if (err.code === "UserNotFoundException") {
        dispatch(setNextStep(2))
        props.history.push(`description`)
      } else {
        throw new SubmissionError({
          email: 'Adresse e-mail déjà utilisée'
        })
      }
  })
}

export default submit;
