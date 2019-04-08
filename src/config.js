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
    endpoint: 'https://api.newmodelsparis.com'
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
      region: 'eu-west-1',
      userPoolId: 'eu-west-1_YwVAxwoEh',
      userPoolWebClientId: '13tgmshtjrqs3ffmggp4e8f6bk',
      authenticationFlowType: 'USER_PASSWORD_AUTH'
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
