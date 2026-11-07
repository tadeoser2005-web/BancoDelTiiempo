import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';

export const ActiveExchangeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Intercambio Activo</Text>
                    <Text style={styles.headerSub}>Seguimiento en tiempo real</Text>
                </View>

                <View style={styles.statusCard}>
                    <View style={styles.statusPill}>
                        <Text style={styles.statusDot}>●</Text>
                        <Text style={styles.statusPillText}>En Progreso</Text>
                    </View>
                    <Text style={styles.serviceName}>Asesoria en Estructuras de Datos</Text>
                    <Text style={styles.timeRemaining}>Tiempo acordado: 1.0 hora (1 credito)</Text>
                </View>

                <View style={styles.timerCircle}>
                    <Text style={styles.timerText}>38:45</Text>
                    <Text style={styles.timerLabel}>min restantes</Text>
                </View>

                <View style={styles.participantsCard}>
                    <Text style={styles.sectionTitle}>Participantes del Trueque</Text>

                    <View style={styles.participantRow}>
                        <Image
                            source={{ }}//le podemos meter una imagen para el avatar
                            style={styles.avatar}
                        />
                        <View style={styles.participantInfo}>
                            <Text style={styles.participantName}>Sebastian Medina (Prestador)</Text>
                            <Text style={styles.participantMeta}>Ing. en Tecnologías de la Información</Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.participantRow}>
                        <Image
                            source={{}}//podemos poner un avatar
                            style={styles.avatar}
                        />
                        <View style={styles.participantInfo}>
                            <Text style={styles.participantName}>Max Barreto (Solicitante)</Text>
                            <Text style={styles.participantMeta}>1 credito temporalmente congelado </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.finishBtn}>
                    <Text style={styles.finishBtnText}>Concluir y Liberar Creditos </Text>
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
        padding: 20,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#0F172A',
    },
    headerSub: {
        fontSize: 12,
        color: '#64748B',
        marginTop: 2,
    },
    statusCard: {
        width: '100%',
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        alignItems: 'center',
        marginBottom: 20,
    },
    statusPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DCFCE7',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 8,
        gap: 4,
    },
    statusDot: {
        color: '#16A34A',
        fontSize: 10,
    },
    statusPillText: {
        color: '#16A34A',
        fontSize: 11,
        fontWeight: '700',
    },
    serviceName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#0F172A',
        textAlign: 'center',
        marginBottom: 4,
    },
    timeRemaining: {
        fontSize: 12,
        color: '#64748B',
    },
    timerCircle: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 6,
        borderColor: '#38BDF8',
        backgroundColor: '#F0F9FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    timerText: {
        fontSize: 28,
        fontWeight: '800',
        color: '#0284C7',
    },
    timerLabel: {
        fontSize: 11,
        color: '#0369A1',
        fontWeight: '500',
    },
    participantsCard: {
        width: '100%',
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#334155',
        marginBottom: 12,
    },
    participantRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#CBD5E1',
    },
    participantInfo: {
        flex: 1,
    },
    participantName: {
        fontSize: 13,
        fontWeight: '700',
        color: '#0F172A',
    },
    participantMeta: {
        fontSize: 11,
        color: '#64748B',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#E2E8F0',
        marginVertical: 12,
    },
    finishBtn: {
        width: '100%',
        backgroundColor: '#10B981',
        borderRadius: 24,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    finishBtnText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
});

export default ActiveExchangeScreen;
