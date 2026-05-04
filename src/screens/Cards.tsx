import React from 'react';
import { View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import { useCardsViewModel } from '../viewModels/CardsViewModel';
import { Card } from '../types/Card';
import CardItem from '../components/CardItem';
import LoadingIndicator from '../components/LoadingIndicator';

const Cards: React.FC = () => {
  const { data: cards, isLoading, error } = useCardsViewModel()

  const sections = [
    { title: "Credit Cards", data: cards.credit },
    { title: "Debit Cards", data: cards.debit },
  ];

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  const renderCards = ({ item }: { item: Card }) => (
    <View style={{ flex: 1, }}>
      <CardItem card={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderCards}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
      />
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  sectionTitle: { fontSize: 18, fontWeight: '600', backgroundColor: '#e0e0e0', padding: 10 },
});
