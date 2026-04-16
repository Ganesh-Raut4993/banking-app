// src/api/axiosInstance.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import accountsData from '../data/accounts.json';
import transactionsData from '../data/transactions.json';
import { Account } from '../types/account';
import cardsData from '../data/cards.json';
import { Transaction } from '../types/Transaction';

const axiosInstance = axios.create({
    baseURL: 'http://localhost', // baseURL is required but not actually used
    timeout: 1000,
});

// Attach mock adapter
const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

// Mock GET /accounts
mock.onGet('/accounts').reply(200, accountsData);

// Mock GET /accounts/:id
mock.onGet(/\/accounts\/\w+/).reply(config => {
    const id = config.url?.split('/').pop();
    const account = accountsData.find(acc => acc.id === id);
    return account ? [200, account] : [404];
});


// Cards
mock.onGet('/cards').reply(200, cardsData);
mock.onGet(/\/cards\/\w+/).reply(config => {
    const id = config.url?.split('/').pop();
    const card = cardsData.find(c => c.id === id);
    return card ? [200, card] : [404];
});

// ✅ Transactions
mock.onGet('/transactions').reply(200, transactionsData);
mock.onGet(/\/transactions\/\w+/).reply(config => {
    const id = config.url?.split('/').pop();
    const transaction = transactionsData.find(t => t.id === id);
    return transaction ? [200, transaction] : [404];
});

export default axiosInstance;
