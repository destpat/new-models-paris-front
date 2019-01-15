import { axiosInstanceNewModelsParis } from './axiosConfig';

/*
*  @description
*  Ajout de toute les routes utilisé pour communiquer avec
*  vers l'api
*/
export const user = {
  createUser : (data) => (axiosInstanceNewModelsParis.post('/create-user', data))
}
