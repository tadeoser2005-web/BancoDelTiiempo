import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    SafeAreaView,
    StatusBar,
    ScrollView,
    FlatList,
    TextInput,
    Switch,
    Image,
} from 'react-native';

const VisualSwitch = ({ initialValue = false, activeColor = '#0084FF' }) => {
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

const USERS_LIST = [
    {
        id: 'u-juan',
        name: 'Juan Ramirez',
        email: 'juan.ramirez@upq.edu.mx',
        matricula: '122040112',
        career: 'ITI • 6to Cuatrimestre',
        role: 'Administrador',
        isAdmin: true,
        status: 'Activo',
        isActive: true,
        credits: '8.5',
        avatar:'',
    },
    {
        id: 'u-ramiro',
        name: 'Ramiro Ramirez',
        email: 'ramiro@ramirez.com',
        matricula: '122045678',
        career: 'Mecatrónica • 5to',
        role: 'Usuario',
        isAdmin: false,
        status: 'Activo',
        isActive: true,
        credits: '11.0',
        avatar:'',
    },
    {
        id: 'u-valeria',
        name: 'Glenda Barrera',
        email: 'gBarrera@gmail.com',
        matricula: '122048910',
        career: 'Manufactura • 7mo',
        role: 'Usuario',
        isAdmin: false,
        status: 'Activo',
        isActive: true,
        credits: '9.5',
        avatar:'',
    },
    {
        id: 'u-jason',
        name: 'Jason Gomez',
        email: 'jasong@gomez.com',
        matricula: '122041234',
        career: 'ITI • 4to Cuatrimestre',
        role: 'Usuario',
        isAdmin: false,
        status: 'Inactivo',
        isActive: false,
        credits: '4.0',
        avatar:'',
    },
];

export const AdminUsersScreen = () => {
    const renderUserCard = ({ item }) => (
        <View style={[styles.userCard, !item.isActive && styles.userCardInactive]}>
            {/* Top Info */}
            <View style={styles.userTopRow}>
                <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
                <View style={styles.userInfo}>
                    <View style={styles.nameBadgeRow}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <View
                            style={[
                                styles.roleBadge,
                                item.isAdmin ? styles.roleBadgeAdmin : styles.roleBadgeUser,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.roleBadgeText,
                                    item.isAdmin ? styles.roleTextAdmin : styles.roleTextUser,
                                ]}
                            >
                                {item.role}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.userEmail}>{item.email}</Text>
                    <Text style={styles.userMeta}>
                        Mat. {item.matricula} • {item.career} • {item.credits} cr
                    </Text>
                </View>
            </View>

            {/* Switches Row: Admin Role & Account Status */}
            <View style={styles.controlsBox}>
                <View style={styles.switchControlRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.controlLabel}>Permisos de Administrador</Text>
                        <Text style={styles.controlSub}>
                            Puede gestionar usuarios, categorías y reportes
                        </Text>
                    </View>
                    <VisualSwitch initialValue={item.isAdmin} activeColor="#4F46E5" />
                </View>

                <View style={styles.divider} />

                <View style={styles.switchControlRow}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.controlLabel}>Cuenta Activa ({item.status})</Text>
                        <Text style={styles.controlSub}>
                            Habilitar o suspender acceso al sistema
                        </Text>
                    </View>
                    <VisualSwitch initialValue={item.isActive} activeColor="#22C55E" />
                </View>
            </View>

            {/* Admin Action Buttons */}
            <View style={styles.actionsRow}>
                <Pressable
                    style={[
                        styles.actionChipBtn,
                        item.isAdmin ? styles.btnDemote : styles.btnPromote,
                    ]}
                >
                    <Text
                        style={[
                            styles.actionChipText,
                            item.isAdmin ? styles.textDemote : styles.textPromote,
                        ]}
                    >
                        {item.isAdmin ? 'Quitar Admin' : 'Hacer Admin'}
                    </Text>
                </Pressable>

                <Pressable style={[styles.actionChipBtn, styles.btnEdit]}>
                    <Text style={styles.textEdit}>Editar</Text>
                </Pressable>

                <Pressable style={[styles.actionChipBtn, styles.btnDelete]}>
                    <Text style={styles.textDelete}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <View style={styles.mainLayout}>
                {/* Sidebar */}
                <View style={styles.sidebar}>
                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>📊</Text>
                        <Text style={styles.sideLabel}>Dashboard</Text>
                    </View>

                    <View style={[styles.sideItem, styles.sideItemActive]}>
                        <Text style={styles.sideIcon}>👥</Text>
                        <Text style={[styles.sideLabel, styles.sideLabelActive]}>
                            Gestión{'\n'}Usuarios
                        </Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>⚙️</Text>
                        <Text style={styles.sideLabel}>GesServ</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>🏷️</Text>
                        <Text style={styles.sideLabel}>Categorías</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>📋</Text>
                        <Text style={styles.sideLabel}>Reportes</Text>
                    </View>
                </View>

                {/* Main Content */}
                <ScrollView
                    style={styles.contentScroll}
                    contentContainerStyle={styles.scrollPadding}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header */}
                    <View style={styles.headerRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.headerTitle}>Administración de Usuarios</Text>
                            <Text style={styles.headerSubtitle}>
                                Gestiona cuentas, asigna administradores y elimina usuarios
                            </Text>
                        </View>
                        <Pressable style={styles.addBtn}>
                            <Text style={styles.addBtnText}>+ Nuevo</Text>
                        </Pressable>
                    </View>

                    {/* Mini Stats */}
                    <View style={styles.statsRow}>
                        <View style={styles.statBox}>
                            <Text style={styles.statNum}>4</Text>
                            <Text style={styles.statLabel}>Totales</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={[styles.statNum, { color: '#4F46E5' }]}>1</Text>
                            <Text style={styles.statLabel}>Admins</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={[styles.statNum, { color: '#10B981' }]}>3</Text>
                            <Text style={styles.statLabel}>Activos</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={[styles.statNum, { color: '#EF4444' }]}>1</Text>
                            <Text style={styles.statLabel}>Inactivos</Text>
                        </View>
                    </View>

                    {/* Search Input */}
                    <View style={styles.searchBar}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Buscar por nombre, matrícula o correo..."
                            placeholderTextColor="#94A3B8"
                        />
                    </View>

                    {/* Filter Pills */}
                    <View style={styles.filtersRow}>
                        <View style={[styles.filterPill, styles.filterPillActive]}>
                            <Text style={[styles.filterPillText, styles.filterPillTextActive]}>
                                Todos (4)
                            </Text>
                        </View>
                        <View style={styles.filterPill}>
                            <Text style={styles.filterPillText}>Admins (1)</Text>
                        </View>
                        <View style={styles.filterPill}>
                            <Text style={styles.filterPillText}>Usuarios (3)</Text>
                        </View>
                        <View style={styles.filterPill}>
                            <Text style={styles.filterPillText}>Bajas (1)</Text>
                        </View>
                    </View>

                    {/* Users List */}
                    <FlatList
                        data={USERS_LIST}
                        keyExtractor={(item) => item.id}
                        renderItem={renderUserCard}
                        scrollEnabled={false}
                        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                    />
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
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#1E293B',
    },
    headerSubtitle: {
        fontSize: 10,
        color: '#64748B',
        marginTop: 2,
    },
    addBtn: {
        backgroundColor: '#0084FF',
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius: 14,
    },
    addBtnText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '700',
    },
    statsRow: {
        flexDirection: 'row',
        gap: 6,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    statNum: {
        fontSize: 15,
        fontWeight: '800',
        color: '#1E293B',
    },
    statLabel: {
        fontSize: 9,
        color: '#64748B',
        fontWeight: '600',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingHorizontal: 12,
        height: 38,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    searchIcon: {
        fontSize: 12,
        marginRight: 6,
    },
    searchInput: {
        flex: 1,
        fontSize: 12,
        color: '#1E293B',
    },
    filtersRow: {
        flexDirection: 'row',
        gap: 6,
    },
    filterPill: {
        flex: 1,
        backgroundColor: '#E2E8F0',
        borderRadius: 12,
        paddingVertical: 6,
        alignItems: 'center',
    },
    filterPillActive: {
        backgroundColor: '#0084FF',
    },
    filterPillText: {
        color: '#475569',
        fontSize: 10,
        fontWeight: '600',
    },
    filterPillTextActive: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
    userCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        gap: 10,
    },
    userCardInactive: {
        backgroundColor: '#F8FAFC',
        borderColor: '#CBD5E1',
    },
    userTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    userAvatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },
    userInfo: {
        flex: 1,
        gap: 2,
    },
    nameBadgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
    },
    userName: {
        fontSize: 13,
        fontWeight: '700',
        color: '#1E293B',
        flex: 1,
    },
    roleBadge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
    },
    roleBadgeAdmin: {
        backgroundColor: '#EEF2FF',
        borderWidth: 1,
        borderColor: '#C7D2FE',
    },
    roleBadgeUser: {
        backgroundColor: '#F1F5F9',
    },
    roleBadgeText: {
        fontSize: 9,
        fontWeight: '700',
    },
    roleTextAdmin: {
        color: '#4338CA',
    },
    roleTextUser: {
        color: '#475569',
    },
    userEmail: {
        fontSize: 10,
        color: '#64748B',
    },
    userMeta: {
        fontSize: 10,
        color: '#94A3B8',
        fontWeight: '500',
    },
    controlsBox: {
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        gap: 8,
    },
    switchControlRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    controlLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#1E293B',
    },
    controlSub: {
        fontSize: 9,
        color: '#64748B',
    },
    divider: {
        height: 1,
        backgroundColor: '#E2E8F0',
    },
    actionsRow: {
        flexDirection: 'row',
        gap: 6,
    },
    actionChipBtn: {
        flex: 1,
        paddingVertical: 8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPromote: {
        backgroundColor: '#EEF2FF',
        borderWidth: 1,
        borderColor: '#C7D2FE',
    },
    textPromote: {
        color: '#4338CA',
    },
    btnDemote: {
        backgroundColor: '#FEF3C7',
        borderWidth: 1,
        borderColor: '#FDE68A',
    },
    textDemote: {
        color: '#B45309',
    },
    btnEdit: {
        backgroundColor: '#EFF6FF',
        borderWidth: 1,
        borderColor: '#BFDBFE',
    },
    textEdit: {
        fontSize: 10,
        fontWeight: '700',
        color: '#0084FF',
    },
    btnDelete: {
        backgroundColor: '#FEE2E2',
        borderWidth: 1,
        borderColor: '#FECACA',
    },
    textDelete: {
        fontSize: 10,
        fontWeight: '700',
        color: '#DC2626',
    },
    actionChipText: {
        fontSize: 10,
        fontWeight: '700',
    },
});

export default AdminUsersScreen;
