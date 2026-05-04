// src/screens/TransactionHistory.tsx
import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Transaction } from '../types/Transaction';
import { useTransactionHistoryViewModel } from '../viewModels/TransactionHistoryViewModel';
import LoadingIndicator from '../components/LoadingIndicator';

const TransactionHistory: React.FC = () => {
    const { data, isLoading, error, filter, setFilter } = useTransactionHistoryViewModel();

    const renderItem = useCallback(({ item }: { item: Transaction }) => (
        <View style={styles.item}>
            <View style={styles.row}>
                <Text style={styles.merchant}>{item.merchant}</Text>
                <Text style={item.type === 'CREDIT' ? styles.credit : styles.debit}>
                    {item.type === 'CREDIT' ? `+₹${item.amount}` : `-₹${item.amount}`}
                </Text>
            </View>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.status}>{item.status}</Text>
        </View>
    ), []);

    if (isLoading) return <LoadingIndicator />;
    if (error) return <Text style={styles.error}>Failed to load transactions</Text>;

    return (
        <View style={styles.container}>
            <View style={styles.filterRow}>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'ALL' && styles.activeFilter]}
                    onPress={() => setFilter('ALL')}
                >
                    <Text style={styles.filterText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'CREDIT' && styles.activeFilter]}
                    onPress={() => setFilter('CREDIT')}
                >
                    <Text style={styles.filterText}>Incoming</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'DEBIT' && styles.activeFilter]}
                    onPress={() => setFilter('DEBIT')}
                >
                    <Text style={styles.filterText}>Outgoing</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                keyExtractor={item => item.transaction_id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
};

export default TransactionHistory;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 16 },
    filterRow: { flexDirection: 'row', marginBottom: 12 },
    filterButton: {
        flex: 1,
        paddingVertical: 8,
        marginHorizontal: 4,
        borderRadius: 6,
        backgroundColor: '#e5e7eb',
        alignItems: 'center',
    },
    activeFilter: { backgroundColor: '#2563eb' },
    filterText: { color: '#111', fontWeight: '600' },
    item: { paddingVertical: 12 },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    merchant: { fontSize: 16, fontWeight: '600', color: '#333' },
    category: { fontSize: 14, color: '#6b7280', marginTop: 2 },
    date: { fontSize: 12, color: '#9ca3af', marginTop: 2 },
    status: { fontSize: 12, fontWeight: '500', marginTop: 2, color: '#2563eb' },
    credit: { color: '#16a34a', fontWeight: '600' },
    debit: { color: '#dc2626', fontWeight: '600' },
    separator: { height: 1, backgroundColor: '#e5e7eb' },
    error: { flex: 1, textAlign: 'center', marginTop: 20, color: 'red' },
});
