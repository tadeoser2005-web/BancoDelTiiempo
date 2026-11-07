import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';

const SCREENS = [
    { id: 'splash', name: 'Splash' },
    { id: 'login', name: 'Login' },
    { id: 'home', name: 'Inicio' },
    { id: 'publish', name: 'Publicar Servicio' },
    { id: 'explore', name: 'Explorar' },
    { id: 'serviceDetail', name: 'Detalle de Servicio' },
    { id: 'requests', name: 'Mis Solicitudes' },
    { id: 'requestDetail', name: 'Detalle de Solicitud' },
    { id: 'activeExchange', name: 'Intercambio Activo' },
    { id: 'credits', name: 'Mis Créditos' },
    { id: 'profile', name: 'Mi Perfil' },
    { id: 'editProfile', name: 'Editar Perfil' },
    { id: 'favorites', name: 'Mis Favoritos' },
    { id: 'rate', name: 'Calificar Servicio' },
    { id: 'adminDashboard', name: 'Admin Dashboard' },
    { id: 'adminUsers', name: 'Admin Usuarios' },
    { id: 'adminUserDetail', name: 'Admin Detalle Usuario' },
    { id: 'adminServices', name: 'Admin Servicios' },
    { id: 'adminReports', name: 'Admin Reportes' },
    { id: 'adminTransactions', name: 'Admin Transacciones' },
    { id: 'adminGenerateReport', name: 'Admin Generar Reporte' },
    { id: 'adminReportPreview', name: 'Admin Vista Previa de Reporte' },
];

export const MenuScreen = ({ onSelectScreen }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Pantallas</Text>
                <View style={styles.grid}>
                    {SCREENS.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.card}
                            activeOpacity={0.7}
                            onPress={() => onSelectScreen && onSelectScreen(item.id)}
                        >
                            <Text style={styles.cardText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
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
        padding: 16,
        paddingBottom: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 16,
        textAlign: 'center',
    },
    grid: {
        gap: 10,
    },
    card: {
        backgroundColor: '#F3F4F6',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
    },
});

export default MenuScreen;
