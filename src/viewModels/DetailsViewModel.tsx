import { useEffect, useState } from "react";
import { Account } from "../types/account";
import { accountsRepository } from "../repositories/AccountsRepository";


export const useDetailsViewModel = (accountId: string) => {
    const [account, setAccount] = useState<Account | undefined>();

    // Fetch account details based on accountId
    useEffect(() => {
        accountsRepository.getAccountById(accountId).then(setAccount)
    }, [accountId]);

    return { account };
}
