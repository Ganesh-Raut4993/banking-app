// src/viewmodels/HomeCardsViewModel.ts
import { useQuery } from '@tanstack/react-query';
import { getCards } from '../repositories/CardRepository';
import { Card, CardsResponse } from '../types/Card';

export interface CardsViewModelProps {
    data: CardsResponse;
    isLoading: boolean;
    error: unknown;
}

export const useCardsViewModel = (): CardsViewModelProps => {
    const { data, isLoading, error } = useQuery<CardsResponse>({
        queryKey: ['cards'],
        queryFn: getCards,
    });

    return {
        data: data ?? { credit: [], debit: [] },
        isLoading,
        error,
    };
};
