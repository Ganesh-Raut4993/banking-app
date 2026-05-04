import { useState } from "react"
import { StyleSheet, Text, TextInput, Button, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

const Login: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState("user@bank.com")
    const [password, setPassword] = useState("12345678")
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Derived validity state
    const isFormValid = emailError === "" && passwordError === "" && email.trim() !== "" && password.trim() !== ""

    const handleEmailChange = (text: string) => {
        setEmail(text);
        if (!text.trim()) {
            setEmailError("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
            setEmailError("Please enter valid mail id");
        } else {
            setEmailError("");
        }
    }
    const handlePasswordChange = (text: string) => {
        setPassword(text);
        if (!text.trim()) {
            setPasswordError("Password is required");
        } else if (text.trim().length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleLogin = () => {
        if (emailError || passwordError) return;

        // Replace with API call
        if (email === 'user@bank.com' && password === '12345678') {
            onLoginSuccess();
        } else {
            setPasswordError('Incorrect email or password');
        }
    }
    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            enableOnAndroid
            extraScrollHeight={300}
            keyboardShouldPersistTaps="handled"
        >
            <Text style={styles.heading}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
            />
            {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
            />
            {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

            <Button
                title="Login"
                onPress={handleLogin}
                disabled={!isFormValid} />
            <Text style={styles.notAUserText}>Not a user? <Text onPress={() => Alert.alert("Coming soon...")} style={styles.createAccountText}>Create Account</Text></Text>
        </KeyboardAwareScrollView>
    )
}

export default Login
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 24
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: 'white'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 22,
        marginBottom: 12,
        borderRadius: 6,
        color: 'white'
    },
    error: {
        color: 'red',
        marginBottom: 8,
        fontSize: 14
    },
    notAUserText: {
        color: "#ccc",
        marginTop: 8,
        textAlign: 'center'
    },
    createAccountText: {
        color: 'aqua',
        padding: 12
    }
})