import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { colors } from '../styles/theme.js';

export const SplashScreen = ({ onNavigate }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Text style={styles.brandTitle}>VAICTAM</Text>
                    <Text style={styles.brandSubtitle}>Banco de tiempo y talento</Text>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.85}
                        onPress={() => onNavigate && onNavigate('login')}
                    >
                        <Text style={styles.buttonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 48,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandTitle: {
        fontSize: 34,
        fontWeight: '800',
        color: '#22C55E',
        letterSpacing: 1.5,
        marginBottom: 12,
    },
    brandSubtitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#4F46E5',
        letterSpacing: 0.3,
    },
    footer: {
        width: '100%',
        paddingBottom: 24,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 28,
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
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
});

export default SplashScreen;
