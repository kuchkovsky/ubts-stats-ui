import axios from 'axios';
import { setupAxiosAuthHeader, setupAxiosInterceptor } from '../utils/auth';

axios.defaults.baseURL = process.env.API_URL;
setupAxiosAuthHeader();

const setupAxios = store => setupAxiosInterceptor(store);

export default setupAxios;
