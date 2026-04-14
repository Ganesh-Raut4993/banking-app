import { Account } from "../types/account";
import accountsData from '../data/accounts.json';
import axiosInstance from '../axios/axiosInstance';

export const getAccounts = async (): Promise<Account[]> => {
    const response = await axiosInstance.get<Account[]>('/accounts');
    return response.data;
};

export const getAccountById = async (id: string): Promise<Account> => {
    const response = await axiosInstance.get<Account>(`/accounts/${id}`);
    return response.data;
};