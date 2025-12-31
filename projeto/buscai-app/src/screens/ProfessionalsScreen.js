import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function ProfessionalsScreen() {
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
        <Text style={styles.title}>Profissionais</Text>
        <Text style={styles.subtitle}>
          Encontre especialistas qualificados para resolver seu problema
        </Text>

        {/* CARD PROFISSIONAL */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={24} color="#6D28D9" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>João Silva</Text>
              <Text style={styles.role}>Técnico em Eletrodomésticos</Text>
            </View>

            <View style={styles.rating}>
              <Ionicons name="star" size={14} color="#FACC15" />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Especialista em máquinas de lavar, geladeiras e micro-ondas.
          </Text>

          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.outlineButton}>
              <Ionicons name="chatbubble-outline" size={16} color="#6D28D9" />
              <Text style={styles.outlineText}>Contato</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryButton}>
              <Ionicons name="checkmark-circle-outline" size={16} color="#FFFFFF" />
              <Text style={styles.primaryText}>Solicitar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CARD PROFISSIONAL 2 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={24} color="#6D28D9" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Maria Oliveira</Text>
              <Text style={styles.role}>Eletricista Residencial</Text>
            </View>

            <View style={styles.rating}>
              <Ionicons name="star" size={14} color="#FACC15" />
              <Text style={styles.ratingText}>4.9</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Instalações, reparos elétricos e manutenção residencial.
          </Text>

          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.outlineButton}>
              <Ionicons name="chatbubble-outline" size={16} color="#6D28D9" />
              <Text style={styles.outlineText}>Contato</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryButton}>
              <Ionicons name="checkmark-circle-outline" size={16} color="#FFFFFF" />
              <Text style={styles.primaryText}>Solicitar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 64
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4C1D95'
  },

  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
    marginBottom: 24
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    elevation: 3
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EDE9FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4C1D95'
  },

  role: {
    fontSize: 12,
    color: '#6B7280'
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },

  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4C1D95'
  },

  description: {
    fontSize: 13,
    color: '#6B7280',
    marginVertical: 10
  },

  cardFooter: {
    flexDirection: 'row',
    gap: 10
  },

  outlineButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6D28D9',
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },

  outlineText: {
    color: '#6D28D9',
    fontWeight: 'bold',
    fontSize: 13
  },

  primaryButton: {
    flex: 1,
    backgroundColor: '#6D28D9',
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },

  primaryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13
  }
});
