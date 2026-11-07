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

const AVATAR_OPTIONS = [
];//aqui pondremos opciones de imagenes para q se pongan de perfil

export const EditProfileScreen = ({
                                      onSaveProfile,
                                  }) => {
    const [fullName, setFullName] = useState('Juan Ramirez');
    const [email, setEmail] = useState('juan.ramirez@upq.edu.mx');
    const [career, setCareer] = useState('Ing. en Tecnologías de la Información');
    const [semester, setSemester] = useState('7mo Cuatrimestre');
    const [phone, setPhone] = useState('442 384 9201');
    const [bio, setBio] = useState('Estudiante de ingeniería apasionado por el desarrollo de software y las matemáticas.');
    const [avatar, setAvatar] = useState(AVATAR_OPTIONS[0]);

    const [skills, setSkills] = useState([
        'Programación',
        'Matemáticas',
        'Física cuántica',
        'Álgebra Lineal',
    ]);
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = () => {
        const trimmed = newSkill.trim();
        if (!trimmed) return;
        if (skills.includes(trimmed)) {
            Alert.alert('Aviso', 'Esta habilidad ya se encuentra en tu lista.');
            return;
        }
        setSkills([...skills, trimmed]);
        setNewSkill('');
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter((s) => s !== skillToRemove));
    };

    const handleSave = () => {
        if (!fullName.trim()) {
            Alert.alert('Error', 'El nombre completo es obligatorio.');
            return;
        }
        if (!email.includes('@')) {
            Alert.alert('Error', 'Ingresa un correo electrónico válido con @.');
            return;
        }

        const updatedProfile = {
            fullName,
            email,
            career,
            semester,
            phone,
            bio,
            avatar,
            skills,
        };

        if (onSaveProfile) {
            onSaveProfile(updatedProfile);
        }

        Alert.alert('¡Perfil Actualizado!', 'Tus cambios han sido guardados exitosamente.');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.headerRow}>
                <View style={styles.backBtn}>
                    <Text style={styles.backChevron}>‹</Text>
                    <Text style={styles.headerTitle}>Editar perfil</Text>
                </View>

                <TouchableOpacity style={styles.saveTopBtn} onPress={handleSave}>
                    <Text style={styles.saveTopText}>Guardar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.avatarSection}>
                    <Image source={{ uri: avatar }} style={styles.avatarPreview} />
                    <Text style={styles.avatarHelpText}>Selecciona tu foto de perfil:</Text>
                    <View style={styles.avatarPickerRow}>
                        {AVATAR_OPTIONS.map((uri, idx) => (
                            <TouchableOpacity
                                key={idx}
                                onPress={() => setAvatar(uri)}
                                style={[
                                    styles.avatarChoice,
                                    avatar === uri && styles.avatarChoiceSelected,
                                ]}
                            >
                                <Image source={{ uri }} style={styles.avatarChoiceImg} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.formSection}>
                    <Text style={styles.sectionHeading}>Datos Personales</Text>

                    <Text style={styles.inputLabel}>Nombre Completo *</Text>
                    <TextInput
                        style={styles.textInput}
                        value={fullName}
                        onChangeText={setFullName}
                        placeholder="Tu nombre completo"
                    />

                    <Text style={styles.inputLabel}>Correo Institucional *</Text>
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="correo@upq.edu.mx"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.inputLabel}>Carrera / Programa Académico</Text>
                    <TextInput
                        style={styles.textInput}
                        value={career}
                        onChangeText={setCareer}
                        placeholder="Ej. Ing. en Tecnologías de la Información"
                    />

                    <View style={styles.formRow}>
                        <View style={{ flex: 1, marginRight: 8 }}>
                            <Text style={styles.inputLabel}>Cuatrimestre</Text>
                            <TextInput
                                style={styles.textInput}
                                value={semester}
                                onChangeText={setSemester}
                                placeholder="Ej. 7mo"
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.inputLabel}>Teléfono</Text>
                            <TextInput
                                style={styles.textInput}
                                value={phone}
                                onChangeText={setPhone}
                                placeholder="Ej. 442 123 4567"
                                keyboardType="phone-pad"
                            />
                        </View>
                    </View>

                    <Text style={styles.inputLabel}> Presentación</Text>
                    <TextInput
                        style={[styles.textInput, styles.textArea]}
                        value={bio}
                        onChangeText={setBio}
                        placeholder="Cuéntale a la comunidad tus intereses..."
                        multiline
                        numberOfLines={3}
                    />
                </View>

                <View style={styles.formSection}>
                    <Text style={styles.sectionHeading}>Gestionar Habilidades</Text>
                    <Text style={styles.sectionSub}>
                        Las habilidades que registres aparecerán en tu perfil para que otros alumnos puedan solicitar tus servicios.
                    </Text>

                    <View style={styles.addSkillRow}>
                        <TextInput
                            style={styles.addSkillInput}
                            value={newSkill}
                            onChangeText={setNewSkill}
                            placeholder="Nueva habilidad "
                        />
                        <TouchableOpacity
                            style={styles.addSkillBtn}
                            onPress={handleAddSkill}
                        >
                            <Text style={styles.addSkillBtnText}>+ Agregar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.skillsContainer}>
                        {skills.map((skill, index) => (
                            <View key={index} style={styles.skillBadge}>
                                <Text style={styles.skillBadgeText}>{skill}</Text>
                                <TouchableOpacity
                                    style={styles.removeSkillBtn}
                                    onPress={() => handleRemoveSkill(skill)}
                                >
                                    <Text style={styles.removeSkillText}>✕</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={styles.saveButton}
                        activeOpacity={0.85}
                        onPress={handleSave}
                    >
                        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cancelButton}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.cancelButtonText}>Cancelar</Text>
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
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#F1F5F9',
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backChevron: {
        fontSize: 32,
        color: '#1E293B',
        marginRight: 6,
        fontWeight: '300',
        marginTop: -4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E293B',
    },
    saveTopBtn: {
        backgroundColor: '#0084FF',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 14,
    },
    saveTopText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 40,
    },
    avatarSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarPreview: {
        width: 84,
        height: 84,
        borderRadius: 42,
        borderWidth: 3,
        borderColor: '#0084FF',
        marginBottom: 10,
    },
    avatarHelpText: {
        fontSize: 12,
        color: '#64748B',
        marginBottom: 8,
        fontWeight: '500',
    },
    avatarPickerRow: {
        flexDirection: 'row',
        gap: 8,
    },
    avatarChoice: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: 'transparent',
        overflow: 'hidden',
    },
    avatarChoiceSelected: {
        borderColor: '#0084FF',
    },
    avatarChoiceImg: {
        width: '100%',
        height: '100%',
    },
    formSection: {
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginBottom: 16,
    },
    sectionHeading: {
        fontSize: 14,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 4,
    },
    sectionSub: {
        fontSize: 11,
        color: '#64748B',
        marginBottom: 12,
        lineHeight: 16,
    },
    inputLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#475569',
        marginBottom: 6,
        marginTop: 8,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 13,
        color: '#0F172A',
    },
    textArea: {
        height: 64,
        textAlignVertical: 'top',
    },
    formRow: {
        flexDirection: 'row',
    },
    addSkillRow: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 12,
    },
    addSkillInput: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 13,
        color: '#0F172A',
    },
    addSkillBtn: {
        backgroundColor: '#0F172A',
        paddingHorizontal: 14,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addSkillBtnText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    skillBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFF6FF',
        borderWidth: 1,
        borderColor: '#BFDBFE',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 16,
        gap: 6,
    },
    skillBadgeText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1D4ED8',
    },
    removeSkillBtn: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#BFDBFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeSkillText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#1E40AF',
    },
    actionButtons: {
        gap: 10,
        marginTop: 8,
    },
    saveButton: {
        backgroundColor: '#0084FF',
        paddingVertical: 14,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#0084FF',
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
    },
    cancelButton: {
        backgroundColor: '#F1F5F9',
        paddingVertical: 12,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: '#64748B',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default EditProfileScreen;
