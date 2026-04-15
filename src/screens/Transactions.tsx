import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Transactions = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transaction History</Text>
            <Text style={styles.message}>Feature is coming soon!</Text>
        </View>
    );
}

export default Transactions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12
    },
    message: {
        fontSize: 16,
        textAlign: 'center'
    }
});
