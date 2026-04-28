import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useHomeViewModel } from "../viewModels/HomeViewModel";
import { useNavigation } from "@react-navigation/native";
import { TransferStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type TransferProps = NativeStackNavigationProp<TransferStackParamList, "Transfer">

const Transfer: React.FC = () => {
    const navigation = useNavigation<TransferProps>()
    const { data: accounts, isLoading, error } = useHomeViewModel()

    const [fromAccount, setFromAccount] = useState("");
    const [toAccount, setToAccount] = useState("");
    const [amount, setAmount] = useState("");

    const [fromAccountList, setFromAccountList] = useState([]);


    const validateForm = () => {
        // Implement validation logic for account number and amount
        return true; // Return true if valid, false otherwise
    }

    const handleTransfer = () => {
        // validate form and perform transfer logic here
        validateForm()
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}
            enableOnAndroid
            extraScrollHeight={300}
            keyboardShouldPersistTaps="handled">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.label}>From Account</Text>

                <TouchableOpacity style={styles.transferButton} onPress={() => navigation.navigate("NewPayee")}>
                    <Text style={styles.transferButtonText}>Add new payee</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transferButton} onPress={handleTransfer}>
                    <Text style={styles.transferButtonText}>Transfer</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 8
    },
    label: { fontSize: 14, marginBottom: 6, color: "#333" },
    input: {
        borderWidth: 1,
        borderBlockColor: "#130505",
        borderRadius: 5,
        padding: 10,
        margin: 20,
        color: "black",
    },
    transferButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        margin: 20,
    },
    transferButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
})


export default Transfer