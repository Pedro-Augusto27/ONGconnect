import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { TabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<TabParamList, 'Explorar'>;

// Dados simulados para oportunidades de voluntariado
const oportunidades = [
  {
    id: '1',
    titulo: 'Distribuição de Alimentos',
    local: 'Centro Comunitário Sul',
    data: '21/05/2026',
    vagas: 10,
    categoria: 'Alimentação',
  },
  {
    id: '2',
    titulo: 'Aulas de Reforço Escolar',
    local: 'Escola Municipal Verde',
    data: '22/05/2026',
    vagas: 5,
    categoria: 'Educação',
  },
  {
    id: '3',
    titulo: 'Mutirão de Limpeza',
    local: 'Parque da Cidade',
    data: '24/05/2026',
    vagas: 20,
    categoria: 'Meio Ambiente',
  },
  {
    id: '4',
    titulo: 'Visita a Idosos',
    local: 'Lar São Francisco',
    data: '25/05/2026',
    vagas: 8,
    categoria: 'Saúde',
  },
  {
    id: '5',
    titulo: 'Oficina de Artesanato',
    local: 'Casa da Cultura',
    data: '28/05/2026',
    vagas: 15,
    categoria: 'Cultura',
  },
];

const categoriaColors: Record<string, string> = {
  Alimentação: '#ff9500',
  Educação: '#005eff',
  'Meio Ambiente': '#34c759',
  Saúde: '#ff3b30',
  Cultura: '#af52de',
};

export default function Explorar({ }: Props) {
  const [loading, setLoading] = useState(true); // Simula carregamento de dados
  const [busca, setBusca] = useState('');

  // Filtra as oportunidades com base na busca por título ou categoria
  const filtradas = oportunidades.filter(
    (o) =>
      o.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      o.categoria.toLowerCase().includes(busca.toLowerCase())
  );

  // Simula um carregamento de 2 segundos para mostrar o indicador de atividade
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

   if (loading) return <ActivityIndicator size="large" color="#277fae" style={{flex: 1}} />;

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Explorar</Text>
      <Text style={styles.pageSubtitle}>Encontre oportunidades de voluntariado.</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="🔍  Buscar por atividade ou categoria..."
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

            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoText}>📍 {item.local}</Text>
              <Text style={styles.cardInfoText}>📅 {item.data}</Text>
            </View>

            <TouchableOpacity style={styles.inscreverBtn}>
              <Text style={styles.inscreverText}>Quero Participar</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma oportunidade encontrada.</Text>
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
  card: { // Card de cada oportunidade
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
  cardTitulo: { // Título da oportunidade
    fontSize: 19,
    fontWeight: '700',
    color: '#0b2233',
    marginBottom: 8,
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
  emptyText: { // Texto exibido quando não há oportunidades encontradas
    textAlign: 'center',
    color: '#8aabcc',
    marginTop: 40,
    fontSize: 15,
  },
});
