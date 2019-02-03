import { getApiEndPoint } from '../config';
import { API, Storage } from 'aws-amplify';

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
  getPublicUser : (id) => (API.get(apiName, `/get-public-users/${id}`)),
}

export const s3 = {
  getImage: (data) => (Storage.get(data.key, { level: 'protected', identityId: data.id, expires: 6000}))
}
