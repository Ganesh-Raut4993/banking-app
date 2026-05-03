import { useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { useHomeViewModel } from "../viewModels/HomeViewModel";
import { useNavigation } from "@react-navigation/native";
import { TransferStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTransferViewModel } from "../viewModels/TransferViewmodel";

type TransferProps = NativeStackNavigationProp<TransferStackParamList, "Transfer">

const Transfer: React.FC = () => {
    const { payeedata, isLoading: payeesLoading, error: payeesError } = useTransferViewModel()
    const navigation = useNavigation<TransferProps>()
    const { data: accounts, accountDropdownData, isLoading: accountsLoading, error: accountsError } = useHomeViewModel()

    const [fromAccount, setFromAccount] = useState("");
    const [toAccount, setToAccount] = useState("");
    const [amount, setAmount] = useState("");
    const [touchedAmountField, setIsTouchedAmountField] = useState(false)

    // 1. Get amount raw value 
    const rawValue = useMemo(() => Number(amount.replace(/,/g, '')), [amount]);

    const isformValid = () => {
        return fromAccount && toAccount && amount && rawValue <= accounts[0].balance;
    }

    const handleAmountChange = (text: string) => {
        // 1. Remove all non-numeric characters (except decimals if needed)
        const cleanNumber = text.replace(/[^0-9]/g, '');

        // 2. Format with commas
        if (cleanNumber) {
            const formatted = Number(cleanNumber).toLocaleString();
            setAmount(formatted);
        } else {
            setAmount('');
        }
    }

    const handleTransfer = () => {
        // validate form and perform transfer logic here
    }

    const amountError = !amount ? "Amount is required" : rawValue > accounts[0].balance ? "Insufficient balance" : "";

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}
            enableOnAndroid
            extraScrollHeight={240}
            keyboardShouldPersistTaps="handled">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={styles.myAccountContainer}>
                    <Text style={styles.label}>{accounts[0].accountType} Account</Text>
                    <Text style={styles.boldLabel}>{accounts[0].holderName}</Text>
                    <Text>Account number: <Text style={styles.boldLabel}>***{accounts[0].accountNumber.replace(/\d(?=\d{4})/g, '*')}</Text></Text>
                    <Text>Available Balance: <Text style={styles.boldLabel}>₹{accounts[0].balance.toFixed(2)}</Text></Text>
                </View>

                <Text style={styles.label}>From Account*</Text>
                <Dropdown
                    style={styles.dropdown}
                    data={accountDropdownData}
                    labelField="label"
                    valueField="value"
                    placeholder="Select from account"
                    value={fromAccount}
                    onChange={item => setFromAccount(item.value)}
                />

                <Text style={styles.label}>To Account*</Text>
                <Dropdown
                    style={styles.dropdown}
                    data={payeedata}
                    labelField="label"
                    valueField="value"
                    placeholder="Select to account"
                    value={toAccount}
                    onChange={item => setToAccount(item.value)}
                />
                <Text style={styles.label}>Amount*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    value={amount}
                    onChangeText={handleAmountChange}
                    keyboardType="numeric"
                    placeholderTextColor="#999"
                    onBlur={() => setIsTouchedAmountField(true)}
                />

                <Text style={[styles.error, { display: touchedAmountField && amountError ? "flex" : "none" }]}>{amountError}</Text>

                <TouchableOpacity style={styles.transferButton} onPress={() => navigation.navigate("NewPayee")}>
                    <Text style={styles.transferButtonText}>Add new payee</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={!isformValid()}
                    style={[styles.transferButton, { backgroundColor: !isformValid() ? "#ccc" : "#007bff" }]}
                    onPress={handleTransfer}>
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
    myAccountContainer: {
        elevation: 2,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginBottom: 20,
        marginTop: 12
    },
    dropdown: {
        height: 50,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginHorizontal: 16
    },
    label: {
        fontSize: 14,
        marginTop: 12,
        marginBottom: 6,
        color: "#333"
    },
    boldLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#333"
    },
    input: {
        borderWidth: 1,
        borderBlockColor: "#130505",
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 16,
        color: "black",
    },
    transferButton: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 16,
        marginHorizontal: 16,
        marginBottom: 20,
    },
    transferButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    error: {
        color: "red",
        fontSize: 12,
        marginHorizontal: 16,
        marginTop: 4,
    }
})


export default Transfer