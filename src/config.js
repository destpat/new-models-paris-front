import { Auth } from 'aws-amplify'

export const getApiEndPoint = () => {
  const local = {
      name: 'newModelsParisLocalApi',
      endpoint: 'http://localhost:3000'
  };
  const dev = {
      name: 'newModelsParisDevApi',
      endpoint: 'https://api-dev.newmodelsparis.com'
  };

  const prod = {
    name: 'newModelsParisProdApi',
    endpoint: 'http://api.newmodelsparis.com'
  };

  switch (process.env.REACT_APP_STAGE) {
    case 'local':
      return local;
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
          let auth;
          try {
          auth = (await Auth.currentSession()).idToken.jwtToken
            return {
              Authorization: auth
            }
          } catch (e) {
            auth = 'fakeToken'
          }
        }

      }
    ]
  }
}
