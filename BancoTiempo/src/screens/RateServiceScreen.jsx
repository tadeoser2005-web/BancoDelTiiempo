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
    Platform,
} from 'react-native';
import { colors } from '../styles/theme.js';

export const RateServiceScreen = ({
                                      onSubmitRating,
                                  }) => {
    const [rating, setRating] = useState(4);
    const [comments, setComments] = useState('Excelente Servicio');

    const handleSubmit = () => {
        if (onSubmitRating) {
            onSubmitRating(rating, comments);
        }
        if (Platform.OS !== 'web') {
            Alert.alert('¡Gracias!', 'Tu calificación ha sido registrada con éxito.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.headerRow}>
                    <Text style={styles.backChevron}>‹</Text>
                    <Text style={styles.headerTitle}>Calificar Servicio</Text>
                </View>

                <View style={styles.userSection}>
                    <Image
                        source={{  }}
                        style={styles.avatar}
                    />
                    <Text style={styles.userName}>Califica a Ramiro Ramirez</Text>
                </View>

                {/* 5 Stars */}
                <View style={styles.starsRow}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity key={star} onPress={() => setRating(star)} activeOpacity={0.7}>
                            <Text style={[styles.starIcon, star <= rating ? styles.starFilled : styles.starEmpty]}>
                                ★
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.commentBox}>
                    <Text style={styles.commentLabel}>Cometarios (Opcional)</Text>
                    <TextInput
                        style={styles.commentInput}
                        value={comments}
                        onChangeText={setComments}
                        placeholder="Escribe tus comentarios..."
                        placeholderTextColor="#94A3B8"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitBtn} activeOpacity={0.85} onPress={handleSubmit}>
                    <Text style={styles.submitBtnText}>Enviar Calificación</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginBottom: 24,
    },
    backChevron: {
        fontSize: 32,
        color: '#1E293B',
        marginRight: 8,
        fontWeight: '300',
        marginTop: -4,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1E293B',
    },
    userSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 3,
        borderColor: '#E2E8F0',
        marginBottom: 14,
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E293B',
    },
    starsRow: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 28,
    },
    starIcon: {
        fontSize: 34,
    },
    starFilled: {
        color: '#F59E0B',
    },
    starEmpty: {
        color: '#E2E8F0',
    },
    commentBox: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 3,
        marginBottom: 24,
    },
    commentLabel: {
        fontSize: 13,
        fontWeight: '600',
        color: '#64748B',
        marginBottom: 10,
    },
    commentInput: {
        fontSize: 14,
        color: '#1E293B',
        minHeight: 60,
    },
    submitBtn: {
        backgroundColor: colors.primary,
        borderRadius: 28,
        width: '100%',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
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

export default RateServiceScreen;
