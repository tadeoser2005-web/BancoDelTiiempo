import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';

export const AdminReportPreviewScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Vista Previa del Reporte</Text>
                </View>

                <View style={styles.reportDoc}>
                    <View style={styles.reportDocHeader}>
                        <Text style={styles.docTitle}>INFORME MENSUAL DE ACTIVIDAD</Text>
                        <Text style={styles.docPeriod}>Periodo: Octubre 2026 • Folio: REP-2026-004</Text>
                    </View>

                    <View style={styles.kpiRow}>
                        <View style={styles.kpiBox}>
                            <Text style={styles.kpiVal}>32,984</Text>
                            <Text style={styles.kpiLbl}>Usuarios</Text>
                        </View>
                        <View style={styles.kpiBox}>
                            <Text style={styles.kpiVal}>2,420 h</Text>
                            <Text style={styles.kpiLbl}>Horas Trueque</Text>
                        </View>
                        <View style={styles.kpiBox}>
                            <Text style={styles.kpiVal}>98.4%</Text>
                            <Text style={styles.kpiLbl}>Satisfaccion</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionHeading}>Intercambios por categoría</Text>
                    <View style={styles.catBars}>
                        <View style={styles.catRow}>
                            <Text style={styles.catName}>Tecnología (Programación)</Text>
                            <View style={[styles.catBarFill, { width: '85%', backgroundColor: '#0084FF' }]} />
                            <Text style={styles.catCount}>420</Text>
                        </View>
                        <View style={styles.catRow}>
                            <Text style={styles.catName}>Ciencias Basicas (Matematicas)</Text>
                            <View style={[styles.catBarFill, { width: '65%', backgroundColor: '#10B981' }]} />
                            <Text style={styles.catCount}>310</Text>
                        </View>
                        <View style={styles.catRow}>
                            <Text style={styles.catName}>Ingeniería Automotriz</Text>
                            <View style={[styles.catBarFill, { width: '45%', backgroundColor: '#F59E0B' }]} />
                            <Text style={styles.catCount}>195</Text>
                        </View>
                        <View style={styles.catRow}>
                            <Text style={styles.catName}>Idiomas e Interculturalidad</Text>
                            <View style={[styles.catBarFill, { width: '30%', backgroundColor: '#8B5CF6' }]} />
                            <Text style={styles.catCount}>120</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionHeading}>Calificaciones Promedio</Text>
                    <View style={styles.ratingSummaryRow}>
                        <Text style={styles.starsVal}>★ 4.8 / 5.0</Text>
                        <Text style={styles.ratingNote}>Basado en 842 evaluaciones registradas </Text>
                    </View>
                </View>

                <View style={styles.downloadBtn}>
                    <Text style={styles.downloadBtnText}>Descargar Reporte en PDF</Text>
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
        padding: 18,
        paddingBottom: 32,
    },
    header: {
        marginBottom: 16,
        alignItems: 'center',
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
    reportDoc: {
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#CBD5E1',
        marginBottom: 20,
    },
    reportDocHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
        paddingBottom: 10,
        marginBottom: 14,
    },
    docTitle: {
        fontSize: 14,
        fontWeight: '800',
        color: '#0F172A',
        letterSpacing: 0.5,
    },
    docPeriod: {
        fontSize: 11,
        color: '#64748B',
        marginTop: 2,
    },
    kpiRow: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16,
    },
    kpiBox: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    kpiVal: {
        fontSize: 14,
        fontWeight: '800',
        color: '#0084FF',
    },
    kpiLbl: {
        fontSize: 10,
        color: '#64748B',
        marginTop: 2,
    },
    sectionHeading: {
        fontSize: 12,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 10,
        marginTop: 6,
    },
    catBars: {
        gap: 8,
        marginBottom: 16,
    },
    catRow: {
        gap: 4,
    },
    catName: {
        fontSize: 11,
        color: '#475569',
        fontWeight: '500',
    },
    catBarFill: {
        height: 8,
        borderRadius: 4,
    },
    catCount: {
        fontSize: 10,
        color: '#94A3B8',
        textAlign: 'right',
    },
    ratingSummaryRow: {
        backgroundColor: '#FFFFFF',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        alignItems: 'center',
    },
    starsVal: {
        fontSize: 16,
        fontWeight: '800',
        color: '#F59E0B',
        marginBottom: 4,
    },
    ratingNote: {
        fontSize: 11,
        color: '#64748B',
    },
    downloadBtn: {
        backgroundColor: '#10B981',
        borderRadius: 24,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadBtnText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
});

export default AdminReportPreviewScreen;
