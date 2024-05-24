import axios, { AxiosResponse } from 'axios';
import { LoginData } from './Interfaces';
import apiUrl from './apiConfig';

export const login = async (loginData: LoginData): Promise<string> => {
  try {
    const response: AxiosResponse<{ token: string }> = await axios.post( apiUrl +'\/api/v1/login/', loginData);
    return response.data.token;
  } catch (error) {
    throw new Error('Error al iniciar sesión');
  }
};