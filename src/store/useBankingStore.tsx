import { create } from 'zustand';
import { Account } from '../types/account';

// import accountsData from '../data/accounts.json';
import accountsData from '../data/accounts.json';


interface BankingState {
  accounts: Account[];
  updateBalance: (id: string, amount: number) => void;
}

export const useBankingStore = create<BankingState>((set) => ({
  accounts: accountsData as Account[],
  updateBalance: (id, amount) =>
    set((state) => ({
      accounts: state.accounts.map((acc) =>
        acc.id === id ? { ...acc, balance: acc.balance + amount } : acc
      ),
    })),
}));