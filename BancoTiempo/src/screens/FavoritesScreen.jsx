import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import { colors } from '../styles/theme.js';

export const FavoritesScreen = () => {
    const [activeTab, setActiveTab] = useState('activos');
    const [favorites, setFavorites] = useState({
        'mat': true,
        'prog': true,
        'mec': true,
        'coc': true,
        'fis': true,
        'alg': true,
    });

    const toggleFavorite = (key) => {
        setFavorites(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.headerRow}>
                    <Text style={styles.backChevron}>‹</Text>
                    <Text style={styles.headerTitle}>Mis favoritos</Text>
                </View>

                <View style={styles.tabsRow}>
                    <TouchableOpacity
                        style={[styles.tabPill, activeTab === 'activos' ? styles.tabPillActive : styles.tabPillInactive]}
                        onPress={() => setActiveTab('activos')}
                    >
                        <Text style={[styles.tabText, activeTab === 'activos' ? styles.tabTextActive : styles.tabTextInactive]}>
                            Activos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tabPill, activeTab === 'pausados' ? styles.tabPillActive : styles.tabPillInactive]}
                        onPress={() => setActiveTab('pausados')}
                    >
                        <Text style={[styles.tabText, activeTab === 'pausados' ? styles.tabTextActive : styles.tabTextInactive]}>
                            Pausados
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.gridRow}>
                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#E0F2FE' }]}>
                            <Text style={{ fontSize: 26 }}>📱</Text>
                        </View>
                        <Text style={styles.serviceName}>Matematicas</Text>
                        <TouchableOpacity onPress={() => toggleFavorite('mat')}>
                            <Text style={[styles.heartIcon, favorites['mat'] && styles.heartActive]}>
                                {favorites['mat'] ? '♥' : '♡'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#0F172A' }]}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>&lt;/&gt;</Text>
                        </View>
                        <Text style={styles.serviceName}>Programación</Text>
                        <TouchableOpacity onPress={() => toggleFavorite('prog')}>
                            <Text style={[styles.heartIcon, favorites['prog'] && styles.heartActive]}>
                                {favorites['prog'] ? '♥' : '♡'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#FEF2F2' }]}>
                            <Text style={{ fontSize: 26 }}>⚙️</Text>
                        </View>
                        <Text style={styles.serviceName}>Mecanica CLS</Text>
                        <TouchableOpacity onPress={() => toggleFavorite('mec')}>
                            <Text style={[styles.heartIcon, favorites['mec'] && styles.heartActive]}>
                                {favorites['mec'] ? '♥' : '♡'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.gridRow, { marginTop: 20 }]}>
                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#FEF3C7' }]}>
                            <Text style={{ fontSize: 26 }}>👨‍🍳</Text>
                        </View>
                        <Text style={styles.serviceName}>Cocina</Text>
                        <TouchableOpacity onPress={() => toggleFavorite('coc')}>
                            <Text style={[styles.heartIcon, favorites['coc'] && styles.heartActive]}>
                                {favorites['coc'] ? '♥' : '♡'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#F3E8FF' }]}>
                            <Text style={{ fontSize: 26 }}>⚛️</Text>
                        </View>
                        <Text style={styles.serviceName}>Fisica Cuántica</Text>
                        <TouchableOpacity onPress={() => toggleFavorite('fis')}>
                            <Text style={[styles.heartIcon, favorites['fis'] && styles.heartActive]}>
                                {favorites['fis'] ? '♥' : '♡'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#EFF6FF' }]}>
                            <Text style={{ fontSize: 26 }}>📈</Text>
                        </View>
                        <Text style={styles.serviceName}>Álgebra Lin</Text>
                        <TouchableOpacity onPress={() => toggleFavorite('alg')}>
                            <Text style={[styles.heartIcon, favorites['alg'] && styles.heartActive]}>
                                {favorites['alg'] ? '♥' : '♡'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomTabBar}>
                <View style={styles.tabBtn}>
                    <Text style={[styles.tabIcon, styles.activeTabIcon]}>♥</Text>
                </View>
                <View style={styles.tabBtn}>
                    <Text style={styles.tabIcon}>⌂</Text>
                </View>
                <View style={styles.tabBtn}>
                    <Text style={styles.tabIcon}>👤</Text>
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
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 80,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
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
    tabsRow: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 20,
    },
    tabPill: {
        flex: 1,
        height: 38,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabPillActive: {
        backgroundColor: colors.primary,
    },
    tabPillInactive: {
        backgroundColor: '#94A3B8',
    },
    tabText: {
        fontSize: 13,
        fontWeight: '600',
    },
    tabTextActive: {
        color: '#FFFFFF',
    },
    tabTextInactive: {
        color: '#FFFFFF',
    },
    gridRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    cardItem: {
        flex: 1,
        alignItems: 'center',
    },
    illustrationBox: {
        width: '100%',
        height: 90,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6,
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    serviceName: {
        fontSize: 10,
        fontWeight: '700',
        color: '#1E293B',
        textAlign: 'center',
        marginBottom: 4,
    },
    heartIcon: {
        fontSize: 18,
        color: '#94A3B8',
    },
    heartActive: {
        color: '#EF4444',
    },
    bottomTabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabBtn: {
        padding: 10,
        alignItems: 'center',
    },
    tabIcon: {
        fontSize: 22,
        color: '#94A3B8',
    },
    activeTabIcon: {
        color: '#0084FF',
    },
});

export default FavoritesScreen;
