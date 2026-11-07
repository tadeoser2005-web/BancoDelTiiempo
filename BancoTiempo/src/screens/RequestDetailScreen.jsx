import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    Alert,
    Platform,
} from 'react-native';
import { colors } from '../styles/theme.js';

export const RequestDetailScreen = ({
                                        onRequestUpdate,
                                    }) => {
    const [status, setStatus] = useState('Pendiente');
    const [notice, setNotice] = useState('');

    const handleAccept = () => {
        setStatus('Aceptada');
        setNotice('Solicitud aceptada. Los créditos han sido transferidos al concretar el servicio.');
        if (onRequestUpdate) onRequestUpdate('aceptada');
        if (Platform.OS !== 'web') Alert.alert('Aceptada', 'Has aceptado la solicitud con éxito.');
    };

    const handleReject = () => {
        setStatus('Rechazada');
        setNotice('Solicitud rechazada. Los créditos retenidos se devolvieron al solicitante.');
        if (onRequestUpdate) onRequestUpdate('rechazada');
        if (Platform.OS !== 'web') Alert.alert('Rechazada', 'La solicitud ha sido rechazada.');
    };

    const handleCancel = () => {
        setStatus('Cancelada');
        setNotice('Solicitud cancelada. Se regresaron los fondos al solicitante.');
        if (onRequestUpdate) onRequestUpdate('cancelada');
        if (Platform.OS !== 'web') Alert.alert('Cancelada', 'Solicitud cancelada con éxito.');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.headerRow}>
                    <Text style={styles.backChevron}>‹</Text>
                    <Text style={styles.headerTitle}>Detalle de Solicitud</Text>
                </View>

                {notice ? <Text style={styles.noticeBanner}>{notice}</Text> : null}

                <View style={styles.userSection}>
                    <Image
                        source={{ }}
                        style={styles.avatar}
                    />
                    <Text style={styles.userName}>Ramiro Ramirez</Text>
                </View>

                <View style={styles.metaList}>
                    <View style={styles.metaRow}>
                        <Text style={styles.metaLabel}>Estado:</Text>
                        <View style={[
                            styles.statusBadge,
                            status === 'Pendiente' ? styles.badgePending :
                                status === 'Aceptada' ? styles.badgeAccepted :
                                    status === 'Rechazada' ? styles.badgeRejected : styles.badgeCanceled
                        ]}>
                            <Text style={styles.statusBadgeText}>{status}</Text>
                        </View>
                    </View>

                    <View style={styles.metaRow}>
                        <Text style={styles.metaLabel}>Fecha:</Text>
                        <Text style={styles.metaValue}>04/10/2026</Text>
                    </View>

                    <View style={styles.metaRow}>
                        <Text style={styles.metaLabel}>Hora:</Text>
                        <Text style={styles.metaValue}>11:42 - 1:00</Text>
                    </View>
                </View>

                <View style={styles.messageSection}>
                    <Text style={styles.messageLabel}>Mensaje:</Text>
                    <View style={styles.messageCard}>
                        <Text style={styles.messageText}>Quiero tomar el servicio</Text>
                    </View>
                </View>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        style={[styles.btn, styles.btnBlue]}
                        activeOpacity={0.85}
                        onPress={handleAccept}
                    >
                        <Text style={styles.btnTextWhite}>Aceptar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btn, styles.btnDark]}
                        activeOpacity={0.85}
                        onPress={handleReject}
                    >
                        <Text style={styles.btnTextWhite}>Rechazar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btn, styles.btnGray]}
                        activeOpacity={0.85}
                        onPress={handleCancel}
                    >
                        <Text style={styles.btnTextMuted}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 40,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backChevron: {
        fontSize: 32,
        color: '#1E293B',
        marginRight: 8,
        fontWeight: '300',
        marginTop: -4,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1E293B',
    },
    noticeBanner: {
        backgroundColor: '#F0FDF4',
        borderColor: '#BBF7D0',
        borderWidth: 1,
        color: '#166534',
        padding: 10,
        borderRadius: 12,
        fontSize: 12,
        marginBottom: 16,
        textAlign: 'center',
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginBottom: 24,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#F1F5F9',
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E293B',
    },
    metaList: {
        gap: 14,
        marginBottom: 24,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    metaLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
    },
    metaValue: {
        fontSize: 14,
        color: '#64748B',
        fontWeight: '500',
    },
    statusBadge: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderRadius: 12,
    },
    badgePending: {
        backgroundColor: '#EF4444',
    },
    badgeAccepted: {
        backgroundColor: '#10B981',
    },
    badgeRejected: {
        backgroundColor: '#6B7280',
    },
    badgeCanceled: {
        backgroundColor: '#9CA3AF',
    },
    statusBadgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    messageSection: {
        marginBottom: 28,
    },
    messageLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 8,
    },
    messageCard: {
        backgroundColor: '#F8FAFC',
        borderRadius: 18,
        padding: 20,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        minHeight: 80,
        justifyContent: 'center',
    },
    messageText: {
        fontSize: 14,
        color: '#475569',
    },
    actionsContainer: {
        gap: 12,
    },
    btn: {
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlue: {
        backgroundColor: colors.primary,
    },
    btnDark: {
        backgroundColor: '#374151',
    },
    btnGray: {
        backgroundColor: '#E5E7EB',
    },
    btnGreen: {
        backgroundColor: '#10B981',
        marginTop: 6,
    },
    btnTextWhite: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },
    btnTextMuted: {
        color: '#6B7280',
        fontSize: 15,
        fontWeight: '600',
    },
});

export default RequestDetailScreen;
