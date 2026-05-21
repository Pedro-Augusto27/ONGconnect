import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Interface que define a estrutura de dados de uma ONG
export interface ONGItem {
  id: string;
  nome: string;
  causa: string;
  vagas: number;
  categoria: string;
}

interface ONGCardProps {
  item: ONGItem;
}

// Cor mapeada para a categoria
const categoriaColors: Record<string, string> = {
  ONGs: '#ff0000',
};

export default function ONGCard({ item }: ONGCardProps) {
  return (
    <View style={styles.card}>
      {/* Cabeçalho do Card: Categoria e Vagas */}
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

      {/* Corpo do Card: Nome e Causa */}
      <Text style={styles.cardTitulo}>{item.nome}</Text>
      <Text style={styles.cardCausa}>{item.causa}</Text>

      {/* Botão de Ação */}
      <TouchableOpacity style={styles.inscreverBtn}>
        <Text style={styles.inscreverText}>Quero Participar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 19,
    fontWeight: '700',
    color: '#0b2233',
    marginBottom: 8,
  },
  cardCausa: {
    fontSize: 14,
    color: '#5580a4',
    marginBottom: 12,
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
});