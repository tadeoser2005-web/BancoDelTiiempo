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

export const AdminDashboardScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.mainLayout}>
                <View style={styles.sidebar}>
                    <View style={[styles.sideItem, styles.sideItemActive]}>
                        <Text style={styles.sideIcon}>📊</Text>
                        <Text style={[styles.sideLabel, styles.sideLabelActive]}>Dashboard</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>👥</Text>
                        <Text style={styles.sideLabel}>Gestion{'\n'}Usuarios</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>⚙️</Text>
                        <Text style={styles.sideLabel}>GesServ</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>📋</Text>
                        <Text style={styles.sideLabel}>Reportes</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>⚡</Text>
                        <Text style={styles.sideLabel}>Transaccione</Text>
                    </View>
                </View>

                <ScrollView style={styles.contentScroll} contentContainerStyle={styles.scrollPadding} showsVerticalScrollIndicator={false}>
                    <View style={styles.darkChartCard}>
                        <View style={styles.chartAxisY}>
                            <Text style={styles.chartAxisNum}>500</Text>
                            <Text style={styles.chartAxisNum}>400</Text>
                            <Text style={styles.chartAxisNum}>300</Text>
                            <Text style={styles.chartAxisNum}>200</Text>
                            <Text style={styles.chartAxisNum}>100</Text>
                            <Text style={styles.chartAxisNum}>0</Text>
                        </View>
                        <View style={styles.chartBarsGroup}>
                            {[50, 85, 45, 95, 60, 75, 40, 90, 70].map((h, idx) => (
                                <View key={idx} style={styles.barCol}>
                                    <View style={[styles.barRect, { height: h }]} />
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.metricSummaryCard}>
                        <Text style={styles.metricHeader}>Usuarios activos</Text>
                        <Text style={styles.metricGrowth}>(+23) mas la ultima semana</Text>

                        <View style={styles.kpiRow}>
                            <View style={styles.kpiCol}>
                                <Text style={styles.kpiTag}>Usuarios</Text>
                                <Text style={styles.kpiValue}>32,984</Text>
                            </View>
                            <View style={styles.kpiCol}>
                                <Text style={styles.kpiTag}>Clicks</Text>
                                <Text style={styles.kpiValue}>2,42m</Text>
                            </View>
                            <View style={styles.kpiCol}>
                                <Text style={styles.kpiTag}>Ventas</Text>
                                <Text style={styles.kpiValue}>2,400$</Text>
                            </View>
                            <View style={styles.kpiCol}>
                                <Text style={styles.kpiTag}>Items</Text>
                                <Text style={styles.kpiValue}>320</Text>
                            </View>
                        </View>
                    </View>

                    {/* Sales Overview */}
                    <View style={styles.overviewCard}>
                        <Text style={styles.overviewHeader}>Resumen de ventas</Text>
                        <Text style={styles.overviewSub}>(+5) mas en 2026</Text>
                        <View style={styles.wavyLineMock}>
                            <Text style={{ color: '#10B981', fontSize: 24 }}>〰️〰️</Text>
                        </View>
                    </View>

                    {/* Orders Overview */}
                    <View style={styles.overviewCard}>
                        <Text style={styles.overviewHeader}>Resumen de ordenes</Text>
                        <Text style={styles.overviewSub}>+30% este mes</Text>

                        <View style={styles.timelineList}>
                            <View style={styles.timelineItem}>
                                <Text style={styles.timelineDot}>🟢</Text>
                                <View style={styles.timelineBody}>
                                    <Text style={styles.timelineTitle}>$2400, Cambio de diseno</Text>
                                    <Text style={styles.timelineDate}>22 DEC 7:20 PM</Text>
                                </View>
                            </View>

                            <View style={styles.timelineItem}>
                                <Text style={styles.timelineDot}>🔴</Text>
                                <View style={styles.timelineBody}>
                                    <Text style={styles.timelineTitle}>Nueva orden #4219423</Text>
                                    <Text style={styles.timelineDate}>21 DEC 11:11 PM</Text>
                                </View>
                            </View>

                            <View style={styles.timelineItem}>
                                <Text style={styles.timelineDot}>🔵</Text>
                                <View style={styles.timelineBody}>
                                    <Text style={styles.timelineTitle}>Pagos de abril</Text>
                                    <Text style={styles.timelineDate}>21 DEC 9:34 PM</Text>
                                </View>
                            </View>

                            <View style={styles.timelineItem}>
                                <Text style={styles.timelineDot}>🟠</Text>
                                <View style={styles.timelineBody}>
                                    <Text style={styles.timelineTitle}>Nueva tarjeta anadida para el pedido: #67676767</Text>
                                    <Text style={styles.timelineDate}>24 DEC 3:52 PM</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    mainLayout: {
        flex: 1,
        flexDirection: 'row',
    },
    sidebar: {
        width: 65,
        backgroundColor: '#F8FAFC',
        borderRightWidth: 1,
        borderRightColor: '#E2E8F0',
        paddingVertical: 16,
        alignItems: 'center',
        gap: 16,
    },
    sideItem: {
        alignItems: 'center',
        paddingVertical: 6,
        width: '100%',
    },
    sideItemActive: {
        borderLeftWidth: 3,
        borderLeftColor: '#0084FF',
    },
    sideIcon: {
        fontSize: 18,
        marginBottom: 2,
    },
    sideLabel: {
        fontSize: 8,
        color: '#64748B',
        textAlign: 'center',
    },
    sideLabelActive: {
        color: '#0084FF',
        fontWeight: '700',
    },
    contentScroll: {
        flex: 1,
    },
    scrollPadding: {
        padding: 14,
        gap: 14,
        paddingBottom: 40,
    },
    darkChartCard: {
        backgroundColor: '#0F172A',
        borderRadius: 14,
        padding: 12,
        flexDirection: 'row',
        height: 120,
        alignItems: 'flex-end',
    },
    chartAxisY: {
        justifyContent: 'space-between',
        height: '100%',
        paddingRight: 8,
        borderRightWidth: 1,
        borderRightColor: '#334155',
    },
    chartAxisNum: {
        color: '#64748B',
        fontSize: 8,
    },
    chartBarsGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingLeft: 6,
        height: '100%',
    },
    barCol: {
        width: 10,
        alignItems: 'center',
    },
    barRect: {
        width: '100%',
        backgroundColor: '#38BDF8',
        borderRadius: 2,
    },
    metricSummaryCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    metricHeader: {
        fontSize: 13,
        fontWeight: '700',
        color: '#1E293B',
    },
    metricGrowth: {
        fontSize: 10,
        color: '#10B981',
        fontWeight: '600',
        marginBottom: 10,
    },
    kpiRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    kpiCol: {
        alignItems: 'center',
    },
    kpiTag: {
        fontSize: 9,
        color: '#94A3B8',
    },
    kpiValue: {
        fontSize: 11,
        fontWeight: '700',
        color: '#1E293B',
    },
    overviewCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    overviewHeader: {
        fontSize: 13,
        fontWeight: '700',
        color: '#1E293B',
    },
    overviewSub: {
        fontSize: 10,
        color: '#64748B',
        marginBottom: 8,
    },
    wavyLineMock: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timelineList: {
        gap: 10,
    },
    timelineItem: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'flex-start',
    },
    timelineDot: {
        fontSize: 8,
        marginTop: 2,
    },
    timelineBody: {
        flex: 1,
    },
    timelineTitle: {
        fontSize: 11,
        fontWeight: '600',
        color: '#1E293B',
    },
    timelineDate: {
        fontSize: 9,
        color: '#94A3B8',
    },
});

export default AdminDashboardScreen;
