import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';

export const CreditsScreen = ({
                                  credits = 8.5,
                              }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <Text style={styles.backChevron}>‹</Text>
                    <Text style={styles.headerTitle}>Mis créditos</Text>
                </View>

                <View style={styles.purpleCard}>
                    <Text style={styles.purpleCardSub}>Tus créditos</Text>
                    <Text style={styles.purpleCardMain}>{credits} h</Text>
                    <Text style={styles.purpleCardFoot}>Saldo disponible</Text>
                </View>

                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <View style={styles.statTop}>
                            <Text style={styles.arrowIcon}>↑</Text>
                            <Text style={styles.statAmount}>12.5 h</Text>
                        </View>
                        <Text style={styles.statLabel}>Ganados</Text>
                    </View>

                    <View style={styles.statBox}>
                        <View style={styles.statTop}>
                            <Text style={styles.arrowIcon}>↓</Text>
                            <Text style={styles.statAmount}>4 h</Text>
                        </View>
                        <Text style={styles.statLabel}>Utilizados</Text>
                    </View>
                </View>

                <View style={styles.chartCard}>
                    <Text style={styles.chartTitle}>Actividad de créditos</Text>
                    <View style={styles.darkChartContainer}>
                        <View style={styles.barItem}><View style={[styles.barFill, { height: 40 }]} /><Text style={styles.barLabel}>Lun</Text></View>
                        <View style={styles.barItem}><View style={[styles.barFill, { height: 75 }]} /><Text style={styles.barLabel}>Mar</Text></View>
                        <View style={styles.barItem}><View style={[styles.barFill, { height: 50 }]} /><Text style={styles.barLabel}>Mie</Text></View>
                        <View style={styles.barItem}><View style={[styles.barFill, { height: 85 }]} /><Text style={styles.barLabel}>Jue</Text></View>
                        <View style={styles.barItem}><View style={[styles.barFill, { height: 60 }]} /><Text style={styles.barLabel}>Vie</Text></View>
                        <View style={styles.barItem}><View style={[styles.barFill, { height: 95 }]} /><Text style={styles.barLabel}>Sab</Text></View>
                        <View style={styles.barItem}><View style={[styles.barFill, { height: 30 }]} /><Text style={styles.barLabel}>Dom</Text></View>
                    </View>
                </View>

                <View style={styles.historySection}>
                    <Text style={styles.historyTitle}>Ultimos movimientos</Text>
                    <View style={styles.historyList}>
                        <View style={styles.historyRow}>
                            <Text style={[styles.historyBadge, { color: '#10B981' }]}>+1 crédito</Text>
                            <Text style={styles.historyDesc}>Servicio realizado</Text>
                            <Text style={styles.historyDate}>03/10/26</Text>
                        </View>

                        <View style={styles.historyRow}>
                            <Text style={[styles.historyBadge, { color: '#F59E0B' }]}>-1 crédito</Text>
                            <Text style={styles.historyDesc}>Servicio solicitado</Text>
                            <Text style={styles.historyDate}>04/10/25</Text>
                        </View>

                        <View style={styles.historyRow}>
                            <Text style={[styles.historyBadge, { color: '#3B82F6' }]}>+2 créditos</Text>
                            <Text style={styles.historyDesc}>Servicio realizado</Text>
                            <Text style={styles.historyDate}>02/10/26</Text>
                        </View>
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
        paddingHorizontal: 20,
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
    purpleCard: {
        backgroundColor: '#5B42F3',
        borderRadius: 24,
        paddingVertical: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        shadowColor: '#5B42F3',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 6,
    },
    purpleCardSub: {
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 15,
        fontWeight: '500',
    },
    purpleCardMain: {
        color: '#FFFFFF',
        fontSize: 38,
        fontWeight: '800',
        marginVertical: 4,
    },
    purpleCardFoot: {
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 13,
    },
    statsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#6366F1',
        borderRadius: 18,
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    statTop: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    arrowIcon: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
    statAmount: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '800',
    },
    statLabel: {
        color: 'rgba(255, 255, 255, 0.85)',
        fontSize: 12,
        marginTop: 2,
    },
    chartCard: {
        backgroundColor: '#F8FAFC',
        borderRadius: 20,
        padding: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    chartTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 12,
    },
    darkChartContainer: {
        backgroundColor: '#0F172A',
        borderRadius: 14,
        padding: 16,
        height: 140,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    barItem: {
        alignItems: 'center',
        gap: 6,
        flex: 1,
    },
    barFill: {
        width: 14,
        backgroundColor: '#38BDF8',
        borderRadius: 4,
    },
    barLabel: {
        color: '#94A3B8',
        fontSize: 9,
        fontWeight: '500',
    },
    historySection: {
        gap: 12,
    },
    historyTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
    },
    historyList: {
        gap: 10,
    },
    historyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    historyBadge: {
        fontSize: 12,
        fontWeight: '700',
        width: 80,
    },
    historyDesc: {
        flex: 1,
        fontSize: 12,
        color: '#334155',
        fontWeight: '500',
    },
    historyDate: {
        fontSize: 11,
        color: '#94A3B8',
    },
});

export default CreditsScreen;
