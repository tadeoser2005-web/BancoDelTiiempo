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

export const AdminTransactionsScreen = () => {
    const [filterText, setFilterText] = useState('');

    const transactions = [
        {
            id: 'tx-1',
            name: 'Glenda Barrera',
            email: 'Gbarreraa@gmail.com',
            date: '10/09/26',
            status: 'Cancelado',
            avatar: '',
        },
        {
            id: 'tx-2',
            name: 'Jason Gomez',
            email: 'jasong@gmail.com',
            date: '04/08/26',
            status: 'Completado',
            avatar: '',//aqui le podemos poner una imagen
        },
        {
            id: 'tx-3',
            name: 'Valeria Hernandez',
            email: 'valeria@gmail.com',
            date: '04/10/26',
            status: 'Cancelado',
            avatar: '',//imagen para un avatar
        },
    ];

    const filteredTx = transactions.filter(t =>
        t.name.toLowerCase().includes(filterText.toLowerCase()) ||
        t.email.toLowerCase().includes(filterText.toLowerCase())
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

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>👥</Text>
                        <Text style={styles.sideLabel}>Gestión{'\n'}Usuarios</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>⚙️</Text>
                        <Text style={styles.sideLabel}>GesServ</Text>
                    </View>

                    <View style={styles.sideItem}>
                        <Text style={styles.sideIcon}>📋</Text>
                        <Text style={styles.sideLabel}>Reportes</Text>
                    </View>

                    <View style={[styles.sideItem, styles.sideItemActive]}>
                        <Text style={styles.sideIcon}>⚡</Text>
                        <Text style={[styles.sideLabel, styles.sideLabelActive]}>Transaccione</Text>
                    </View>
                </View>

                <ScrollView style={styles.contentScroll} contentContainerStyle={styles.scrollPadding} showsVerticalScrollIndicator={false}>
                    <Text style={styles.headerTitle}>Transacciones</Text>
                    <Text style={styles.headerSubtitle}>Registros de intercambios realizados</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Buscar por ID / Estado"
                        placeholderTextColor="#94A3B8"
                        value={filterText}
                        onChangeText={setFilterText}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Nombre completo"
                        placeholderTextColor="#94A3B8"
                        value={filterText}
                        onChangeText={setFilterText}
                    />

                    <View style={styles.txList}>
                        {filteredTx.map((tx) => (
                            <View key={tx.id} style={styles.txCard}>
                                <Image source={{ uri: tx.avatar }} style={styles.avatar} />
                                <View style={styles.txInfo}>
                                    <Text style={styles.txName}>{tx.name}</Text>
                                    <Text style={styles.txEmail}>{tx.email}</Text>
                                    <Text style={styles.txDate}>📅 {tx.date}</Text>
                                </View>
                                <View style={[
                                    styles.statusBadge,
                                    tx.status === 'Completado' ? styles.statusCompleted : styles.statusCanceled
                                ]}>
                                    <Text style={styles.statusBadgeText}>{tx.status}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={styles.btnGreen}
                        activeOpacity={0.85}
                        onPress={() => navigateTo('adminGenerateReport')}
                    >
                        <Text style={styles.btnGreenText}>Generar reporte</Text>
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
    input: {
        backgroundColor: '#EAEAEA',
        borderRadius: 18,
        height: 38,
        paddingHorizontal: 14,
        fontSize: 12,
        color: '#1E293B',
    },
    txList: {
        gap: 12,
        marginTop: 6,
    },
    txCard: {
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
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 10,
    },
    txInfo: {
        flex: 1,
    },
    txName: {
        fontSize: 12,
        fontWeight: '700',
        color: '#1E293B',
    },
    txEmail: {
        fontSize: 10,
        color: '#64748B',
    },
    txDate: {
        fontSize: 9,
        color: '#94A3B8',
        marginTop: 2,
    },
    statusBadge: {
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    statusCompleted: {
        backgroundColor: '#10B981',
    },
    statusCanceled: {
        backgroundColor: '#0D9488',
    },
    statusBadgeText: {
        color: '#FFFFFF',
        fontSize: 9,
        fontWeight: '700',
    },
    btnGreen: {
        backgroundColor: '#22C55E',
        borderRadius: 22,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
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
});

export default AdminTransactionsScreen;
