import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

const LoadingIndicator: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} />
            <Text style={styles.loading}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    loading: { fontSize: 16, marginTop: 8 }
})

export default LoadingIndicator;