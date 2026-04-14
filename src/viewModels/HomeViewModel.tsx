import { useEffect, useState } from "react";
import { Account } from "../types/account";
import { accountsRepository } from "../repositories/AccountsRepository";

export const useHomeViewModel = () => {
    // ViewModel logic can be added here in the future
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        accountsRepository.getAccounts()
            .then(fetchedAccounts => {
                console.log('Fetched accounts:', JSON.stringify(fetchedAccounts, null, 2));
                setAccounts(fetchedAccounts);
            });
    }, []);

    return { accounts };
}