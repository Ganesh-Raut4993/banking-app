// src/repositories/TransactionRepository.ts
import axiosInstance from '../axios/axiosInstance';
import { Transaction } from '../types/Transaction';

export const getTransactions = async (): Promise<Transaction[]> => {
    const response = await axiosInstance.get('/transactions');
    return response.data;
};

export const getTransactionById = async (id: string): Promise<Transaction> => {
    const response = await axiosInstance.get(`/transactions/${id}`);
    return response.data;
};
