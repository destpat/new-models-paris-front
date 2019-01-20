import { Auth } from 'aws-amplify'

export const getApiEndPoint = () => {
  const dev = {
      name: 'newModelsParisDevApi',
      endpoint: 'https://m9ibbc1f11.execute-api.eu-central-1.amazonaws.com/dev'
  };

  const prod = {
    name: 'newModelsParisProdApi',
    endpoint: 'https://m9ibbc1f11.execute-api.eu-central-1.amazonaws.com/prod'
  };

  switch (process.env.REACT_APP_STAGE) {
    case 'dev':
      return dev;
    case 'prod':
      return prod;
    default:
      console.log('No variable api provide, please tshek your node environement variable');
  }
}

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
  },
  API: {
    endpoints: [
      {
        ...getApiEndPoint(),
        custom_header: async () => {
          // Alternatively, with Cognito User Pools use this:
          return {
            Authorization: (await Auth.currentSession()).idToken.jwtToken }
        }
      }
    ]
  }
}
