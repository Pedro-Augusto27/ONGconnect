import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { RootStackParamList, TabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<TabParamList, 'Dashboard'>;

// O seu novo array adaptado
const cards = [
  { titulo: 'Total de Atividades', valor: '5', emoji: '📝' },
  { titulo: 'ONGs ativas', valor: '3', emoji: '🏢' },
  { titulo: 'Eventos', valor: '4', emoji: '🎈' },
  { titulo: 'Número de Voluntários', valor: '12', emoji: '👤' },
];

export default function Dashboard({ route }: Props) {
  const { userName } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, {userName}! 👋</Text>
          <Text style={styles.subtitle}>Que bom ter você aqui para ajudar!</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Cards de resumo */}
      <Text style={styles.sectionTitle}>Resumo Geral</Text>
      <View style={styles.cardsGrid}>
        {cards.map((card) => (
          <View key={card.titulo} style={styles.card}>
            <Text style={styles.cardEmoji}>{card.emoji}</Text>
            <Text style={styles.cardValue}>{card.valor}</Text>
            <Text style={styles.cardLabel}>{card.titulo}</Text>
          </View>
        ))}
      </View>

      {/* Atividades recentes */}
      <Text style={styles.sectionTitle}>Atividades Recentes</Text>
      <View style={styles.activityList}>
        {[
          { text: 'Nova doação de alimentos registrada', time: 'Há 2h' },
          { text: 'Evento "Mutirão de Limpeza" confirmado', time: 'Ontem' },
          { text: 'Voluntário João entrou na equipe', time: '2 dias atrás' },
        ].map((item) => (
          <View key={item.text} style={styles.activityItem}>
            <View style={styles.activityDot} />
            <View style={styles.activityTexts}>
              <Text style={styles.activityText}>{item.text}</Text>
              <Text style={styles.activityTime}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3fbff',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 32,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 28,
  },

  greeting: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003b8f',
  },

  subtitle: {
    fontSize: 13,
    color: '#5580a4',
    marginTop: 2,
  },

  logoutBtn: {
    backgroundColor: '#ffe0e0',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 10,
  },

  logoutText: {
    color: '#cc0000',
    fontWeight: '600',
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#003b8f',
    marginBottom: 12,
  },

  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 28,
  },

  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#005eff',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  cardEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },

  cardValue: {
    fontSize: 26,
    fontWeight: '800',
    color: '#005eff',
  },

  cardLabel: {
    fontSize: 12,
    color: '#5580a4',
    textAlign: 'center',
    marginTop: 2,
  },

  activityList: {
    gap: 12,
  },

  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },

  activityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#005eff',
    marginTop: 4,
  },

  activityTexts: {
    flex: 1,
  },

  activityText: {
    fontSize: 14,
    color: '#0b2233',
    fontWeight: '500',
  },

  activityTime: {
    fontSize: 12,
    color: '#8aabcc',
    marginTop: 2,
  },
});
