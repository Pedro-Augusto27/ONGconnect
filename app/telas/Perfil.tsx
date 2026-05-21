import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { RootStackParamList, TabParamList } from '../types/navigation';

type Props = BottomTabScreenProps<TabParamList, 'Perfil'>;

const conquistas = [
  { emoji: '🌟', titulo: 'Primeiro Acesso', descricao: 'Bem-vindo à plataforma!' },
  { emoji: '🤝', titulo: 'Voluntário Ativo', descricao: '5 atividades concluídas' },
  { emoji: '❤️', titulo: 'Coração Solidário', descricao: 'Ajudou 10 famílias' },
];

const menuItems = [
  { emoji: '📋', label: 'Minhas Inscrições' },
  { emoji: '🔔', label: 'Notificações' },
  { emoji: '⚙️', label: 'Configurações' },
  { emoji: '❓', label: 'Ajuda & Suporte' },
];

export default function Perfil({ route }: Props) {
  const { userName, voluntarioId } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Avatar */}
      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userId}>ID do Voluntário: #{voluntarioId}</Text>
        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🌱 Voluntário</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>✅ Ativo</Text>
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        {[
          { valor: '5', label: 'Atividades' },
          { valor: '3', label: 'Eventos' },
          { valor: '12h', label: 'Horas' },
        ].map((s) => (
          <View key={s.label} style={styles.statItem}>
            <Text style={styles.statValue}>{s.valor}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Conquistas */}
      <Text style={styles.sectionTitle}>Conquistas</Text>
      <View style={styles.conquistasList}>
        {conquistas.map((c) => (
          <View key={c.titulo} style={styles.conquistaItem}>
            <Text style={styles.conquistaEmoji}>{c.emoji}</Text>
            <View style={styles.conquistaTexts}>
              <Text style={styles.conquistaTitulo}>{c.titulo}</Text>
              <Text style={styles.conquistaDesc}>{c.descricao}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Menu */}
      <Text style={styles.sectionTitle}>Conta</Text>
      <View style={styles.menuList}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuItem}>
            <Text style={styles.menuEmoji}>{item.emoji}</Text>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>🚪  Sair da Conta</Text>
      </TouchableOpacity>
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
    paddingBottom: 40,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#005eff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#005eff',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#003b8f',
    marginBottom: 4,
  },
  userId: {
    fontSize: 13,
    color: '#8aabcc',
    marginBottom: 10,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    backgroundColor: '#e0eeff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    color: '#005eff',
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-around',
    marginBottom: 28,
    shadowColor: '#005eff',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#005eff',
  },
  statLabel: {
    fontSize: 12,
    color: '#5580a4',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#003b8f',
    marginBottom: 12,
  },
  conquistasList: {
    gap: 10,
    marginBottom: 28,
  },
  conquistaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  conquistaEmoji: {
    fontSize: 26,
  },
  conquistaTexts: {
    flex: 1,
  },
  conquistaTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0b2233',
  },
  conquistaDesc: {
    fontSize: 12,
    color: '#8aabcc',
    marginTop: 1,
  },
  menuList: {
    gap: 8,
    marginBottom: 28,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  menuEmoji: {
    fontSize: 20,
    marginRight: 12,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    color: '#0b2233',
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 20,
    color: '#8aabcc',
  },
  logoutBtn: {
    backgroundColor: '#ffe0e0',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: '#cc0000',
    fontWeight: '700',
    fontSize: 15,
  },
});
