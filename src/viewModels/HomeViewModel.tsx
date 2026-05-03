import { Account } from "../types/account";
import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "../repositories/AccountsRepository";

export interface HomeViewModelProps {
    data: Account[];
    accountDropdownData: {
        label: string;
        value: string;
    }[];
    isLoading: boolean;
    error: unknown;
}

export const useHomeViewModel = (): HomeViewModelProps => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['accounts'],
        queryFn: getAccounts,
    });

    const accountDropdownData = data?.map(account => ({
        label: `${account.accountType} Account - ****${account.accountNumber.slice(-4)}`,
        value: account.id,
    })) || [];

    return {
        data: data ?? [],
        accountDropdownData,
        isLoading,
        error,
    };
};