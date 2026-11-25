import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import { colors } from '../styles/theme.js';

export const LoginScreen = ({ onNavigate }) => {
    const [email, setEmail] = useState('max@vaictam.upq.mx');
    const [password, setPassword] = useState('password123');
    const [confirmPassword, setConfirmPassword] = useState('password123');
    const [errorMsg, setErrorMsg] = useState('');

    const handleStart = () => {
        if (!email || !email.includes('@')) {
            const err = 'Por favor ingresa un correo electrónico válido con @.';
            setErrorMsg(err);
            if (Platform.OS !== 'web') Alert.alert('Error (Regla R10)', err);
            return;
        }

        if (!password) {
            const err = 'Por favor ingresa una contraseña.';
            setErrorMsg(err);
            return;
        }

        if (password !== confirmPassword) {
            const err = 'Las contraseñas no coinciden.';
            setErrorMsg(err);
            if (Platform.OS !== 'web') Alert.alert('Error', err);
            return;
        }

        setErrorMsg('');
        if (Platform.OS !== 'web') {
            Alert.alert('¡Bienvenido!', 'Credenciales verificadas exitosamente.');
        }
        onNavigate && onNavigate('home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.keyboardView}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>¡Hola!</Text>

                    {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Correo Electrónico</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="ejemplo@correo.com"
                                placeholderTextColor="#9CA3AF"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="••••••••"
                                placeholderTextColor="#9CA3AF"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Confirmar contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="••••••••"
                                placeholderTextColor="#9CA3AF"
                                secureTextEntry
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.85}
                            onPress={handleStart}
                        >
                            <Text style={styles.buttonText}>Comenzar</Text>
                        </TouchableOpacity>
                        {onNavigate ? (
                            <TouchableOpacity
                                style={styles.registerButton}
                                onPress={() => onNavigate('Registro')}
                            >
                                <Text style={styles.registerText}>Crear una cuenta</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#1E293B',
        marginBottom: 36,
    },
    errorText: {
        color: '#EF4444',
        fontSize: 13,
        marginBottom: 16,
        textAlign: 'center',
    },
    form: {
        gap: 16,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        color: '#64748B',
        fontWeight: '500',
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#EAEAEA',
        borderRadius: 20,
        height: 48,
        paddingHorizontal: 20,
        fontSize: 14,
        color: '#1E293B',
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 28,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        shadowColor: '#0084FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    registerButton: {
        alignItems: 'center',
        paddingVertical: 8,
    },
    registerText: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '600',
    },
});

export default LoginScreen;
