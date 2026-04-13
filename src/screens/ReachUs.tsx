import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReachUs: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
    </View>
  );
};

export default ReachUs;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f2f2f2' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
});
