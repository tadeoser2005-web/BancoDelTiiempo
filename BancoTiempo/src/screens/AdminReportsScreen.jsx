import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TextInput,
    Switch,
} from 'react-native';

const VisualSwitch = ({ initialValue = true, activeColor = '#0084FF' }) => {
    const [enabled, setEnabled] = useState(initialValue);
    return (
        <Switch
            value={enabled}
            onValueChange={setEnabled}
            trackColor={{ false: '#CBD5E1', true: activeColor }}
            thumbColor="#FFFFFF"
        />
    );
};

const CATEGORIES_STATS = [
    {
        id: 'c1',
        name: 'Matemáticas',
        exchanges: 142,
        hours: 185,
        rating: '4.8',
        pct: '92%',
        color: '#10B981',
    },
    {
        id: 'c2',
        name: 'Programación',
        exchanges: 128,
        hours: 164,
        rating: '4.9',
        pct: '84%',
        color: '#0084FF',
    },
    {
        id: 'c3',
        name: 'Mecánica CLS',
        exchanges: 74,
        hours: 98,
        rating: '4.5',
        pct: '52%',
        color: '#F59E0B',
    },
    {
        id: 'c4',
        name: 'Cocina',
        exchanges: 56,
        hours: 62,
        rating: '4.7',
        pct: '39%',
        color: '#8B5CF6',
    },
    {
        id: 'c5',
        name: 'Física Cuántica',
        exchanges: 32,
        hours: 44,
        rating: '4.3',
        pct: '24%',
        color: '#EF4444',
    },
];

const USERS_STATS = [
    {
        id: 'u1',
        rank: '#1',
        name: 'Juan Ramirez',
        career: 'ITI • 6to Cuatrimestre',
        hoursShared: 28,
        credits: '8.5 cr',
        rating: '4.8',
        pct: '94%',
        active: true,
    },
    {
        id: 'u2',
        rank: '#2',
        name: 'Ramiro Ramirez',
        career: 'Mecatrónica • 5to',
        hoursShared: 22,
        credits: '11.0 cr',
        rating: '4.6',
        pct: '76%',
        active: true,
    },
    {
        id: 'u3',
        rank: '#3',
        name: 'Valeria Hernandez',
        career: 'Manufactura • 7mo',
        hoursShared: 19,
        credits: '9.5 cr',
        rating: '4.9',
        pct: '66%',
        active: true,
    },
    {
        id: 'u4',
        rank: '#4',
        name: 'Jason Gomez',
        career: 'ITI • 4to Cuatrimestre',
        hoursShared: 15,
        credits: '6.0 cr',
        rating: '4.4',
        pct: '52%',
        active: true,
    },
    {
        id: 'u5',
        rank: '#5',
        name: 'Carlos Mendoza',
        career: 'Sistemas Auto • 3ro',
        hoursShared: 7,
        credits: '2.0 cr',
        rating: '4.1',
        pct: '25%',
        active: false,
    },
];

const REQUESTS_BREAKDOWN = [
    { id: 'r1', label: 'Aceptadas y Completadas', count: 312, pct: '68%', color: '#10B981' },
    { id: 'r2', label: 'En Espera / Pendientes', count: 68, pct: '15%', color: '#F59E0B' },
    { id: 'r3', label: 'Rechazadas (Crédito Devuelto)', count: 46, pct: '10%', color: '#EF4444' },
    { id: 'r4', label: 'Canceladas por Solicitante', count: 32, pct: '7%', color: '#64748B' },
];

