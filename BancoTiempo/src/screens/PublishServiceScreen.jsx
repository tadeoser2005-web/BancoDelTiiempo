import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Alert,
    Platform,
} from 'react-native';
import { colors } from '../styles/theme.js';

export const PublishServiceScreen = ({
                                         onAddService,
                                     }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [availability, setAvailability] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handlePublish = () => {
        if (!title.trim() || !category.trim() || !description.trim() || !duration.trim() || !availability.trim()) {
            const err = 'Todos los campos son obligatorios para publicar un servicio.';
            setErrorMsg(err);
            if (Platform.OS !== 'web') Alert.alert('Campos incompletos', err);
            return;
        }

        const newService = {
            id: `s-${Date.now()}`,
            title: title.trim(),
            category: category.trim(),
            description: description.trim(),
            durationLabel: duration.trim(),
            durationHours: 1,
            availability: availability.trim(),
            solicitudesCount: 0,
            userName: 'Max',
            rating: 5.0,
            iconType: 'code',
            isActive: true,
            isFeatured: false,
        };

        if (onAddService) {
            onAddService(newService);
        }

        setErrorMsg('');
        setSuccessMsg('¡Servicio publicado con éxito!');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.headerRow}>
                    <Text style={styles.backChevron}>‹</Text>
                    <Text style={styles.headerTitle}>Publicar Servicio</Text>
                </View>

                {errorMsg ? <Text style={styles.errorBanner}>{errorMsg}</Text> : null}
                {successMsg ? <Text style={styles.successBanner}>{successMsg}</Text> : null}

                <View style={styles.form}>
                    <View style={styles.fieldGroup}>
                        <Text style={styles.fieldLabel}>Titulo del Servicio</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ej. Asesoría en Programación Python"
                            placeholderTextColor="#9CA3AF"
                            value={title}
                            onChangeText={setTitle}
                        />
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.fieldLabel}>Categoría</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ej. Tecnología / Matemáticas"
                            placeholderTextColor="#9CA3AF"
                            value={category}
                            onChangeText={setCategory}
                        />
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.fieldLabel}>Descripción</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Describe detalladamente los temas y habilidades..."
                            placeholderTextColor="#9CA3AF"
                            multiline
                            numberOfLines={3}
                            textAlignVertical="top"
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.fieldLabel}>Duración</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ej. 1 hora / 50 min"
                            placeholderTextColor="#9CA3AF"
                            value={duration}
                            onChangeText={setDuration}
                        />
                    </View>

                    <View style={styles.fieldGroup}>
                        <Text style={styles.fieldLabel}>Disponibilidad</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="disponibilidad"
                            placeholderTextColor="#9CA3AF"
                            value={availability}
                            onChangeText={setAvailability}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitBtn} activeOpacity={0.85} onPress={handlePublish}>
                        <Text style={styles.submitBtnText}>Publicar Servicio</Text>
                    </TouchableOpacity>
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
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 40,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 28,
    },
    backChevron: {
        fontSize: 32,
        color: '#1E293B',
        marginRight: 10,
        fontWeight: '300',
        marginTop: -4,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1E293B',
    },
    errorBanner: {
        backgroundColor: '#FEE2E2',
        color: '#DC2626',
        padding: 10,
        borderRadius: 12,
        fontSize: 13,
        marginBottom: 16,
        textAlign: 'center',
    },
    successBanner: {
        backgroundColor: '#DCFCE7',
        color: '#16A34A',
        padding: 10,
        borderRadius: 12,
        fontSize: 13,
        marginBottom: 16,
        textAlign: 'center',
        fontWeight: '600',
    },
    form: {
        gap: 16,
    },
    fieldGroup: {
        gap: 6,
    },
    fieldLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#334155',
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#EDEDED',
        borderRadius: 20,
        height: 46,
        paddingHorizontal: 18,
        fontSize: 14,
        color: '#1E293B',
    },
    textArea: {
        height: 72,
        paddingTop: 12,
        borderRadius: 18,
    },
    submitBtn: {
        backgroundColor: colors.primary,
        borderRadius: 28,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
        shadowColor: '#0084FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    },
    submitBtnText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },
});

export default PublishServiceScreen;
