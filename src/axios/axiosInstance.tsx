// src/api/axiosInstance.ts
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import accountsData from '../data/accounts.json';
import { Account } from '../types/account';

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

export default axiosInstance;
