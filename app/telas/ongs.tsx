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
        nome: '🐾 PetAdopt',
        causa: 'ONG dedicada à adoção de animais abandonados.',
        vagas: 12,
        categoria: 'ONGs',
    },
    {
        id: '2',
        nome: '🌱 VerdeCidade',
        causa: 'ONG dedicada ao cuidado e vonlutaridade de terrenos abandonados.',
        vagas: 8,
        categoria: 'ONGs',
    },
    {
        id: '3',
        nome: '📖 Educar para o Futuro',
        causa: 'ONG focada em educação para crianças em situação de vulnerabilidade.',
        vagas: 5,
        categoria: 'ONGs',
    }
]

const categoriaColors: Record<string, string> = {
    ONGs: '#ff0000',
};

export default function ONGs({ }: Props) {
    const [busca, setBusca] = useState('');

    const filtradas = ongs.filter(
        (o) =>
            o.nome.toLowerCase().includes(busca.toLowerCase()) ||
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

                        <Text style={styles.cardTitulo}>{item.nome}</Text>
                        <Text style={styles.cardCausa}>{item.causa}</Text>

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
    pageTitle: { // Titulo da página
        fontSize: 26,
        fontWeight: '800',
        color: '#003b8f',
    },
    pageSubtitle: { // Subtitulo da página
        fontSize: 14,
        color: '#5580a4',
        marginBottom: 16,
        marginTop: 2,
    },
    searchInput: { // Input de busca(dentro)
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
    card: { // Card de cada ONG
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#005eff',
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 3,
    },
    cardHeader: { // Cabeçalho do card (categoria + vagas)
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoriaBadge: { // Badge da categoria
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
    },
    categoriaText: { // Texto da categoria
        fontSize: 12,
        fontWeight: '700',
    },
    vagas: { // Texto das vagas disponíveis
        fontSize: 12,
        color: '#5580a4',
        fontWeight: '500',
    },
    cardTitulo: { // Título da ONG
        fontSize: 19,
        fontWeight: '700',
        color: '#0b2233',
        marginBottom: 8,
    },
    cardCausa: { // Causa da ONG
        fontSize: 14,
        color: '#5580a4',
        marginBottom: 12,
    },
    cardInfo: { // Informações adicionais do card
        gap: 4,
        marginBottom: 12,
    },
    cardInfoText: { // Texto das informações adicionais
        fontSize: 13,
        color: '#5580a4',
    },
    inscreverBtn: { // Botão de inscrição
        backgroundColor: '#005eff',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    inscreverText: { // Texto do botão de inscrição
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
    },
    emptyText: { // Texto exibido quando não há ONGs encontradas
        textAlign: 'center',
        color: '#8aabcc',
        marginTop: 40,
        fontSize: 15,
    },
});
