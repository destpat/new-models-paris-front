import { axiosInstanceNewModelsParis } from './axiosConfig';

export const user = {
  createUser : (data) => (axiosInstanceNewModelsParis.post('/create-user', data))
}
