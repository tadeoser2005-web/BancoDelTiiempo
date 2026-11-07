import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Alert,
    Platform,
} from 'react-native';

export const AdminGenerateReportScreen = () => {
    const [period, setPeriod] = useState('Primer Parcial 2026');
    const [reportType, setReportType] = useState('Transacciones y Creditos');
    const [format, setFormat] = useState('PDF / Hoja de Calculo');
    const [generated, setGenerated] = useState(true);

    const handleGenerate = () => {
        setGenerated(true);
        const msg = 'Reporte generado con exito segun los parametros seleccionados.';
        if (Platform.OS !== 'web') Alert.alert('Reporte Generado', msg);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.mainLayout}>
                <View style={styles.sidebar}>
                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>📊</Text>
                        <Text style={styles.sideLabel}>Dashboard</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>👥</Text>
                        <Text style={styles.sideLabel}>Gestión{'\n'}Usuarios</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>⚙️</Text>
                        <Text style={styles.sideLabel}>GesServ</Text>
                    </View>

                    <View style={[styles.sideItem, styles.sideItemActive]}>
                        <Text style={styles.sideIcon}>📋</Text>
                        <Text style={[styles.sideLabel, styles.sideLabelActive]}>Reportes</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>⚡</Text>
                        <Text style={styles.sideLabel}>Transacciones</Text>
                    </View>
                </View>

                {/* Content */}
                <ScrollView style={styles.contentScroll} contentContainerStyle={styles.scrollPadding} showsVerticalScrollIndicator={false}>
                    <Text style={styles.headerTitle}>Generar reporte</Text>
                    <Text style={styles.headerSubtitle}>Configura los parametros del reporte</Text>

                    <View style={styles.paramsBox}>
                        <View style={styles.paramGroup}>
                            <Text style={styles.paramLabel}>Periodo</Text>
                            <View style={styles.selectMock}>
                                <Text style={styles.selectText}>{period}</Text>
                                <Text style={styles.selectArrow}>▾</Text>
                            </View>
                        </View>

                        <View style={styles.paramGroup}>
                            <Text style={styles.paramLabel}>Tipo de reporte</Text>
                            <View style={styles.selectMock}>
                                <Text style={styles.selectText}>{reportType}</Text>
                                <Text style={styles.selectArrow}>▾</Text>
                            </View>
                        </View>

                        <View style={styles.paramGroup}>
                            <Text style={styles.paramLabel}>Formato</Text>
                            <View style={styles.selectMock}>
                                <Text style={styles.selectText}>{format}</Text>
                                <Text style={styles.selectArrow}>▾</Text>
                            </View>
                        </View>

                        {/* Green button */}
                        <TouchableOpacity style={styles.btnGreen} activeOpacity={0.85} onPress={handleGenerate}>
                            <Text style={styles.btnGreenText}>Generar reporte</Text>
                        </TouchableOpacity>
                    </View>

                    {generated && (
                        <View style={styles.previewCard}>
                            <Text style={styles.previewCardTitle}>Vista previa del reporte</Text>

                            <View style={styles.previewGrid}>
                                <View style={styles.previewCol}>
                                    <Text style={styles.previewSectionHeader}>Intercambios por categoría</Text>
                                    <View style={styles.pieMock}>
                                        <Text style={{ fontSize: 28 }}>📊</Text>
                                    </View>

                                    <Text style={[styles.previewSectionHeader, { marginTop: 10 }]}>Calificaciones categoría</Text>
                                    <View style={styles.miniBarChart}>
                                        <View style={[styles.bar, { height: 25 }]} />
                                        <View style={[styles.bar, { height: 40 }]} />
                                        <View style={[styles.bar, { height: 30 }]} />
                                        <View style={[styles.bar, { height: 45 }]} />
                                    </View>
                                </View>

                                <View style={styles.previewCol}>
                                    <Text style={styles.previewSectionHeader}>Ultimas transacciones</Text>
                                    <View style={styles.miniTxList}>
                                        <Text style={styles.miniTxItem}>• $2400 cambios de diseno</Text>
                                        <Text style={styles.miniTxItem}>• Nueva orden #48752</Text>
                                        <Text style={styles.miniTxItem}>• Pagos edl servidor de abril</Text>
                                        <Text style={styles.miniTxItem}>• Desbloquear paquete dev</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
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
        padding: 16,
        gap: 12,
        paddingBottom: 40,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E293B',
    },
    headerSubtitle: {
        fontSize: 11,
        color: '#64748B',
        marginTop: -8,
        marginBottom: 6,
    },
    paramsBox: {
        gap: 10,
    },
    paramGroup: {
        gap: 4,
    },
    paramLabel: {
        fontSize: 11,
        color: '#475569',
        fontWeight: '600',
        marginLeft: 2,
    },
    selectMock: {
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 14,
        height: 38,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectText: {
        fontSize: 11,
        color: '#1E293B',
    },
    selectArrow: {
        fontSize: 12,
        color: '#94A3B8',
    },
    btnGreen: {
        backgroundColor: '#22C55E',
        borderRadius: 20,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
        shadowColor: '#22C55E',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 3,
    },
    btnGreenText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
    previewCard: {
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 16,
        padding: 12,
        marginTop: 8,
    },
    previewCardTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 10,
        textAlign: 'center',
    },
    previewGrid: {
        flexDirection: 'row',
        gap: 8,
    },
    previewCol: {
        flex: 1,
    },
    previewSectionHeader: {
        fontSize: 9,
        fontWeight: '700',
        color: '#475569',
        marginBottom: 4,
    },
    pieMock: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    miniBarChart: {
        height: 50,
        backgroundColor: '#0F172A',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingHorizontal: 4,
        paddingBottom: 4,
    },
    bar: {
        width: 6,
        backgroundColor: '#38BDF8',
        borderRadius: 2,
    },
    miniTxList: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 8,
        gap: 4,
        height: 110,
    },
    miniTxItem: {
        fontSize: 8,
        color: '#475569',
    },
});

export default AdminGenerateReportScreen;
