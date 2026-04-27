import axiosInstance from '../axios/axiosInstance';
import { Card, CardsResponse } from '../types/Card';

export const getCards = async (): Promise<CardsResponse> => {
    const response = await axiosInstance.get<CardsResponse>('/cards');
    return response.data;
};