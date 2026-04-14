import { Account } from "../types/account";
import accountsData from '../data/accounts.json';

export const accountsRepository = {
    getAccounts: async (): Promise<Account[]> => {
        return accountsData;
    },
    getAccountById: async (id: string): Promise<Account | undefined> => {
        return accountsData.find(acc => acc.id === id);
    }
}