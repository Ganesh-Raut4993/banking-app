import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cards: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cards</Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
});
