import axiosInstance from '../axios/axiosInstance';
import { Card } from '../types/Card';

export const getCards = async (): Promise<Card[]> => {
    const response = await axiosInstance.get<Card[]>('/cards');
    return response.data;
};