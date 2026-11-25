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
    TextInput,
    Alert,
} from 'react-native';

export const ServiceDetailScreen = ({
                                        userCredits = 8.5,
                                        onBack,
                                    }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedDate, setSelectedDate] = useState('06/11/2026');
    const [selectedTime, setSelectedTime] = useState('14:00 - 15:00');
    const [message, setMessage] = useState('Hola, me gustaría agendar una asesoría para repasar algoritmos.');

    const handleRequestService = () => {
        if (userCredits < 1.0) {
            Alert.alert(
                'Créditos Insuficientes ',
                'No cuentas con créditos de tiempo suficientes para solicitar este servicio. Realiza un intercambio previo para ganar horas.'
            );
            return;
        }

        Alert.alert(
            '¡Solicitud Enviada! ',
            'Tu solicitud ha sido enviada al prestador del servicio. Se ha congelado temporalmente 1.0 crédito de tu cuenta hasta que la solicitud sea aceptada o rechazada.'
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={onBack} disabled={!onBack}>
                    <Text style={styles.backArrow}>‹</Text>
                    <Text style={styles.headerTitle}>Detalle del Servicio</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.favBtn}
                    onPress={() => setIsFavorite(!isFavorite)}
                >
                    <Text style={[styles.favIcon, isFavorite && styles.favIconActive]}>
                        {isFavorite ? '♥' : '♡'}
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.heroCard}>
                    <View style={styles.heroIconBox}>
                        <Text style={styles.heroCodeSymbol}>&lt;/&gt;</Text>
                    </View>
                    <View style={styles.categoryBadge}>
                        <Text style={styles.categoryText}>Programación & Algoritmos</Text>
                    </View>
                    <Text style={styles.serviceTitle}>
                        Asesoría en Estructuras de Datos y Programación
                    </Text>
                    <View style={styles.ratingRow}>
                        <Text style={styles.starText}>★ 4.5</Text>
                        <Text style={styles.ratingCount}>(13 alumnos calificados)</Text>
                        <View style={styles.dotSeparator} />
                        <Text style={styles.demandText}>3 solicitudes activas</Text>
                    </View>
                </View>

                {/* Provider Profile Card */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionHeader}>Prestador del Servicio</Text>
                    <View style={styles.providerRow}>
                        <Image
                            source={{

                            }}
                            style={styles.providerAvatar}
                        />
                        <View style={styles.providerInfo}>
                            <Text style={styles.providerName}>Ramiro Ramirez</Text>
                            <Text style={styles.providerSchool}>
                                UPQ • Ing. en Tecnologías de la Información
                            </Text>
                            <Text style={styles.providerMeta}>
                                Miembro desde: 01/08/25 • Nivel: 7mo Cuatrimestre
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoGrid}>
                    <View style={styles.infoCol}>
                        <Text style={styles.infoLabel}>Valor del Servicio</Text>
                        <Text style={styles.infoHighlight}>1.0 crédito = 1 hora</Text>
                    </View>
                    <View style={styles.infoCol}>
                        <Text style={styles.infoLabel}>Disponibilidad</Text>
                    </View>
                </View>

                <View style={styles.sectionCard}>
                    <Text style={styles.sectionHeader}>Descripción</Text>
                    <Text style={styles.descriptionText}>
                        Asesoría personalizada para estudiantes de la UPQ. Revisión de ejercicios en Java, Python y C++.
                        Explicación paso a paso de apuntadores, listas enlazadas, árboles binarios, recursividad y preparación para exámenes del parcial.
                    </Text>
                </View>

                <View style={styles.sectionCard}>
                    <Text style={styles.sectionHeader}>Proponer Fecha y Horario</Text>

                    <Text style={styles.fieldLabel}>Fecha tentativa de sesión</Text>
                    <TextInput
                        style={styles.inputField}
                        value={selectedDate}
                        onChangeText={setSelectedDate}
                        placeholder="DD/MM/AAAA"
                    />

                    <Text style={styles.fieldLabel}>Horario deseado</Text>
                    <TextInput
                        style={styles.inputField}
                        value={selectedTime}
                        onChangeText={setSelectedTime}
                        placeholder="Ej. 14:00 - 15:00"
                    />

                    <Text style={styles.fieldLabel}>Mensaje o temas específicos</Text>
                    <TextInput
                        style={[styles.inputField, styles.textArea]}
                        value={message}
                        onChangeText={setMessage}
                        multiline
                        numberOfLines={3}
                        placeholder="Describe qué tema te gustaría repasar..."
                    />
                </View>

                <View style={styles.rulesCallout}>
                    <Text style={styles.rulesCalloutTitle}> Protección de Créditos :</Text>
                    <Text style={styles.rulesCalloutText}>
                        Al presionar "Solicitar Servicio", el sistema retendrá 1 crédito en garantía. No se transferirá al prestador hasta que la sesión sea completada exitosamente.
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.bottomBar}>
                <View style={styles.bottomCreditInfo}>
                    <Text style={styles.bottomCreditLabel}>Tu saldo actual:</Text>
                    <Text style={styles.bottomCreditValue}>{userCredits} h</Text>
                </View>

                <TouchableOpacity
                    style={styles.requestButton}
                    activeOpacity={0.85}
                    onPress={handleRequestService}
                >
                    <Text style={styles.requestButtonText}>Solicitar Servicio</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#F1F5F9',
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    backArrow: {
        fontSize: 28,
        color: '#0F172A',
        fontWeight: '300',
        lineHeight: 28,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0F172A',
    },
    favBtn: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F8FAFC',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    favIcon: {
        fontSize: 20,
        color: '#64748B',
    },
    favIconActive: {
        color: '#EF4444',
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 24,
    },
    heroCard: {
        backgroundColor: '#F8FAFC',
        borderRadius: 20,
        padding: 18,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginBottom: 16,
    },
    heroIconBox: {
        width: 72,
        height: 72,
        borderRadius: 20,
        backgroundColor: '#0F172A',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    heroCodeSymbol: {
        fontSize: 28,
        color: '#38BDF8',
        fontWeight: '800',
        letterSpacing: -1,
    },
    categoryBadge: {
        backgroundColor: '#EFF6FF',
        borderWidth: 1,
        borderColor: '#BFDBFE',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 8,
    },
    categoryText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1D4ED8',
    },
    serviceTitle: {
        fontSize: 17,
        fontWeight: '800',
        color: '#0F172A',
        textAlign: 'center',
        marginBottom: 8,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    starText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#F59E0B',
    },
    ratingCount: {
        fontSize: 12,
        color: '#64748B',
    },
    dotSeparator: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#CBD5E1',
    },
    demandText: {
        fontSize: 12,
        color: '#10B981',
        fontWeight: '600',
    },
    sectionCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        marginBottom: 14,
        shadowColor: '#000',
        shadowOpacity: 0.02,
        shadowRadius: 4,
    },
    sectionHeader: {
        fontSize: 14,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 10,
    },
    providerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    providerAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#E2E8F0',
    },
    providerInfo: {
        flex: 1,
    },
    providerName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#0F172A',
    },
    providerSchool: {
        fontSize: 12,
        color: '#475569',
        marginTop: 2,
    },
    providerMeta: {
        fontSize: 11,
        color: '#94A3B8',
        marginTop: 2,
    },
    infoGrid: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 14,
    },
    infoCol: {
        flex: 1,
        backgroundColor: '#F8FAFC',
        padding: 14,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: '#64748B',
        textTransform: 'uppercase',
    },
    infoHighlight: {
        fontSize: 14,
        fontWeight: '800',
        color: '#0F172A',
        marginTop: 4,
    },
    infoSub: {
        fontSize: 10,
        color: '#10B981',
        marginTop: 2,
        fontWeight: '500',
    },
    descriptionText: {
        fontSize: 13,
        color: '#334155',
        lineHeight: 20,
    },
    fieldLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#475569',
        marginBottom: 6,
        marginTop: 6,
    },
    inputField: {
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 13,
        color: '#0F172A',
        marginBottom: 6,
    },
    textArea: {
        height: 64,
        textAlignVertical: 'top',
    },
    rulesCallout: {
        backgroundColor: '#FEF3C7',
        borderWidth: 1,
        borderColor: '#FDE68A',
        borderRadius: 14,
        padding: 12,
        marginBottom: 8,
    },
    rulesCalloutTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#92400E',
        marginBottom: 4,
    },
    rulesCalloutText: {
        fontSize: 11,
        color: '#78350F',
        lineHeight: 16,
    },
    bottomBar: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E2E8F0',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
    },
    bottomCreditInfo: {
        justifyContent: 'center',
    },
    bottomCreditLabel: {
        fontSize: 11,
        color: '#64748B',
    },
    bottomCreditValue: {
        fontSize: 16,
        fontWeight: '800',
        color: '#0084FF',
    },
    requestButton: {
        flex: 1,
        backgroundColor: '#0084FF',
        paddingVertical: 12,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0084FF',
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    requestButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
});

export default ServiceDetailScreen;
