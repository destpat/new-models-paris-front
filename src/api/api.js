import { getApiEndPoint } from '../config';
import { API } from 'aws-amplify';

const apiName = getApiEndPoint().name

/*
*  @description
*  Ajout de toute les routes utilisé pour communiquer avec
*  vers l'api
*/
export const user = {
  createUser : (data) => (API.post(apiName, '/create-user', {
    body: {
      ...data
    }
  }))
}
