import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { BottomTabParamList } from '../types/navigation';
import { useBankingStore } from '../store/useBankingStore';

type DetailsRouteProp = RouteProp<BottomTabParamList, 'AccountDetails'>;

interface Props {
  route: DetailsRouteProp;
}

const AccountDetails: React.FC<Props> = ({ route }) => {
  const { accountId } = route.params;
  const account = useBankingStore((state) =>
    state.accounts.find((acc) => acc.id === accountId)
  );

  if (!account) {
    return <Text style={styles.error}>Account not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.information}>Holder: {account.holderName}</Text>
      <Text style={styles.information}>Balance: ₹{account.balance}</Text>
      <Text style={styles.information}>Type: {account.accountType}</Text>
      <Text style={styles.information}>Number: {account.accountNumber}</Text>
      <Text style={styles.information}>Branch Code: {account.branchCode}</Text>
      <Text style={styles.information}>Branch Name: {account.branchName}</Text>
      <Text style={styles.information}>IFSC Code: {account.ifscCode}</Text>
      <Text style={styles.information}>MMID: {account.mmid}</Text>
    </View>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
},
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  error: { fontSize: 18, color: 'red', textAlign: 'center', marginTop: 20 },
  information: {
    fontSize: 16, marginBottom: 6, borderRadius: 8,   
  }
});
