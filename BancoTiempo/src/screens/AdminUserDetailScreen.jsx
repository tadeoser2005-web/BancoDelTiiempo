import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    Alert,
    Platform,
} from 'react-native';

export const AdminUserDetailScreen = () => {
    const [status, setStatus] = useState('activo');
    const [feedback, setFeedback] = useState('');

    const handleSave = () => {
        setFeedback('Cambios guardados con éxito.');
        if (Platform.OS !== 'web') Alert.alert('Guardado', 'Los datos del usuario han sido actualizados.');
    };

    const handleDelete = () => {
        setStatus('inactivo');
        const msg = 'Usuario marcado como inactivo ';
        setFeedback(msg);
        if (Platform.OS !== 'web') Alert.alert('Cuenta Inactivada', msg);
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

                {/* Content */}
                <ScrollView style={styles.contentScroll} contentContainerStyle={styles.scrollPadding} showsVerticalScrollIndicator={false}>
                    <Text style={styles.headerTitle}>Detalle del usuario</Text>

                    {feedback ? <Text style={styles.feedbackBanner}>{feedback}</Text> : null}

                    <View style={styles.profileBox}>
                        <Image
                            source={{}}//imagencita de perfil
                            style={styles.avatar}
                        />
                        <Text style={styles.userName}>Ramiro Ramirez</Text>
                        <View style={[styles.statusBadge, status === 'activo' ? styles.statusActive : styles.statusInactive]}>
                            <Text style={styles.statusBadgeText}>{status === 'activo' ? 'Activo' : 'Inactivo'}</Text>
                        </View>
                    </View>

                    <View style={styles.fieldsList}>
                        <View style={styles.fieldRow}>
                            <Text style={styles.fieldLabel}>Nombre completo:</Text>
                            <Text style={styles.fieldValue}>Ramiro Ramirez Hernandez</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.fieldLabel}>Correo electronico:</Text>
                            <Text style={styles.fieldValue}>ramiro@ramirez.com</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.fieldLabel}>Rol:</Text>
                            <Text style={styles.fieldValue}>Usuario activo</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.fieldLabel}>Estado:</Text>
                            <Text style={styles.fieldValue}>{status}</Text>
                        </View>

                        <View style={styles.fieldRow}>
                            <Text style={styles.fieldLabel}>Creditos actuales:</Text>
                            <Text style={styles.fieldValue}>8.5</Text>
                        </View>
                    </View>

                    {/* Buttons */}
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.btnGreen} activeOpacity={0.85} onPress={handleSave}>
                            <Text style={styles.btnGreenText}>Guardar cambios</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnDark} activeOpacity={0.85} onPress={handleDelete}>
                            <Text style={styles.btnDarkText}>Eliminar usuario</Text>
                        </TouchableOpacity>
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
        padding: 16,
        gap: 16,
        paddingBottom: 40,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 8,
    },
    feedbackBanner: {
        backgroundColor: '#F0FDF4',
        borderColor: '#BBF7D0',
        borderWidth: 1,
        color: '#15803D',
        padding: 8,
        borderRadius: 8,
        fontSize: 11,
        textAlign: 'center',
    },
    profileBox: {
        alignItems: 'center',
        gap: 8,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 3,
        borderColor: '#E2E8F0',
    },
    userName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
    },
    statusBadge: {
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    statusActive: {
        backgroundColor: '#10B981',
    },
    statusInactive: {
        backgroundColor: '#EF4444',
    },
    statusBadgeText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
    },
    fieldsList: {
        gap: 10,
        backgroundColor: '#F8FAFC',
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    fieldRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fieldLabel: {
        fontSize: 11,
        color: '#64748B',
        fontWeight: '500',
    },
    fieldValue: {
        fontSize: 11,
        color: '#1E293B',
        fontWeight: '600',
    },
    actionsContainer: {
        gap: 10,
        marginTop: 8,
    },
    btnGreen: {
        backgroundColor: '#22C55E',
        borderRadius: 20,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnGreenText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
    btnDark: {
        backgroundColor: '#374151',
        borderRadius: 20,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnDarkText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
});

export default AdminUserDetailScreen;
