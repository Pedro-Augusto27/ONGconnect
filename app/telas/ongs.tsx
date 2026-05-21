import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { TabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<TabParamList, 'ONGs'>;

// Dados simulados para ONGs
const ongs = [
    {
        id: '1',
        titulo: 'PetAdopt',
        descricao: 'ONG dedicada à adoção de animais abandonados.',
        vagas: 12,
        categoria: 'ongs',
    },
    {
        id: '2',
        titulo: 'VerdeCidade',
        descricao: 'ONG dedicada ao cuidado e vonlutaridade de terrenos abandonados.',
        vagas: 8,
        categoria: 'ongs',
    },
    {
        id: '3',
        titulo: 'Educar para o Futuro',
        descricao: 'ONG focada em educação para crianças em situação de vulnerabilidade.',
        vagas: 5,
        categoria: 'ongs',
    }
]

const categoriaColors: Record<string, string> = {
    ongs: '#ff0000',
};

export default function ONGs({ }: Props) {
    const [busca, setBusca] = useState('');

    const filtradas = ongs.filter(
        (o) =>
            o.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            o.categoria.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>ONGs</Text>
            <Text style={styles.pageSubtitle}>Descubra as ONGs ativas e suas causas.</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="🔍  Buscar ONGs..."
                value={busca}
                onChangeText={setBusca}
                placeholderTextColor="#8aabcc"
            />

            <FlatList
                data={filtradas}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <View
                                style={[
                                    styles.categoriaBadge,
                                    { backgroundColor: (categoriaColors[item.categoria] || '#888') + '22' },
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.categoriaText,
                                        { color: categoriaColors[item.categoria] || '#888' },
                                    ]}
                                >
                                    {item.categoria}
                                </Text>
                            </View>
                            <Text style={styles.vagas}>🙋 {item.vagas} vagas</Text>
                        </View>

                        <Text style={styles.cardTitulo}>{item.titulo}</Text>

                        <TouchableOpacity style={styles.inscreverBtn}>
                            <Text style={styles.inscreverText}>Quero Participar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhuma ONG encontrada.</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3fbff',
        paddingHorizontal: 20,
        paddingTop: 52,
    },
    pageTitle: {
        fontSize: 26,
        fontWeight: '800',
        color: '#003b8f',
    },
    pageSubtitle: {
        fontSize: 14,
        color: '#5580a4',
        marginBottom: 16,
        marginTop: 2,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#cfe8ff',
        marginBottom: 16,
        color: '#0b2233',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#005eff',
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoriaBadge: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
    },
    categoriaText: {
        fontSize: 12,
        fontWeight: '700',
    },
    vagas: {
        fontSize: 12,
        color: '#5580a4',
        fontWeight: '500',
    },
    cardTitulo: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0b2233',
        marginBottom: 8,
    },
    cardInfo: {
        gap: 4,
        marginBottom: 12,
    },
    cardInfoText: {
        fontSize: 13,
        color: '#5580a4',
    },
    inscreverBtn: {
        backgroundColor: '#005eff',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    inscreverText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
    },
    emptyText: {
        textAlign: 'center',
        color: '#8aabcc',
        marginTop: 40,
        fontSize: 15,
    },
});
