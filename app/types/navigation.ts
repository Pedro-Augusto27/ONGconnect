import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Stack principal (Login → App)
export type RootStackParamList = {
  Login: undefined;
  App: {
    userName: string;
    voluntarioId: number;
  };
};

// Abas do TabNavigator
export type TabParamList = {
  Dashboard: {
    userName: string;
    voluntarioId: number;
  };
  Explorar: undefined;
  ONGs: undefined;
  Perfil: {
    userName: string;
    voluntarioId: number;
  };
};

// Props tipadas para cada tela
export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type AppProps = NativeStackScreenProps<RootStackParamList, 'App'>;

export type DashboardTabProps = BottomTabScreenProps<TabParamList, 'Dashboard'>;
export type ExplorarTabProps = BottomTabScreenProps<TabParamList, 'Explorar'>;
export type ONGsTabProps = BottomTabScreenProps<TabParamList, 'ONGs'>;
export type PerfilTabProps = BottomTabScreenProps<TabParamList, 'Perfil'>;
