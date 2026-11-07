import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import { colors } from '../styles/theme.js';

export const RequestsScreen = () => {
    const [activeTab, setActiveTab] = useState('enviadas');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <Text style={styles.backChevron}>‹</Text>
                    <Text style={styles.headerTitle}>Mis solicitudes</Text>
                </View>

                <View style={styles.tabsRow}>
                    <TouchableOpacity
                        style={[styles.tabPill, activeTab === 'enviadas' ? styles.tabPillActive : styles.tabPillInactive]}
                        onPress={() => setActiveTab('enviadas')}
                    >
                        <Text style={[styles.tabText, activeTab === 'enviadas' ? styles.tabTextActive : styles.tabTextInactive]}>
                            Enviadas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tabPill, activeTab === 'recibidas' ? styles.tabPillActive : styles.tabPillInactive]}
                        onPress={() => setActiveTab('recibidas')}
                    >
                        <Text style={[styles.tabText, activeTab === 'recibidas' ? styles.tabTextActive : styles.tabTextInactive]}>
                            Recibidas
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.sectionHeading}>Servicios destacados</Text>
                <View style={styles.gridRow}>
                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#E0F2FE' }]}>
                            <Text style={{ fontSize: 28 }}>📱</Text>
                        </View>
                        <Text style={styles.serviceName}>Matemáticas</Text>
                        <Text style={[styles.statusLabel, styles.statusWaiting]}>En espera</Text>
                        <Text style={styles.statusEmoji}>⏳</Text>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#0F172A' }]}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>&lt;/&gt;</Text>
                        </View>
                        <Text style={styles.serviceName}>Programación</Text>
                        <Text style={[styles.statusLabel, styles.statusRejected]}>Rechazada</Text>
                        <Text style={styles.statusEmoji}>☹️</Text>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#FEF2F2' }]}>
                            <Text style={{ fontSize: 28 }}>⚙️</Text>
                        </View>
                        <Text style={styles.serviceName}>Mécanica CLS</Text>
                        <Text style={[styles.statusLabel, styles.statusAccepted]}>Aceptada</Text>
                        <Text style={styles.statusEmoji}>✅</Text>
                    </View>
                </View>

                <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Servicios disponibles</Text>
                <View style={styles.gridRow}>
                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#FEF3C7' }]}>
                            <Text style={{ fontSize: 28 }}>👨‍🍳</Text>
                        </View>
                        <Text style={[styles.statusLabel, styles.statusAccepted, { marginTop: 4 }]}>Aceptada</Text>
                        <Text style={styles.solicitudesSub}>3 Solicitudes</Text>
                        <Text style={styles.statusEmoji}>✅</Text>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#F3E8FF' }]}>
                            <Text style={{ fontSize: 28 }}>⚛️</Text>
                        </View>
                        <Text style={[styles.statusLabel, styles.statusWaiting, { marginTop: 4 }]}>En espera</Text>
                        <Text style={styles.solicitudesSub}>2 Solicitudes</Text>
                        <Text style={styles.statusEmoji}>⏳</Text>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#EFF6FF' }]}>
                            <Text style={{ fontSize: 28 }}>📈</Text>
                        </View>
                        <Text style={[styles.statusLabel, styles.statusRejected, { marginTop: 4 }]}>Rechazada</Text>
                        <Text style={styles.solicitudesSub}>1 Solicitud</Text>
                        <Text style={styles.statusEmoji}>☹️</Text>
                    </View>
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
        paddingHorizontal: 16,
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
    tabsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    tabPill: {
        flex: 1,
        height: 38,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabPillActive: {
        backgroundColor: colors.primary,
    },
    tabPillInactive: {
        backgroundColor: '#94A3B8',
    },
    tabText: {
        fontSize: 13,
        fontWeight: '600',
    },
    tabTextActive: {
        color: '#FFFFFF',
    },
    tabTextInactive: {
        color: '#FFFFFF',
    },
    sectionHeading: {
        fontSize: 14,
        fontWeight: '700',
        color: '#334155',
        marginBottom: 12,
        marginLeft: 4,
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    cardItem: {
        flex: 1,
        alignItems: 'center',
    },
    illustrationBox: {
        width: '100%',
        height: 90,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    serviceName: {
        fontSize: 11,
        fontWeight: '700',
        color: '#1E293B',
        textAlign: 'center',
        marginBottom: 2,
    },
    statusLabel: {
        fontSize: 10,
        fontWeight: '600',
        textAlign: 'center',
    },
    statusWaiting: {
        color: '#D97706',
    },
    statusRejected: {
        color: '#DC2626',
    },
    statusAccepted: {
        color: '#16A34A',
    },
    statusEmoji: {
        fontSize: 14,
        marginTop: 2,
    },
    solicitudesSub: {
        fontSize: 9,
        color: '#94A3B8',
    },
});

export default RequestsScreen;
