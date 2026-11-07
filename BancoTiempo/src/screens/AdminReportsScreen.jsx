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

export const AdminReportsScreen = () => {
    const [selectedModule, setSelectedModule] = useState('intercambios');

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
                        <Text style={styles.sideLabel}>Transaccione</Text>
                    </View>
                </View>

                {/* Content */}
                <ScrollView style={styles.contentScroll} contentContainerStyle={styles.scrollPadding} showsVerticalScrollIndicator={false}>
                    <Text style={styles.headerTitle}>Reportes</Text>
                    <Text style={styles.headerSubtitle}>Genera reportes</Text>

                    <View style={styles.dropdownInput}>
                        <Text style={styles.dropdownLabel}>Nombre completo</Text>
                        <Text style={styles.chevron}>▾</Text>
                    </View>

                    <View style={styles.dropdownInput}>
                        <Text style={styles.dropdownLabel}>Periodo / Filtro</Text>
                        <Text style={styles.chevron}>▾</Text>
                    </View>

                    <View style={styles.modulesGrid}>
                        <TouchableOpacity
                            style={[styles.moduleCard, selectedModule === 'usuarios' && styles.moduleCardActive]}
                            onPress={() => setSelectedModule('usuarios')}
                        >
                            <Text style={styles.moduleIcon}>👥</Text>
                            <Text style={styles.moduleLabel}>Usuarios</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.moduleCard, selectedModule === 'servicios' && styles.moduleCardActive]}
                            onPress={() => setSelectedModule('servicios')}
                        >
                            <Text style={styles.moduleIcon}>🏬</Text>
                            <Text style={styles.moduleLabel}>Servicios</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.moduleCard, selectedModule === 'solicitudes' && styles.moduleCardActive]}
                            onPress={() => setSelectedModule('solicitudes')}
                        >
                            <Text style={styles.moduleIcon}>📄</Text>
                            <Text style={styles.moduleLabel}>Solicitudes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.moduleCard, selectedModule === 'intercambios' && styles.moduleCardActive]}
                            onPress={() => setSelectedModule('intercambios')}
                        >
                            <Text style={styles.moduleIcon}>🔄</Text>
                            <Text style={styles.moduleLabel}>Intercambios</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Preview Box */}
                    <View style={styles.previewContainer}>
                        <Text style={styles.previewTitle}>Intercambios por categoría</Text>
                        <View style={styles.miniBarGraph}>
                            <View style={styles.barPair}><View style={[styles.bar, { height: 35, backgroundColor: '#0284C7' }]} /><Text style={styles.barTag}>Tec</Text></View>
                            <View style={styles.barPair}><View style={[styles.bar, { height: 55, backgroundColor: '#10B981' }]} /><Text style={styles.barTag}>Mat</Text></View>
                            <View style={styles.barPair}><View style={[styles.bar, { height: 40, backgroundColor: '#F59E0B' }]} /><Text style={styles.barTag}>Ing</Text></View>
                            <View style={styles.barPair}><View style={[styles.bar, { height: 25, backgroundColor: '#8B5CF6' }]} /><Text style={styles.barTag}>Culin</Text></View>
                        </View>

                        <Text style={[styles.previewTitle, { marginTop: 16 }]}>Calificaciones</Text>
                        <Text style={styles.starsRow}>  (Promedio: 4.6 / 5.0)</Text>
                    </View>

                    {/* Action button */}
                    <TouchableOpacity
                        style={styles.btnAction}
                        activeOpacity={0.85}
                        onPress={() => navigateTo('adminGenerateReport')}
                    >
                        <Text style={styles.btnActionText}>Configurar Parámetros ›</Text>
                    </TouchableOpacity>
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
    dropdownInput: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 14,
        height: 38,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dropdownLabel: {
        fontSize: 11,
        color: '#64748B',
    },
    chevron: {
        fontSize: 12,
        color: '#94A3B8',
    },
    modulesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    moduleCard: {
        width: '48%',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 16,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    moduleCardActive: {
        borderColor: '#0084FF',
        backgroundColor: '#F0F9FF',
    },
    moduleIcon: {
        fontSize: 22,
    },
    moduleLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: '#334155',
    },
    previewContainer: {
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        padding: 14,
        minHeight: 140,
    },
    previewTitle: {
        fontSize: 11,
        fontWeight: '700',
        color: '#334155',
    },
    miniBarGraph: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        height: 70,
        marginTop: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
        paddingBottom: 4,
    },
    barPair: {
        alignItems: 'center',
        gap: 4,
    },
    bar: {
        width: 14,
        borderRadius: 3,
    },
    barTag: {
        fontSize: 8,
        color: '#64748B',
    },
    starsRow: {
        fontSize: 12,
        color: '#F59E0B',
        marginTop: 4,
        fontWeight: '600',
    },
    btnAction: {
        backgroundColor: '#0084FF',
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
    },
    btnActionText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },
});

export default AdminReportsScreen;
