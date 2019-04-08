import { getApiEndPoint } from '../config';
import { API } from 'aws-amplify';

const apiName = getApiEndPoint().name

/*
*  @description
*  Ajout de toute les routes utilisé pour communiquer avec
*  l'api
*/
export const user = {
  createUser : (data) => (API.post(apiName, '/create-user', {
    body: {
      ...data
    }
  })),
  getPublicUsers : (sex) => (API.get(apiName, '/get-public-users', {
    queryStringParameters: {
      sex
    }
  })),
  getPublicUser : (id) => (API.get(apiName, `/get-public-user/${id}`)),
  uploadPhoto: (data) => (API.post(apiName, `/upload-photo`, {
    body: {
      ...data
    }
  })),
}

export const enquire = {
  request : (data) => (API.post(apiName, '/enquire', {
    body: {
      ...data
    }
  })),
}
