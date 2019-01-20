export const AmplifyConfig = {
  Auth: {
      region: 'eu-central-1',
      identityPoolId: 'eu-central-1:53c4b26c-f336-456d-85b8-1da171026a2e',
      userPoolId: 'eu-central-1_j3KxTsiir',
      userPoolWebClientId: '4dac2ikcptciehmrs7ep2h6nrn',
      authenticationFlowType: 'USER_PASSWORD_AUTH'
  },
  Storage: {
    bucket: 'new-models-paris-upload-photos',
    region: 'eu-central-1',
  }
}

export const getApiUrl = () => {
  const local = {
    // Postman mock url
    url: {
      URL_NEW_MODELS_PARIS: 'https://7bca630a-a9ba-41b8-ae35-8237dad36fc1.mock.pstmn.io/'
    }
  };

  const dev = {
    url: {
      URL_NEW_MODELS_PARIS: 'https://m9ibbc1f11.execute-api.eu-central-1.amazonaws.com/dev'
    }
  };

  const prod = {
    url: {
      URL_NEW_MODELS_PARIS: ''
    }
  };

  switch (process.env.REACT_APP_STAGE) {
    case 'local':
      return local.url.URL_NEW_MODELS_PARIS;
    case 'dev':
      return dev.url.URL_NEW_MODELS_PARIS;
    case 'prod':
      return prod.url.URL_NEW_MODELS_PARIS;
    default:
      console.log('No variable api provide, please tshek your node environement variable');
  }
}
