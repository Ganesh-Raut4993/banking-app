import { useQuery } from "@tanstack/react-query";
import { Payee } from "../types/Payee";
import { getPayeeList } from "../repositories/PayeeRepository";

export interface TransferViewModelProps {
    payeedata: {
        label: string;
        value: string;
    }[];
    isLoading: boolean;
    error: unknown;
}

export const useTransferViewModel = (): TransferViewModelProps => {
    const { data, isLoading, error } = useQuery<Payee[]>({
        queryKey: ['payees'],
        queryFn: getPayeeList,
    });

    const payeedata = data?.map(payee => ({
        label: `${payee.name} - ${payee.bankName}`,
        value: payee.id,
    })) || [];

    return {
        payeedata: payeedata || [],
        isLoading,
        error: error || null
    }
}