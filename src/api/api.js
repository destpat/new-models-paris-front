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
  getPublicUsers : (data) => (API.get(apiName, '/get-public-user', {
    queryStringParameters: {
      'sex' : data
    }
  })),
}

export const s3 = {
  getImage: (data) => (Storage.get(data.key, { level: 'protected', identityId: data.id }))
}
