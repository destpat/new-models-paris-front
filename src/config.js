const getApiUrl = () => {
  const local = {
    // Postman mock url
    url: {
      URL_NEW_MODELS_PARIS: 'https://7bca630a-a9ba-41b8-ae35-8237dad36fc1.mock.pstmn.io/',
    }
  };

  const dev = {
    url: {
      URL_NEW_MODELS_PARIS: '',
    }
  };

  const prod = {
    url: {
      URL_NEW_MODELS_PARIS: '',
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

export default getApiUrl;
