import axios from 'axios'
import { getApiUrl } from '../config';

export const axiosInstanceNewModelsParis = axios.create({
  baseURL: getApiUrl()
});
