import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';

import { RootStackParamList, TabParamList } from '../types/navigation';
import Dashboard from './dashboard';
import Explorar from './Explorar';
import ONGs from './ongs';
import Perfil from './Perfil';

type Props = NativeStackScreenProps<RootStackParamList, 'App'>;

const Tab = createBottomTabNavigator<TabParamList>();

// Ícones simples usando emoji (substitua por react-native-vector-icons se quiser)
function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  const icons: Record<string, string> = {
    Dashboard: '🏠',
    Explorar: '🔍',
    ONGs: '🏢',
    Perfil: '👤',
    
  };
  return (
    <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>
      {icons[label]}
    </Text>
  );
}

export default function TabNavigator({ route }: Props) {
  const { userName, voluntarioId } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route: tabRoute }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon label={tabRoute.name} focused={focused} />
        ),
        tabBarActiveTintColor: '#005eff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0eeff',
          paddingBottom: 6,
          paddingTop: 4,
          height: 62,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      })}
    >
      {/* Tela de Dashboard */}
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{ userName, voluntarioId }}
        options={{ title: 'Início' }}
      />
      {/* Tela de Explorar */}
      <Tab.Screen
        name="Explorar"
        component={Explorar}
        options={{ title: 'Explorar' }}
      />
      {/* Tela de ONGs */}
       <Tab.Screen
        name="ONGs"
        component={ONGs}
        options={{ title: 'ONGs' }}
      />
      {/* Tela de Perfil */}
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ userName, voluntarioId }}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}
