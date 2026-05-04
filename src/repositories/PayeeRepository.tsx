import axiosInstance from '../axios/axiosInstance';
import { Card, CardsResponse } from '../types/Card';
import { Payee } from '../types/Payee';

export const getCards = async (): Promise<CardsResponse> => {
    const response = await axiosInstance.get<CardsResponse>('/cards');
    return response.data;
};


export const getPayeeList = async (): Promise<Payee[]> => {
    const response = await axiosInstance.get<Payee[]>('/payees');
    return response.data;
}