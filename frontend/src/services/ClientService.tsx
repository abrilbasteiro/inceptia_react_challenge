import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ClientDataInterface, InboundCaseInterface, ClientGridProps } from "./Interfaces";
import apiUrl from "./apiConfig";

const token = localStorage.getItem('token')

export const getClients = async (): Promise<ClientDataInterface[]> => {
  try {
      const config: AxiosRequestConfig = {
        headers: {
          authorization: `JWT ${token}`, 
        },
      };
      const response: AxiosResponse<ClientDataInterface[]> = await axios.get( apiUrl + '/api/v1/clients/', config);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener la lista de clientes');
    }
};

export const getInboundCase = async ({ idClient, dateFrom, dateTo }: ClientGridProps): Promise<InboundCaseInterface> => {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          authorization: `JWT ${token}`, 
        },
      };
      const url = apiUrl + '/api/v1/inbound-case/?bot=' + idClient + '&local_updated__date__gte=' + dateFrom + '&local_updated__date__lte=' + dateTo
      const response: AxiosResponse<InboundCaseInterface> = await axios.get(url, config);

      return response.data;
    } catch (error) {
      throw new Error('Error al obtener la lista de clientes');
    }
};