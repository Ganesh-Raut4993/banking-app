import { Account } from "../types/account";
import { useQuery } from "@tanstack/react-query";
import { getAccountById } from "../repositories/AccountsRepository";


export interface DetailsViewModelProps {
    data: Account | undefined;
    isLoading: boolean;
    error: unknown;
}

export const useDetailsViewModel = (accountId: string): DetailsViewModelProps => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['account', accountId],
        queryFn: () => getAccountById(accountId),
    });

    return {
        data,
        isLoading,
        error,
    };
}
