import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Platform,
} from 'react-native';

export const ExploreScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.headerRow}>
                    <Text style={styles.backChevron}>‹</Text>
                    <Text style={styles.headerTitle}>Explorar</Text>
                </View>

                <Text style={styles.sectionHeading}>Servicios destacados</Text>
                <View style={styles.gridRow}>
                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#E0F2FE' }]}>
                            <View style={styles.phoneCalcMock}>
                                <View style={styles.phoneScreenMock} />
                                <View style={styles.keypadMock}>
                                    <View style={styles.keyRow}>
                                        <View style={styles.keyDot} /><View style={styles.keyDot} /><View style={styles.keyDot} />
                                    </View>
                                    <View style={styles.keyRow}>
                                        <View style={styles.keyDot} /><View style={styles.keyDot} /><View style={styles.keyDot} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.serviceName}>Matemáticas</Text>
                        <Text style={styles.requestsCount}>2 Solicitudes</Text>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#0F172A' }]}>
                            <View style={styles.codeWindowMock}>
                                <Text style={styles.codeBrackets}>&lt;/&gt;</Text>
                            </View>
                        </View>
                        <Text style={styles.serviceName}>Programación</Text>
                        <Text style={styles.requestsCount}>3 Solicitudes</Text>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#FEF2F2' }]}>
                            <View style={styles.pistonPill} />
                            <View style={styles.pistonRod} />
                            <View style={styles.pistonCrank} />
                        </View>
                        <Text style={styles.serviceName}>Mécanica CLS</Text>
                        <Text style={styles.requestsCount}>4 Solicitudes</Text>
                    </View>
                </View>

                <Text style={[styles.sectionHeading, { marginTop: 24 }]}>Servicios disponibles</Text>
                <View style={styles.gridRow}>
                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#FEF3C7' }]}>
                            <Text style={{ fontSize: 32 }}>👨‍🍳</Text>
                        </View>
                        <Text style={styles.serviceName}>Cocina</Text>
                        <Text style={styles.requestsCount}>3 Solicitudes</Text>
                    </View>

                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#F3E8FF' }]}>
                            <Text style={{ fontSize: 32 }}>⚛️</Text>
                        </View>
                        <Text style={styles.serviceName}>Física Cuántica</Text>
                        <Text style={styles.requestsCount}>2 Solicitudes</Text>
                    </View>

                    {/* Card 6: Álgebra Lin */}
                    <View style={styles.cardItem}>
                        <View style={[styles.illustrationBox, { backgroundColor: '#EFF6FF' }]}>
                            <Text style={styles.mathEquation}>f(x) = 2x - 1</Text>
                            <View style={styles.graphAxisX} />
                            <View style={styles.graphAxisY} />
                            <View style={styles.graphLineSlope} />
                        </View>
                        <Text style={styles.serviceName}>Álgebra Lin</Text>
                        <Text style={styles.requestsCount}>1 Solicitud</Text>
                    </View>
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
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 40,
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
    sectionHeading: {
        fontSize: 14,
        fontWeight: '700',
        color: '#334155',
        marginBottom: 14,
        marginLeft: 4,
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
        height: 100,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        overflow: 'hidden',
        position: 'relative',
        borderWidth: 1,
        borderColor: '#F1F5F9',
    },
    serviceName: {
        fontSize: 11,
        fontWeight: '700',
        color: '#1E293B',
        textAlign: 'center',
        marginBottom: 2,
    },
    requestsCount: {
        fontSize: 10,
        color: '#94A3B8',
        textAlign: 'center',
    },
    phoneCalcMock: {
        width: 36,
        height: 58,
        backgroundColor: '#0284C7',
        borderRadius: 8,
        padding: 3,
        alignItems: 'center',
    },
    phoneScreenMock: {
        width: '100%',
        height: 14,
        backgroundColor: '#38BDF8',
        borderRadius: 2,
        marginBottom: 4,
    },
    keypadMock: {
        width: '100%',
        gap: 2,
    },
    keyRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    keyDot: {
        width: 6,
        height: 6,
        borderRadius: 1,
        backgroundColor: '#FFFFFF',
    },
    codeWindowMock: {
        width: 58,
        height: 48,
        backgroundColor: '#000000',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#334155',
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeBrackets: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },
    pistonPill: {
        width: 32,
        height: 22,
        backgroundColor: '#94A3B8',
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#475569',
    },
    pistonRod: {
        width: 8,
        height: 26,
        backgroundColor: '#CBD5E1',
        borderWidth: 1,
        borderColor: '#475569',
    },
    pistonCrank: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#EF4444',
    },
    mathEquation: {
        fontSize: 9,
        fontWeight: '700',
        color: '#1E293B',
        marginBottom: 4,
    },
    graphAxisX: {
        position: 'absolute',
        width: 50,
        height: 1,
        backgroundColor: '#94A3B8',
        bottom: 24,
    },
    graphAxisY: {
        position: 'absolute',
        width: 1,
        height: 40,
        backgroundColor: '#94A3B8',
        bottom: 4,
    },
    graphLineSlope: {
        position: 'absolute',
        width: 44,
        height: 2,
        backgroundColor: '#2563EB',
        transform: [{ rotate: '-35deg' }],
    },
});

export default ExploreScreen;
