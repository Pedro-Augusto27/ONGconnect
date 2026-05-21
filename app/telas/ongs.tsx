import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import ONGCard, { ONGItem } from '../components/ONGCard'; // Importação do componente criado acima
import { TabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<TabParamList, 'ONGs'>;

// Lista de dados simulados (utilizando a tipagem do componente)
const ongs: ONGItem[] = [
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
];

export default function ONGs({ }: Props) {
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');

    // Filtro de busca por nome ou categoria
    const filtradas = ongs.filter(
        (o) =>
            o.nome.toLowerCase().includes(busca.toLowerCase()) ||
            o.categoria.toLowerCase().includes(busca.toLowerCase())
    );

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
      }, []);
    
       if (loading) return <ActivityIndicator size="large" color="#277fae" style={{flex: 1}} />;
    return (
        <View style={styles.container}>
            {/* Títulos da Página */}
            <Text style={styles.pageTitle}>ONGs</Text>
            <Text style={styles.pageSubtitle}>Descubra as ONGs ativas e suas causas.</Text>

            {/* Input de Busca */}
            <TextInput
                style={styles.searchInput}
                placeholder="🔍  Buscar ONGs..."
                value={busca}
                onChangeText={setBusca}
                placeholderTextColor="#8aabcc"
            />

            {/* Lista Principal */}
            <FlatList
                data={filtradas}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
                renderItem={({ item }) => <ONGCard item={item} />} // Renderizando o componente isolado
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
    emptyText: {
        textAlign: 'center',
        color: '#8aabcc',
        marginTop: 40,
        fontSize: 15,
    },
});