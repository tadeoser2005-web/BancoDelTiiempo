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

const DEFAULT_AVATARS = [

];//skins por defecto

export const ProfileScreen = () => {
    // Profile state
    const [isEditing, setIsEditing] = useState(false);
    const [profileName, setProfileName] = useState('Juan Ramirez');
    const [email, setEmail] = useState('juangramirez.com');
    const [career, setCareer] = useState('Ing. en Tecnologías de la Información');
    const [memberSince, setMemberSince] = useState('01/08/25');
    const [avatar, setAvatar] = useState(DEFAULT_AVATARS[0]);
    const [skills, setSkills] = useState([
        'Programación',
        'Matemáticas',
        'Física cuántica',
        'Álgebra Lineal',
    ]);
    const [newSkillText, setNewSkillText] = useState('');

    const [tempName, setTempName] = useState(profileName);
    const [tempEmail, setTempEmail] = useState(email);
    const [tempCareer, setTempCareer] = useState(career);
    const [tempSkills, setTempSkills] = useState([...skills]);
    const [tempAvatar, setTempAvatar] = useState(avatar);

    const handleBack = () => {
        if (isEditing) {
            setIsEditing(false);
        }
    };

    const handleStartEdit = () => {
        setTempName(profileName);
        setTempEmail(email);
        setTempCareer(career);
        setTempSkills([...skills]);
        setTempAvatar(avatar);
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        if (!tempName.trim()) {
            Alert.alert('Error', 'El nombre no puede estar vacío.');
            return;
        }
        setProfileName(tempName.trim());
        setEmail(tempEmail.trim());
        setCareer(tempCareer.trim());
        setSkills([...tempSkills]);
        setAvatar(tempAvatar);
        setIsEditing(false);
        Alert.alert('¡Éxito!', 'Perfil actualizado correctamente.');
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleAddSkill = () => {
        const trimmed = newSkillText.trim();
        if (!trimmed) return;
        if (tempSkills.includes(trimmed)) {
            Alert.alert('Aviso', 'Esta habilidad ya existe en tu perfil.');
            return;
        }
        setTempSkills([...tempSkills, trimmed]);
        setNewSkillText('');
    };

    const handleRemoveSkill = (skill) => {
        setTempSkills(tempSkills.filter((s) => s !== skill));
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.backBtn} onPress={handleBack} activeOpacity={0.7}>
                        <Text style={styles.backChevron}>‹</Text>
                        <Text style={styles.headerTitle}>
                            {isEditing ? 'Editar Perfil' : 'Mi perfil'}
                        </Text>
                    </TouchableOpacity>

                    {!isEditing ? (
                        <TouchableOpacity style={styles.editPencilBtn} onPress={handleStartEdit}>
                            <Text style={styles.editPencilText}>✏️ Editar</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.saveTopBtn} onPress={handleSaveEdit}>
                            <Text style={styles.saveTopText}>Guardar</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {/* View Mode */}
                {!isEditing ? (
                    <>
                        {/* Profile Card Header (Matching PDF Page 20) */}
                        <View style={styles.profileCard}>
                            <Image source={{ uri: avatar }} style={styles.avatar} />
                            <Text style={styles.profileName}>{profileName}</Text>
                            <View style={styles.ratingBadge}>
                                <Text style={styles.starText}>★</Text>
                                <Text style={styles.ratingValue}>4.2</Text>
                                <Text style={styles.ratingDivider}>|</Text>
                                <Text style={styles.servicesCount}>12 servicios</Text>
                            </View>

                            {/* Quick Edit Profile Button */}
                            <TouchableOpacity style={styles.editProfilePill} onPress={handleStartEdit}>
                                <Text style={styles.editProfilePillText}>Editar información de perfil</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionHeading}>Mis habilidades</Text>
                            <View style={styles.skillsList}>
                                {skills.map((skill, index) => (
                                    <Text key={index} style={styles.skillItem}>
                                        {skill}
                                    </Text>
                                ))}
                            </View>
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sectionHeading}>Información</Text>
                            <View style={styles.infoGroup}>
                                <Text style={styles.infoLabel}>
                                    Correo electronico:  <Text style={styles.infoValue}>{email}</Text>
                                </Text>
                                <Text style={styles.infoLabel}>
                                    Carrera:  <Text style={styles.infoValue}>{career}</Text>
                                </Text>
                                <Text style={styles.infoLabel}>
                                    Miembro desde  <Text style={styles.infoValue}>{memberSince}</Text>
                                </Text>
                            </View>
                        </View>
                    </>
                ) : (
                    <View style={styles.editContainer}>
                        <View style={styles.avatarEditBox}>
                            <Image source={{ uri: tempAvatar }} style={styles.avatarPreview} />
                            <Text style={styles.editHelpText}>Selecciona tu avatar:</Text>
                            <View style={styles.avatarOptionsRow}>
                                {DEFAULT_AVATARS.map((uri, idx) => (
                                    <TouchableOpacity
                                        key={idx}
                                        onPress={() => setTempAvatar(uri)}
                                        style={[
                                            styles.avatarThumbWrapper,
                                            tempAvatar === uri && styles.avatarThumbSelected,
                                        ]}
                                    >
                                        <Image source={{ uri }} style={styles.avatarThumb} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <View style={styles.editCard}>
                            <Text style={styles.fieldLabel}>Nombre Completo</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={tempName}
                                onChangeText={setTempName}
                                placeholder="Juan Ramirez"
                            />

                            <Text style={styles.fieldLabel}>Correo Electrónico</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={tempEmail}
                                onChangeText={setTempEmail}
                                placeholder="juan@upq.edu.mx"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                            <Text style={styles.fieldLabel}>Carrera / Especialidad</Text>
                            <TextInput
                                style={styles.fieldInput}
                                value={tempCareer}
                                onChangeText={setTempCareer}
                                placeholder="Ing. en Tecnologías de la Información"
                            />
                        </View>

                        <View style={styles.editCard}>
                            <Text style={styles.fieldLabel}>Mis Habilidades</Text>

                            <View style={styles.addSkillRow}>
                                <TextInput
                                    style={styles.newSkillInput}
                                    value={newSkillText}
                                    onChangeText={setNewSkillText}
                                    placeholder="Nueva habilidad "
                                />
                                <TouchableOpacity style={styles.addBtn} onPress={handleAddSkill}>
                                    <Text style={styles.addBtnText}>+ Agregar</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.skillsEditContainer}>
                                {tempSkills.map((sk, idx) => (
                                    <View key={idx} style={styles.skillEditChip}>
                                        <Text style={styles.skillChipText}>{sk}</Text>
                                        <TouchableOpacity
                                            style={styles.removeChipBtn}
                                            onPress={() => handleRemoveSkill(sk)}
                                        >
                                            <Text style={styles.removeChipText}>✕</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        </View>

                        <View style={styles.editActionsRow}>
                            <TouchableOpacity
                                style={styles.confirmSaveBtn}
                                activeOpacity={0.85}
                                onPress={handleSaveEdit}
                            >
                                <Text style={styles.confirmSaveText}>Guardar Cambios</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.cancelEditBtn}
                                activeOpacity={0.85}
                                onPress={handleCancelEdit}
                            >
                                <Text style={styles.cancelEditText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </ScrollView>

            <View style={styles.bottomTabBar}>
                <View style={styles.tabBtn}>
                    <Text style={styles.tabIcon}>♡</Text>
                </View>
                <View style={styles.tabBtn}>
                    <Text style={styles.tabIcon}>⌂</Text>
                </View>
                <View style={styles.tabBtn}>
                    <Text style={[styles.tabIcon, styles.activeTabIcon]}>👤</Text>
                </View>
            </View>
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
        paddingBottom: 80,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center',
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
    editPencilBtn: {
        backgroundColor: '#F1F5F9',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    editPencilText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#0084FF',
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
    profileCard: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#38BDF8',
        marginBottom: 12,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 6,
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 12,
    },
    starText: {
        color: '#F59E0B',
        fontSize: 14,
    },
    ratingValue: {
        fontSize: 13,
        fontWeight: '700',
        color: '#334155',
    },
    ratingDivider: {
        fontSize: 13,
        color: '#94A3B8',
        marginHorizontal: 2,
    },
    servicesCount: {
        fontSize: 13,
        color: '#64748B',
    },
    editProfilePill: {
        backgroundColor: '#EFF6FF',
        borderWidth: 1,
        borderColor: '#BFDBFE',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 16,
    },
    editProfilePillText: {
        fontSize: 12,
        color: '#0084FF',
        fontWeight: '600',
    },
    section: {
        marginBottom: 24,
    },
    sectionHeading: {
        fontSize: 15,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 12,
    },
    skillsList: {
        gap: 8,
    },
    skillItem: {
        fontSize: 13,
        color: '#64748B',
        paddingVertical: 2,
    },
    infoGroup: {
        gap: 8,
    },
    infoLabel: {
        fontSize: 13,
        color: '#64748B',
    },
    infoValue: {
        color: '#1E293B',
        fontWeight: '600',
    },
    editContainer: {
        gap: 16,
    },
    avatarEditBox: {
        alignItems: 'center',
        marginBottom: 8,
    },
    avatarPreview: {
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 3,
        borderColor: '#0084FF',
        marginBottom: 8,
    },
    editHelpText: {
        fontSize: 11,
        color: '#64748B',
        marginBottom: 6,
    },
    avatarOptionsRow: {
        flexDirection: 'row',
        gap: 8,
    },
    avatarThumbWrapper: {
        width: 38,
        height: 38,
        borderRadius: 19,
        borderWidth: 2,
        borderColor: 'transparent',
        overflow: 'hidden',
    },
    avatarThumbSelected: {
        borderColor: '#0084FF',
    },
    avatarThumb: {
        width: '100%',
        height: '100%',
    },
    editCard: {
        backgroundColor: '#F8FAFC',
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },
    fieldLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#475569',
        marginBottom: 6,
        marginTop: 6,
    },
    fieldInput: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 13,
        color: '#0F172A',
        marginBottom: 6,
    },
    addSkillRow: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 10,
    },
    newSkillInput: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 12,
    },
    addBtn: {
        backgroundColor: '#0F172A',
        paddingHorizontal: 14,
        borderRadius: 10,
        justifyContent: 'center',
    },
    addBtnText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },
    skillsEditContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    skillEditChip: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFF6FF',
        borderWidth: 1,
        borderColor: '#BFDBFE',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 6,
    },
    skillChipText: {
        fontSize: 11,
        color: '#1E40AF',
        fontWeight: '500',
    },
    removeChipBtn: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#BFDBFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeChipText: {
        fontSize: 9,
        color: '#1E40AF',
        fontWeight: '700',
    },
    editActionsRow: {
        gap: 10,
        marginTop: 8,
    },
    confirmSaveBtn: {
        backgroundColor: '#0084FF',
        paddingVertical: 12,
        borderRadius: 14,
        alignItems: 'center',
    },
    confirmSaveText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
    cancelEditBtn: {
        backgroundColor: '#F1F5F9',
        paddingVertical: 10,
        borderRadius: 14,
        alignItems: 'center',
    },
    cancelEditText: {
        color: '#64748B',
        fontSize: 13,
        fontWeight: '600',
    },
    bottomTabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E2E8F0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 8,
    },
    tabBtn: {
        padding: 8,
    },
    tabIcon: {
        fontSize: 22,
        color: '#94A3B8',
    },
    activeTabIcon: {
        color: '#0084FF',
    },
    adminAccessBox: {
        marginTop: 8,
        marginBottom: 20,
        alignItems: 'center',
    },
    adminAccessBtn: {
        backgroundColor: '#EEF2FF',
        borderWidth: 1,
        borderColor: '#C7D2FE',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 14,
        width: '100%',
        alignItems: 'center',
    },
    adminAccessText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#4F46E5',
    },
});

export default ProfileScreen;
