import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useBankingStore } from '../store/useBankingStore';
import { Account } from '../types/account';

const Dashboard = () => {
 
  const accounts = useBankingStore((state) => state.accounts);

  console.log('Accounts from store:', JSON.stringify(accounts, null, 2));
  
 const renderItem = useCallback(({ item }: { item: Account }) => (
    <View style = {styles.listItem }>
      <Text style= {styles.accountName}>{item.name}</Text>
      <Text style = {styles.accountStatus}>Status: {item.status}</Text>
      <Text style = {styles.accountBalance}>Account balance: ₹{item.balance}</Text>
    </View>
  ),[]);

  return (
   <View style = {styles.container}>
      <Text style = {styles.myAccounts}>My Accounts</Text>
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  myAccounts: {
   marginBottom: 16,
   fontSize: 24,
   fontWeight: 'bold',
   color: '#333',
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    borderRadius: 8,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  accountStatus: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  accountBalance: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 8,
  },
});
