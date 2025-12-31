import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function ProfileScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F3FF' }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: tabBarHeight + 24 }
        ]}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={40} color="#6D28D9" />
          </View>

          <Text style={styles.name}>Usuário BuscAI</Text>
          <Text style={styles.email}>usuario@email.com</Text>
        </View>

        {/* OPTIONS */}
        <View style={styles.options}>

          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="time-outline" size={22} color="#6D28D9" />
            <Text style={styles.optionText}>Histórico de análises</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="briefcase-outline" size={22} color="#6D28D9" />
            <Text style={styles.optionText}>Modo profissional</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <Ionicons name="settings-outline" size={22} color="#6D28D9" />
            <Text style={styles.optionText}>Configurações</Text>
          </TouchableOpacity>

        </View>

        {/* LOGOUT */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={20} color="#FFFFFF" />
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 70
  },

  header: {
    alignItems: 'center',
    marginBottom: 32
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C1D95'
  },

  email: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4
  },

  options: {
    gap: 12
  },

  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 2
  },

  optionText: {
    fontSize: 14,
    color: '#4C1D95',
    fontWeight: '500'
  },

  logoutButton: {
    marginTop: 32,
    backgroundColor: '#6D28D9',
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },

  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
