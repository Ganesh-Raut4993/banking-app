// src/viewmodels/useTransactions.ts
import { useQuery } from '@tanstack/react-query';
import { Transaction } from '../types/Transaction';
import { getTransactions } from '../repositories/TransactionRepository';
import { useMemo, useState } from 'react';

export interface TransactionHistoryViewModelProps {
    data: Transaction[];
    isLoading: boolean;
    error: unknown;
    filter: 'ALL' | 'CREDIT' | 'DEBIT';
    setFilter: (filter: 'ALL' | 'CREDIT' | 'DEBIT') => void;
}

export const useTransactionHistoryViewModel = (): TransactionHistoryViewModelProps => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions,
    });

    const [filter, setFilter] = useState<'ALL' | 'CREDIT' | 'DEBIT'>('ALL');

    const filteredData = useMemo(() => {
        if (!data) return [];
        const sorted = [...data].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        if (filter === 'ALL') return sorted;
        return sorted.filter(txn => txn.type.toLocaleLowerCase() === filter.toLocaleLowerCase());
    }, [data, filter]);

    return {
        data: filteredData,
        isLoading,
        error,
        filter,
        setFilter,
    };
};