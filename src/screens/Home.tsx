import React, { useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Account } from '../types/account';
import { BottomTabParamList } from '../types/navigation';
import { useHomeViewModel } from '../viewModels/HomeViewModel';
import LoadingIndicator from '../components/LoadingIndicator';

type NavigationProp = BottomTabNavigationProp<BottomTabParamList, 'HomeStack'>;

const Home: React.FC = () => {
  const { data: accounts, isLoading, error } = useHomeViewModel();
  const navigation = useNavigation<NavigationProp>();

  const renderItem = useCallback(({ item }: { item: Account }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('AccountDetails', { accountId: item.id })}
    >
      <Text style={styles.name}>{item.holderName}</Text>
      <Text>Balance: ₹{item.balance}</Text>
      <Text>Type: {item.accountType}</Text>
      <Text>Number: {item.accountNumber}</Text>
    </TouchableOpacity>
  ), [navigation]);

  if (isLoading) {
    return <LoadingIndicator />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f2f2f2' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: { backgroundColor: '#fff', padding: 16, marginBottom: 12, borderRadius: 8, elevation: 3 },
  name: { fontSize: 18, fontWeight: '600', marginBottom: 4 }
});
