import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TextInput,
    Alert,
} from 'react-native';

export const AdminServicesScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterTab, setFilterTab] = useState('todos');

    const [servicesList, setServicesList] = useState([
        {
            id: 'srv-1',
            title: 'Programación y Estructuras de Datos',
            category: 'Programación',
            provider: 'Ramiro Ramirez',
            studentId: '4950234902',
            hours: 1,
            rating: 4.5,
            reviews: 13,
            status: 'Activo',
            availability: 'Lun-Jue 14:00-18:00',
        },
        {
            id: 'srv-2',
            title: 'Cálculo Diferencial e Integral',
            category: 'Matemáticas',
            provider: 'Jason Gomez',
            studentId: '4950234915',
            hours: 1,
            rating: 4.0,
            reviews: 15,
            status: 'Activo',
            availability: 'Mar-Vie 10:00-12:00',
        },
        {
            id: 'srv-3',
            title: 'Mecánica y Termodinámica Automotriz',
            category: 'Mecánica CLS',
            provider: 'Juan Abdul',
            studentId: '4950234888',
            hours: 2,
            rating: 4.8,
            reviews: 9,
            status: 'Activo',
            availability: 'Sábados 09:00-13:00',
        },
        {
            id: 'srv-4',
            title: 'Técnicas Culinarias y Nutrición Estudiantil',
            category: 'Cocina',
            provider: 'Valeria Hernandez',
            studentId: '4950234720',
            hours: 1,
            rating: 4.9,
            reviews: 21,
            status: 'Pausado',
            availability: 'Viernes 15:00-17:00',
        },
        {
            id: 'srv-5',
            title: 'Física Cuántica y Ondulatoria',
            category: 'Física Cuántica',
            provider: 'Carlos Mendoza',
            studentId: '4950234611',
            hours: 1.5,
            rating: 4.2,
            reviews: 6,
            status: 'Inactivo',
            availability: 'Previa cita',
        },
        {
            id: 'srv-6',
            title: 'Álgebra Lineal y Matrices f(x) = 2x - 1',
            category: 'Álgebra Lin',
            provider: 'Sofia Navarro',
            studentId: '4950234599',
            hours: 1,
            rating: 4.7,
            reviews: 11,
            status: 'Activo',
            availability: 'Lun-Mié 16:00-18:00',
        },
    ]);

    const handleDeactivateService = (serviceId, title) => {
        Alert.alert(
            'Dar de baja servicio ',
            `¿Deseas dar de baja "${title}"? Se aplicará borrado lógico (estatus: Inactivo) para preservar el historial de transacciones e intercambios previos.`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Confirmar Baja Lógica',
                    style: 'destructive',
                    onPress: () => {
                        setServicesList((prev) =>
                            prev.map((s) =>
                                s.id === serviceId ? { ...s, status: 'Inactivo' } : s
                            )
                        );
                        Alert.alert('Éxito ', 'El servicio fue marcado como Inactivo.');
                    },
                },
            ]
        );
    };

    const handleTogglePause = (serviceId) => {
        setServicesList((prev) =>
            prev.map((s) => {
                if (s.id === serviceId) {
                    const nextStatus = s.status === 'Activo' ? 'Pausado' : 'Activo';
                    return { ...s, status: nextStatus };
                }
                return s;
            })
        );
    };

    const filteredServices = servicesList.filter((s) => {
        const matchesSearch =
            s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.category.toLowerCase().includes(searchQuery.toLowerCase());

        if (filterTab === 'activos') return matchesSearch && s.status === 'Activo';
        if (filterTab === 'pausados') return matchesSearch && s.status === 'Pausado';
        if (filterTab === 'inactivos') return matchesSearch && s.status === 'Inactivo';
        return matchesSearch;
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.mainLayout}>
                {/* Left Sidebar (Matching Page 28) */}
                <View style={styles.sidebar}>
                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>📊</Text>
                        <Text style={styles.sideLabel}>Dashboard</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>👥</Text>
                        <Text style={styles.sideLabel}>Gestión{'\n'}Usuarios</Text>
                    </View>

                    <View style={[styles.sideItem, styles.sideItemActive]}>
                        <Text style={styles.sideIcon}>⚙️</Text>
                        <Text style={[styles.sideLabel, styles.sideLabelActive]}>
                            GesServ
                        </Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>📁</Text>
                        <Text style={styles.sideLabel}>Reportes</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>⚡</Text>
                        <Text style={styles.sideLabel}>Transacciones</Text>
                    </View>
                </View>

                <View style={styles.contentArea}>
                    <View style={styles.topHeader}>
                        <Text style={styles.moduleTitle}>Gestión de Servicios</Text>
                        <Text style={styles.moduleSubtitle}>
                            Servicios
                        </Text>
                    </View>

                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Buscar por servicio, alumno o categoría..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>

                    <View style={styles.tabsRow}>
                        {['todos', 'activos', 'pausados', 'inactivos'].map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={[
                                    styles.tabButton,
                                    filterTab === tab && styles.tabButtonActive,
                                ]}
                                onPress={() => setFilterTab(tab)}
                            >
                                <Text
                                    style={[
                                        styles.tabButtonText,
                                        filterTab === tab && styles.tabButtonTextActive,
                                    ]}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <ScrollView
                        style={styles.listScroll}
                        contentContainerStyle={styles.listContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {filteredServices.map((item) => (
                            <View key={item.id} style={styles.serviceRowCard}>
                                <View style={styles.serviceCardHeader}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.serviceCardTitle}>{item.title}</Text>
                                        <Text style={styles.serviceCardMeta}>
                                            Por: {item.provider} • ID: {item.studentId}
                                        </Text>
                                    </View>

                                    <View
                                        style={[
                                            styles.statusBadge,
                                            item.status === 'Activo'
                                                ? styles.statusBadgeActive
                                                : item.status === 'Pausado'
                                                    ? styles.statusBadgePaused
                                                    : styles.statusBadgeInactive,
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.statusBadgeText,
                                                item.status === 'Activo'
                                                    ? styles.statusTextActive
                                                    : item.status === 'Pausado'
                                                        ? styles.statusTextPaused
                                                        : styles.statusTextInactive,
                                            ]}
                                        >
                                            {item.status}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.serviceCardDetails}>
                                    <Text style={styles.detailTag}>⏱ {item.hours}h crédito</Text>
                                    <Text style={styles.detailTag}>★ {item.rating} ({item.reviews})</Text>
                                    <Text style={styles.detailTag}>📅 {item.availability}</Text>
                                </View>

                                <View style={styles.actionsRow}>
                                    {item.status !== 'Inactivo' && (
                                        <TouchableOpacity
                                            style={styles.pauseActionBtn}
                                            onPress={() => handleTogglePause(item.id)}
                                        >
                                            <Text style={styles.pauseActionText}>
                                                {item.status === 'Activo' ? 'Pausar' : 'Reactivar'}
                                            </Text>
                                        </TouchableOpacity>
                                    )}

                                    {item.status !== 'Inactivo' ? (
                                        <TouchableOpacity
                                            style={styles.deleteActionBtn}
                                            onPress={() => handleDeactivateService(item.id, item.title)}
                                        >
                                            <Text style={styles.deleteActionText}>Dar de Baja </Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <Text style={styles.logicalDeletedLabel}>
                                            Baja  aplicada
                                        </Text>
                                    )}
                                </View>
                            </View>
                        ))}
                    </ScrollView>
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
    mainLayout: {
        flex: 1,
        flexDirection: 'row',
    },
    sidebar: {
        width: 60,
        backgroundColor: '#FFFFFF',
        borderRightWidth: 1,
        borderColor: '#E2E8F0',
        paddingVertical: 12,
        alignItems: 'center',
        gap: 12,
    },
    sideItem: {
        alignItems: 'center',
        paddingVertical: 6,
        width: '100%',
    },
    sideItemActive: {
        backgroundColor: '#F0F9FF',
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
        fontWeight: '500',
    },
    sideLabelActive: {
        color: '#0084FF',
        fontWeight: '700',
    },
    contentArea: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        padding: 12,
    },
    topHeader: {
        marginBottom: 10,
    },
    moduleTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: '#0F172A',
    },
    moduleSubtitle: {
        fontSize: 10,
        color: '#64748B',
    },
    searchContainer: {
        marginBottom: 8,
    },
    searchInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        fontSize: 11,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    tabsRow: {
        flexDirection: 'row',
        gap: 6,
        marginBottom: 10,
    },
    tabButton: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    tabButtonActive: {
        backgroundColor: '#0084FF',
        borderColor: '#0084FF',
    },
    tabButtonText: {
        fontSize: 10,
        color: '#64748B',
        fontWeight: '600',
    },
    tabButtonTextActive: {
        color: '#FFFFFF',
    },
    listScroll: {
        flex: 1,
    },
    listContent: {
        gap: 8,
        paddingBottom: 20,
    },
    serviceRowCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    serviceCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 8,
    },
    serviceCardTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#0F172A',
    },
    serviceCardMeta: {
        fontSize: 10,
        color: '#64748B',
        marginTop: 2,
    },
    statusBadge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
    },
    statusBadgeActive: {
        backgroundColor: '#DCFCE7',
    },
    statusBadgePaused: {
        backgroundColor: '#FEF3C7',
    },
    statusBadgeInactive: {
        backgroundColor: '#FEE2E2',
    },
    statusBadgeText: {
        fontSize: 9,
        fontWeight: '700',
    },
    statusTextActive: {
        color: '#16A34A',
    },
    statusTextPaused: {
        color: '#D97706',
    },
    statusTextInactive: {
        color: '#DC2626',
    },
    serviceCardDetails: {
        flexDirection: 'row',
        gap: 8,
        marginVertical: 8,
    },
    detailTag: {
        fontSize: 10,
        color: '#475569',
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
    },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        borderTopWidth: 1,
        borderColor: '#F1F5F9',
        paddingTop: 8,
    },
    pauseActionBtn: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        backgroundColor: '#F1F5F9',
    },
    pauseActionText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#475569',
    },
    deleteActionBtn: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        backgroundColor: '#FEE2E2',
    },
    deleteActionText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#DC2626',
    },
    logicalDeletedLabel: {
        fontSize: 9,
        color: '#94A3B8',
        fontStyle: 'italic',
    },
});

export default AdminServicesScreen;
