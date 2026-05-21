import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { RootStackParamList } from '../types/navigation';

export default function LoginTelas() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [nome, setNome] = useState('');

  const handleLogin = () => {
    if (nome.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite seu nome de voluntário.');
      return;
    }

    const idAleatorio = Math.floor(Math.random() * 1000);

    // Navega para "App" (TabNavigator), passando os parâmetros
    navigation.navigate('App', {
      userName: nome,
      voluntarioId: idAleatorio,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/ONGconnect-logo.png')}
        />
        <Text style={styles.title}>Seja bem-vindo ao ONG Connect!</Text>
        <Text style={styles.subtitle}>Conectando solidariedade e necessidade.</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Quem é você?</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome de voluntário"
          value={nome}
          onChangeText={setNome}
          autoCapitalize="words"
        />
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3fbff',
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  top: {
    alignItems: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  bottom: {
    gap: 12,
  },
  logo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0b2233',
    textAlign: 'center',
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003b8f',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#cfe8ff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#005eff',
    paddingVertical: 13,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
