import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';
import { colors } from '../styles/theme.js';

export const HomeScreen = ({
                               userCredits = 8.5,
                           }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                <View style={styles.headerRow}>
                    <Image
                        source={{}}
                        style={styles.avatar}
                    />
                    <Text style={styles.greeting}>Hola, Max</Text>
                </View>

                <View style={styles.creditsCard}>
                    <Text style={styles.creditsLabel}>Tus créditos</Text>
                    <Text style={styles.creditsAmount}>{userCredits} h</Text>
                    <Text style={styles.creditsEquiv}>1 hora = crédito</Text>
                </View>

                <View style={styles.actionsRow}>
                    <View style={styles.actionBtn}>
                        <View style={styles.actionIconBox}>
                            <Text style={styles.actionIconEmoji}>🔍</Text>
                        </View>
                        <Text style={styles.actionLabel}>Explorar</Text>
                    </View>

                    <View style={styles.actionBtn}>
                        <View style={styles.actionIconBox}>
                            <Text style={styles.actionIconEmoji}>✏️</Text>
                        </View>
                        <Text style={styles.actionLabel}>Publicar</Text>
                    </View>

                    <View style={styles.actionBtn}>
                        <View style={styles.actionIconBox}>
                            <Text style={styles.actionIconEmoji}>✉️</Text>
                        </View>
                        <Text style={styles.actionLabel}>Mis solicitudes</Text>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Servicios recomendados</Text>
                    <Text style={styles.seeAllText}>Ver todos</Text>
                </View>


                <View style={styles.serviceRow}>
                    <Image
                        source={{ }}//imagen de programacion
                        style={styles.serviceAvatar}
                    />
                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceTitle}>Programación</Text>
                        <View style={styles.ratingRow}>
                            <Text style={styles.starIcon}>★</Text>
                            <Text style={styles.ratingText}>4.5</Text>
                            <Text style={styles.reviewsText}>(13)</Text>
                        </View>
                    </View>
                    <Text style={styles.durationText}>1 hora</Text>
                </View>

                <View style={styles.serviceRow}>
                    <Image
                        source={{ }}//aqui va imagen
                        style={styles.serviceAvatar}
                    />
                    <View style={styles.serviceInfo}>
                        <Text style={styles.serviceTitle}>Matemáticas</Text>
                        <View style={styles.ratingRow}>
                            <Text style={styles.starIcon}>★</Text>
                            <Text style={styles.ratingText}>4.0</Text>
                            <Text style={styles.reviewsText}>(15)</Text>
                        </View>
                    </View>
                    <Text style={styles.durationText}>50 min</Text>
                </View>
            </ScrollView>

            <View style={styles.bottomTabBar}>
                <View style={styles.tabBtn}>
                    <Text style={styles.tabIcon}>♡</Text>
                </View>
                <View style={styles.tabBtn}>
                    <Text style={[styles.tabIcon, styles.activeTabIcon]}>⌂</Text>
                </View>
                <View style={styles.tabBtn}>
                    <Text style={styles.tabIcon}>👤</Text>
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
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 80,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 12,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#E2E8F0',
    },
    greeting: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E293B',
    },
    creditsCard: {
        backgroundColor: '#5B42F3',
        borderRadius: 24,
        paddingVertical: 24,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#5B42F3',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 16,
        elevation: 8,
        marginBottom: 24,
    },
    creditsLabel: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    creditsAmount: {
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: '800',
        marginBottom: 8,
    },
    creditsEquiv: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 14,
        fontWeight: '500',
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 28,
    },
    actionBtn: {
        alignItems: 'center',
        flex: 1,
    },
    actionIconBox: {
        width: 58,
        height: 58,
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: '#38BDF8',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F9FF',
        marginBottom: 8,
    },
    actionIconEmoji: {
        fontSize: 24,
    },
    actionLabel: {
        fontSize: 12,
        color: '#334155',
        fontWeight: '500',
        textAlign: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
    },
    seeAllText: {
        fontSize: 13,
        color: colors.primary,
        fontWeight: '600',
    },
    serviceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    serviceAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 14,
    },
    serviceInfo: {
        flex: 1,
    },
    serviceTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 4,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        color: '#F59E0B',
        fontSize: 13,
        marginRight: 4,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#334155',
        marginRight: 4,
    },
    reviewsText: {
        fontSize: 11,
        color: '#94A3B8',
    },
    durationText: {
        fontSize: 12,
        color: '#64748B',
        fontWeight: '500',
    },
    bottomTabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabBtn: {
        padding: 10,
        alignItems: 'center',
    },
    tabIcon: {
        fontSize: 22,
        color: '#94A3B8',
    },
    activeTabIcon: {
        color: '#0084FF',
    },
});

export default HomeScreen;
