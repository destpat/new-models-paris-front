import { axiosInstanceNewModelsParis } from './axiosConfig';

export const user = {
  createUser : (data) => (axiosInstanceNewModelsParis.post('/api/signup', data))
}
