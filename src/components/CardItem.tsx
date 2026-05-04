// src/components/CardItem.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from '../types/Card';

const CardItem: React.FC<{ card: Card }> = ({ card }) => {
    const [showNumber, setShowNumber] = useState(false);
    const [showCVV, setShowCVV] = useState(false);

    const maskCardNumber = (num: string) =>
        num.replace(/\d(?=\d{4})/g, '*'); // mask all but last 4 digits

    return (
        <View
            style={[
                styles.card,
                card.type.toLocaleLowerCase() === 'debit' ? styles.debitBackground : styles.creditBackground,
            ]}
        >
            <Text style={styles.cardType}>{card.type} Card</Text>
            <Text style={styles.holder}>{card.holderName.toUpperCase()}</Text>

            {/* Card Number Row */}
            <View style={styles.row}>
                <Text style={styles.number}>
                    {showNumber ? card.cardNumber : maskCardNumber(card.cardNumber)}
                </Text>
                <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={() => setShowNumber(prev => !prev)}
                >
                    <Text style={styles.toggleText}>
                        {showNumber ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Expiry + CVV Row */}
            <View style={styles.row}>
                <Text style={styles.expiry}>Expiry: {card.expiry}</Text>
                <View style={styles.row}>
                    <Text style={styles.cvvLabel}>CVV: {showCVV ? card.cvv : '***'}</Text>
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setShowCVV(prev => !prev)}
                    >
                        <Text style={styles.toggleText}>
                            {showCVV ? 'Hide' : 'Show'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CardItem;

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 12,
        elevation: 4,
        width: '90%', // ensures card fits nicely in carousel
        alignSelf: 'center',
    },
    debitBackground: {
        backgroundColor: '#4facfe', // blue tone
    },
    creditBackground: {
        backgroundColor: '#43e97b', // green tone
    },
    cardType: { fontSize: 18, fontWeight: '700', color: '#fff', marginBottom: 8 },
    holder: { fontSize: 16, color: '#fff', marginBottom: 4 },
    number: { fontSize: 20, letterSpacing: 2, color: '#fff' },
    expiry: { fontSize: 14, color: '#fff' },
    cvvLabel: { fontSize: 14, color: '#fff', marginRight: 8 },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    toggleButton: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        marginLeft: 8,
    },
    toggleText: { color: '#fff', fontWeight: '600' },
});
