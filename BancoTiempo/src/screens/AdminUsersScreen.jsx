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
    Image,
} from 'react-native';
import { colors } from '../styles/theme.js';

export const AdminUsersScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const usersList = [
        {
            id: 'u-ramiro',
            name: 'Ramiro Ramirez',
            email: 'ramiro@ramirez.com',
            role: 'Usuario',
            status: 'Activo',
            avatar: '',
        },
        {
            id: 'u-Barrera',
            name: 'Glenda Barrera',
            email: 'Gbarreraa@gmail.com',
            role: 'Usuario',
            status: 'Activo',
            avatar: '',
        },
        {
            id: 'u-momoa',
            name: 'Jason Momoa',
            email: 'jasong@gmail.com',
            role: 'Usuario',
            status: 'Activo',
            avatar: '',
        },
        {
            id: 'u-valeria',
            name: 'Valeria Hernandez',
            email: 'valeria@gmail.com',
            role: 'Usuario',
            status: 'Activo',
            avatar: '',
        },
    ];

    const filteredUsers = usersList.filter(u =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.mainLayout}>
                <View style={styles.sidebar}>
                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>📊</Text>
                        <Text style={styles.sideLabel}>Dashboard</Text>
                    </View>

                    <View style={[styles.sideItem, styles.sideItemActive]}>
                        <Text style={styles.sideIcon}>👥</Text>
                        <Text style={[styles.sideLabel, styles.sideLabelActive]}>Gestión{'\n'}Usuarios</Text>
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
                    {/* Search Input */}
                    <View style={styles.searchBar}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            placeholderTextColor="#94A3B8"
                            value={searchTerm}
                            onChangeText={setSearchTerm}
                        />
                    </View>

                    <View style={styles.filtersRow}>
                        <TouchableOpacity style={styles.filterPill}>
                            <Text style={styles.filterPillText}>Todos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterPill}>
                            <Text style={styles.filterPillText}>Todos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterPill}>
                            <Text style={styles.filterPillText}>Todos</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.actionBtn} activeOpacity={0.85} onPress={() => navigateTo('publish')}>
                        <Text style={styles.actionBtnText}>Solicitarr Servicio</Text>
                    </TouchableOpacity>

                    <View style={styles.usersList}>
                        {filteredUsers.map((user) => (
                            <TouchableOpacity
                                key={user.id}
                                style={styles.userCard}
                                activeOpacity={0.8}
                                onPress={() => handleUserClick(user.id)}
                            >
                                <Image source={{ uri: user.avatar }} style={styles.userAvatar} />
                                <View style={styles.userInfo}>
                                    <Text style={styles.userName}>{user.name}</Text>
                                    <Text style={styles.userEmail}>{user.email}</Text>
                                    <View style={styles.roleRow}>
                                        <Text style={styles.roleIcon}>👤</Text>
                                        <Text style={styles.roleText}>{user.role}</Text>
                                    </View>
                                </View>
                                <View style={styles.badgeActive}>
                                    <Text style={styles.badgeActiveText}>{user.status}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
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
        gap: 12,
        paddingBottom: 40,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        borderRadius: 20,
        paddingHorizontal: 12,
        height: 38,
    },
    searchIcon: {
        fontSize: 12,
        marginRight: 6,
        color: '#64748B',
    },
    searchInput: {
        flex: 1,
        fontSize: 13,
        color: '#1E293B',
    },
    filtersRow: {
        flexDirection: 'row',
        gap: 6,
    },
    filterPill: {
        flex: 1,
        backgroundColor: colors.primary,
        borderRadius: 16,
        paddingVertical: 6,
        alignItems: 'center',
    },
    filterPillText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '600',
    },
    actionBtn: {
        backgroundColor: colors.primary,
        borderRadius: 22,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0084FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3,
    },
    actionBtnText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
    usersList: {
        gap: 12,
        marginTop: 6,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 10,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    userAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 12,
        fontWeight: '700',
        color: '#1E293B',
    },
    userEmail: {
        fontSize: 10,
        color: '#64748B',
        marginBottom: 2,
    },
    roleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    roleIcon: {
        fontSize: 10,
    },
    roleText: {
        fontSize: 9,
        color: '#94A3B8',
    },
    badgeActive: {
        backgroundColor: '#10B981',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    badgeActiveText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
    },
});

export default AdminUsersScreen;
