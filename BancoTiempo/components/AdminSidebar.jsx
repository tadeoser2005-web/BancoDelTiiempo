import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const ADMIN_NAV_ITEMS = [
    { id: 'adminDashboard', icon: '📊', label: 'Dashboard' },
    { id: 'adminUsers', icon: '👥', label: 'Gestión\nUsuarios' },
    { id: 'adminServices', icon: '⚙️', label: 'GesServ' },
    { id: 'adminCategorias', icon: '🏷️', label: 'Categorías' },
    { id: 'adminReports', icon: '📋', label: 'Reportes' },
    { id: 'adminTransactions', icon: '⚡', label: 'Transacc.' },
];

export const AdminSidebar = ({ activeScreen, onNavigate }) => {
    return (
        <View style={styles.sidebar}>
            {ADMIN_NAV_ITEMS.map((item) => {
                const isActive = activeScreen === item.id;
                return (
                    <Pressable
                        key={item.id}
                        style={[styles.sideItem, isActive && styles.sideItemActive]}
                        onPress={() => onNavigate && onNavigate(item.id)}
                    >
                        <Text style={styles.sideIcon}>{item.icon}</Text>
                        <Text style={[styles.sideLabel, isActive && styles.sideLabelActive]}>
                            {item.label}
                        </Text>
                    </Pressable>
                );
            })}

            {onNavigate ? (
                <Pressable
                    style={[styles.sideItem, styles.sideItemBottom]}
                    onPress={() => onNavigate('home')}
                >
                    <Text style={styles.sideIcon}>‹</Text>
                    <Text style={styles.sideLabel}>Volver</Text>
                </Pressable>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    sidebar: {
        width: 64,
        backgroundColor: '#F8FAFC',
        borderRightWidth: 1,
        borderRightColor: '#E2E8F0',
        paddingVertical: 14,
        alignItems: 'center',
        gap: 14,
    },
    sideItem: {
        alignItems: 'center',
        paddingVertical: 6,
        width: '100%',
    },
    sideItemActive: {
        borderLeftWidth: 3,
        borderLeftColor: '#0084FF',
        backgroundColor: '#EFF6FF',
    },
    sideIcon: {
        fontSize: 17,
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
    sideItemBottom: {
        marginTop: 'auto',
        borderTopWidth: 1,
        borderTopColor: '#E2E8F0',
        paddingTop: 10,
    },
});

export default AdminSidebar;