export const AdminReportsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.mainLayout}>
                {/* Left Sidebar */}
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

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>🏷️</Text>
                        <Text style={styles.sideLabel}>Categorías</Text>
                    </View>

                    <View style={[styles.sideItem, styles.sideItemActive]}>
                        <Text style={styles.sideIcon}>📋</Text>
                        <Text style={[styles.sideLabel, styles.sideLabelActive]}>Reportes</Text>
                    </View>
                </View>

                {/* Main Content */}
                <ScrollView
                    style={styles.contentScroll}
                    contentContainerStyle={styles.scrollPadding}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header */}
                    <View style={styles.headerBlock}>
                        <Text style={styles.headerTitle}>Reportes y Estadísticas</Text>
                        <Text style={styles.headerSubtitle}>
                            Métricas de categorías, usuarios y solicitudes • VAICTAM UPQ
                        </Text>
                    </View>

                    {/* Visual Filters Panel */}
                    <View style={styles.filterCard}>
                        <Text style={styles.filterSectionLabel}>Filtros de Reporte</Text>

                        <TextInput
                            style={styles.searchInput}
                            placeholder="Filtrar por categoría, usuario o carrera..."
                            placeholderTextColor="#94A3B8"
                        />

                        {/* Module Tabs */}
                        <View style={styles.pillsRow}>
                            <View style={[styles.filterChip, styles.filterChipActive]}>
                                <Text style={[styles.filterChipText, styles.filterChipTextActive]}>
                                    Todos
                                </Text>
                            </View>
                            <View style={styles.filterChip}>
                                <Text style={styles.filterChipText}>Categorías</Text>
                            </View>
                            <View style={styles.filterChip}>
                                <Text style={styles.filterChipText}>Usuarios</Text>
                            </View>
                            <View style={styles.filterChip}>
                                <Text style={styles.filterChipText}>Solicitudes</Text>
                            </View>
                        </View>

                        {/* Period Tabs */}
                        <View style={styles.pillsRow}>
                            <View style={[styles.periodPill, styles.periodPillActive]}>
                                <Text style={[styles.periodText, styles.periodTextActive]}>Este Mes</Text>
                            </View>
                            <View style={styles.periodPill}>
                                <Text style={styles.periodText}>7 Días</Text>
                            </View>
                            <View style={styles.periodPill}>
                                <Text style={styles.periodText}>1er Parcial</Text>
                            </View>
                            <View style={styles.periodPill}>
                                <Text style={styles.periodText}>Anual 2026</Text>
                            </View>
                        </View>

                        <View style={styles.switchFilterRow}>
                            <Text style={styles.switchFilterLabel}>Mostrar solo registros activos</Text>
                            <VisualSwitch initialValue={true} activeColor="#0084FF" />
                        </View>
                    </View>

                    {/* Global KPI Summary */}
                    <View style={styles.kpiGrid}>
                        <View style={styles.kpiBox}>
                            <Text style={styles.kpiValue}>432</Text>
                            <Text style={styles.kpiLabel}>Intercambios</Text>
                        </View>
                        <View style={styles.kpiBox}>
                            <Text style={[styles.kpiValue, { color: '#10B981' }]}>553 h</Text>
                            <Text style={styles.kpiLabel}>Horas Totales</Text>
                        </View>
                        <View style={styles.kpiBox}>
                            <Text style={[styles.kpiValue, { color: '#F59E0B' }]}>4.7 ★</Text>
                            <Text style={styles.kpiLabel}>Calificación</Text>
                        </View>
                        <View style={styles.kpiBox}>
                            <Text style={[styles.kpiValue, { color: '#0084FF' }]}>186</Text>
                            <Text style={styles.kpiLabel}>Alumnos</Text>
                        </View>
                    </View>

                    {/* Statistical Section 1: Categorías */}
                    <View style={styles.sectionCard}>
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionTitle}>Estadísticas por Categorías</Text>
                            <Text style={styles.sectionBadge}>5 categorías</Text>
                        </View>
                        <Text style={styles.sectionSub}>
                            Demanda de intercambios y horas impartidas por área
                        </Text>

                        <View style={styles.barsContainer}>
                            {CATEGORIES_STATS.map((cat) => (
                                <View key={cat.id} style={styles.statRow}>
                                    <View style={styles.statLabelRow}>
                                        <View style={styles.statNameWrap}>
                                            <View style={[styles.dot, { backgroundColor: cat.color }]} />
                                            <Text style={styles.statName}>{cat.name}</Text>
                                        </View>
                                        <Text style={styles.statNumbers}>
                                            {cat.exchanges} interc. • {cat.hours}h • ★ {cat.rating}
                                        </Text>
                                    </View>
                                    <View style={styles.progressTrack}>
                                        <View
                                            style={[
                                                styles.progressFill,
                                                { width: cat.pct, backgroundColor: cat.color },
                                            ]}
                                        />
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Statistical Section 2: Usuarios */}
                    <View style={styles.sectionCard}>
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionTitle}>Estadísticas de Usuarios</Text>
                            <Text style={styles.sectionBadge}>Top 5 UPQ</Text>
                        </View>
                        <Text style={styles.sectionSub}>
                            Alumnos con mayor tiempo compartido y créditos acumulados
                        </Text>

                        <View style={styles.usersList}>
                            {USERS_STATS.map((user) => (
                                <View key={user.id} style={styles.userStatCard}>
                                    <View style={styles.userTopRow}>
                                        <View style={styles.rankBadge}>
                                            <Text style={styles.rankText}>{user.rank}</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.userName}>{user.name}</Text>
                                            <Text style={styles.userCareer}>{user.career}</Text>
                                        </View>
                                        <View
                                            style={[
                                                styles.userStatusBadge,
                                                user.active ? styles.badgeGreen : styles.badgeGray,
                                            ]}
                                        >
                                            <Text
                                                style={[
                                                    styles.userStatusText,
                                                    user.active ? styles.textGreen : styles.textGray,
                                                ]}
                                            >
                                                {user.active ? 'Activo' : 'Inactivo'}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.progressTrack}>
                                        <View
                                            style={[
                                                styles.progressFill,
                                                {
                                                    width: user.pct,
                                                    backgroundColor: user.active ? '#0084FF' : '#94A3B8',
                                                },
                                            ]}
                                        />
                                    </View>

                                    <View style={styles.userMetricsRow}>
                                        <Text style={styles.userMetric}>{user.hoursShared}h impartidas</Text>
                                        <Text style={styles.userMetric}>Saldo: {user.credits}</Text>
                                        <Text style={styles.userMetric}>★ {user.rating}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Statistical Section 3: Solicitudes */}
                    <View style={styles.sectionCard}>
                        <View style={styles.sectionHeaderRow}>
                            <Text style={styles.sectionTitle}>Estado de Solicitudes</Text>
                            <Text style={styles.sectionBadge}>458 total</Text>
                        </View>

                        <View style={styles.barsContainer}>
                            {REQUESTS_BREAKDOWN.map((req) => (
                                <View key={req.id} style={styles.statRow}>
                                    <View style={styles.statLabelRow}>
                                        <Text style={styles.statName}>{req.label}</Text>
                                        <Text style={styles.statNumbers}>
                                            {req.count} ({req.pct})
                                        </Text>
                                    </View>
                                    <View style={styles.progressTrack}>
                                        <View
                                            style={[
                                                styles.progressFill,
                                                { width: req.pct, backgroundColor: req.color },
                                            ]}
                                        />
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Visual Export Button */}
                    <Pressable style={styles.exportBtn}>
                        <Text style={styles.exportBtnText}>Generar Reporte Estadístico</Text>
                    </Pressable>
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
        backgroundColor: '#F8FAFC',
    },
    scrollPadding: {
        padding: 14,
        gap: 12,
        paddingBottom: 40,
    },
    headerBlock: {
        gap: 2,
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
    },
    headerSubtitle: {
        fontSize: 11,
        color: '#64748B',
    },
    filterCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        gap: 9,
    },
    filterSectionLabel: {
        fontSize: 12,
        fontWeight: '700',
        color: '#1E293B',
    },
    searchInput: {
        backgroundColor: '#EAEAEA',
        borderRadius: 14,
        height: 38,
        paddingHorizontal: 12,
        fontSize: 12,
        color: '#1E293B',
    },
    pillsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    filterChip: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 12,
        backgroundColor: '#F1F5F9',
    },
    filterChipActive: {
        backgroundColor: '#0F172A',
    },
    filterChipText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#475569',
    },
    filterChipTextActive: {
        color: '#FFFFFF',
    },
    periodPill: {
        paddingHorizontal: 9,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        backgroundColor: '#FFFFFF',
    },
    periodPillActive: {
        backgroundColor: '#EFF6FF',
        borderColor: '#0084FF',
    },
    periodText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#64748B',
    },
    periodTextActive: {
        color: '#0084FF',
        fontWeight: '700',
    },
    switchFilterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
    },
    switchFilterLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: '#334155',
    },
    kpiGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    kpiBox: {
        width: '48%',
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        alignItems: 'center',
    },
    kpiValue: {
        fontSize: 17,
        fontWeight: '800',
        color: '#1E293B',
    },
    kpiLabel: {
        fontSize: 10,
        color: '#64748B',
        marginTop: 2,
        fontWeight: '600',
    },
    sectionCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        gap: 8,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '800',
        color: '#1E293B',
    },
    sectionBadge: {
        fontSize: 10,
        fontWeight: '700',
        color: '#0084FF',
        backgroundColor: '#EFF6FF',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
    },
    sectionSub: {
        fontSize: 10,
        color: '#64748B',
        marginBottom: 2,
    },
    barsContainer: {
        gap: 10,
    },
    statRow: {
        gap: 4,
    },
    statLabelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statNameWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    statName: {
        fontSize: 11,
        fontWeight: '700',
        color: '#1E293B',
    },
    statNumbers: {
        fontSize: 10,
        color: '#64748B',
        fontWeight: '600',
    },
    progressTrack: {
        height: 8,
        backgroundColor: '#F1F5F9',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    usersList: {
        gap: 10,
    },
    userStatCard: {
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        gap: 6,
    },
    userTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    rankBadge: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#0F172A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rankText: {
        fontSize: 10,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    userName: {
        fontSize: 12,
        fontWeight: '700',
        color: '#1E293B',
    },
    userCareer: {
        fontSize: 10,
        color: '#64748B',
    },
    userStatusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
    },
    badgeGreen: {
        backgroundColor: '#DCFCE7',
    },
    badgeGray: {
        backgroundColor: '#E2E8F0',
    },
    userStatusText: {
        fontSize: 9,
        fontWeight: '700',
    },
    textGreen: {
        color: '#166534',
    },
    textGray: {
        color: '#475569',
    },
    userMetricsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userMetric: {
        fontSize: 10,
        fontWeight: '600',
        color: '#475569',
    },
    exportBtn: {
        backgroundColor: '#0084FF',
        borderRadius: 22,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
    },
    exportBtnText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '700',
    },
});

export default AdminReportsScreen;
