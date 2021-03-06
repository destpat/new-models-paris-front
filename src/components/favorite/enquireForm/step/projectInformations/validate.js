const validate = values => {
  const errors = {}
  if (!values.numberOfModels) {
    errors.numberOfModels = 'Champs requis'
  }
  if (!values.dateOfProject) {
    errors.dateOfProject = 'Champs requis'
  }
  if (!values.startTime) {
    errors.startTime = 'Champs requis'
  }
  if (!values.endTime) {
    errors.endTime = 'Champs requis'
  }
  if (!values.city) {
    errors.city = 'Champs requis'
  }
  if (!values.description) {
    errors.description = 'Veuillez ajouter une description'
  }
  return errors;
}

export default validate
