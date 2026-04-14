import { Account } from "../types/account";
import accountsData from '../data/accounts.json';

export const getAccounts = async (): Promise<Account[]> => {
    // Replace with API call later
    return accountsData;
};

export const getAccountById = async (id: string): Promise<Account | undefined> => {
    return accountsData.find(acc => acc.id === id);
};