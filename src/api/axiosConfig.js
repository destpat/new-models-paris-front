import axios from 'axios'
import { getApiUrl } from '../config';

/*
*  @description
*  Création de l'instance axios pour récupéré la bonne url selon
*  le stage de l'application
*/

export const axiosInstanceNewModelsParis = axios.create({
  baseURL: getApiUrl()
});
