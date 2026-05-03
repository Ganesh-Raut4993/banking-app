import { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const NewPayee = () => {
    const [payeeName, setPayeeName] = useState("")
    const [bankName, setBankName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [branch, setBranch] = useState("")
    const [ifscCode, setIfscCode] = useState("")

    const isFormValid = () => {
        return payeeName && bankName && accountNumber && branch && ifscCode;
    }

    const handleAddPayee = () => {
        if (isFormValid()) {
            // Implement logic to add new payee here
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[styles.label, { marginTop: 0 }]}>Fields marked with * are required</Text>

            <Text style={styles.label}>Payee name*</Text>
            <TextInput
                style={styles.input}
                placeholder="Mark John Doe"
                placeholderTextColor="#999"
                value={payeeName}
                onChangeText={setPayeeName}
                returnKeyType="next"
            />

            <Text style={styles.label}>Bank name*</Text>
            <TextInput
                style={styles.input}
                placeholder="Bank of America"
                placeholderTextColor="#999"
                value={bankName}
                onChangeText={setBankName}
                returnKeyType="next"
            />

            <Text style={styles.label}>Account number*</Text>
            <TextInput
                style={styles.input}
                placeholder="1234567890"
                placeholderTextColor="#999"
                value={accountNumber}
                onChangeText={setAccountNumber}
                returnKeyType="next"

            />

            <Text style={styles.label}>Branch*</Text>
            <TextInput
                style={styles.input}
                placeholder="Main Street Branch"
                placeholderTextColor="#999"
                value={branch}
                onChangeText={setBranch}
                returnKeyType="next"
            />
            <Text style={styles.label}>IFSC code*</Text>
            <TextInput
                style={styles.input}
                placeholder="BOFAUS3N"
                placeholderTextColor="#999"
                value={ifscCode}
                onChangeText={setIfscCode}
                returnKeyType="done"
            />
            <TouchableOpacity style={styles.addPayeeButton} onPress={handleAddPayee}>
                <Text style={styles.addPayeeButtonText}>Add Payee</Text>
            </TouchableOpacity>
            <Text style={[styles.label, { fontStyle: "italic" }]}>Note: Payee will be added to your list of saved payees for future transfers.</Text>
        </ScrollView>
    )
}

export default NewPayee;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        marginHorizontal: 8
    },
    label: {
        fontSize: 14,
        marginBottom: 6,
        color: "darkslategray",
        marginTop: 12
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 10,
    },
    addPayeeButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    },
    addPayeeButtonText: {
        color: "white",
        fontWeight: "bold",
    },
})