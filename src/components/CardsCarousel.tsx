import React, { useState } from 'react';
import {
    View,
    FlatList,
    Dimensions,
    StyleSheet,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from 'react-native';
import CardItem from '../components/CardItem';
import { Card } from '../types/Card';

const { width } = Dimensions.get('window');

interface Props {
    cards: Card[];
}

const CardsCarousel: React.FC<Props> = ({ cards }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(offsetX / width);
        setActiveIndex(currentIndex);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cards}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={{ width }}>
                        <CardItem card={item} />
                    </View>
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={width}              // snap exactly one card per swipe
                snapToAlignment="center"
                onScroll={handleScroll}
                scrollEventThrottle={16}
                style={{ flexGrow: 0 }}
            />

            {/* Dot Indicators */}
            <View style={styles.dotsContainer}>
                {cards.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default CardsCarousel;

const styles = StyleSheet.create({
    container: { flex: 1 },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 12,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 6,
    },
    activeDot: {
        backgroundColor: '#007AFF',
    },
    inactiveDot: {
        backgroundColor: '#C0C0C0',
    },
});
