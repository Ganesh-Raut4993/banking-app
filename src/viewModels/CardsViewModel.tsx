// src/viewmodels/HomeCardsViewModel.ts
import { useQuery } from '@tanstack/react-query';
import { getCards } from '../repositories/CardRepository';
import { Card } from '../types/Card';

export interface CardsViewModelProps {
    data: Card[];
    isLoading: boolean;
    error: unknown;
}

export const useCardsViewModel = (): CardsViewModelProps => {
    const { data, isLoading, error } = useQuery<Card[]>({
        queryKey: ['cards'],
        queryFn: getCards,
    });

    return {
        data: data ?? [],
        isLoading,
        error,
    };
};
