import { Account } from "../types/account";
import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "../repositories/AccountsRepository";

export interface HomeViewModelProps {
    data: Account[];
    isLoading: boolean;
    error: unknown;
}

export const useHomeViewModel = (): HomeViewModelProps => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['accounts'],
        queryFn: getAccounts,
    });

    return {
        data: data ?? [],
        isLoading,
        error,
    };
};