import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ReachUs: React.FC = () => {

  const handleCall = (mobNum: string) => {
    Linking.openURL(`tel:${mobNum}`);
  }

  const handleEmail = (mailID: string) => {
    Linking.openURL(`mailto:${mailID}`);
  }

  const handleLocation = () => {
    const latitude = 18.5204;
    const longitude = 73.8567;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.card} onPress={() => handleCall('+91 12345 67890')}>
        <Text style={styles.title}>📞 Call Us</Text>
        <Text style={styles.subtitle}>+91 12345 67890</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handleEmail('support@bank.com')}>
        <Text style={styles.title}>📧 Email Us</Text>
        <Text style={styles.subtitle}>support@bank.com</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={handleLocation}>
        <Text style={styles.title}>📍 Visit Branch</Text>
        <Text style={styles.subtitle}>Pune, Maharashtra</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ReachUs;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2', margin: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  subtitle: { fontSize: 14, color: "#555", marginTop: 4 },
});
