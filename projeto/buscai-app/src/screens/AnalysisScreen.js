import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid'; // npx install uuid

export default function AnalysisResultScreen({ route, navigation }) {
  const { photoUri, analysis } = route.params; // recebe dados da câmera + resultado da IA

  async function handleSave() {
    const resultText = `${analysis.title} - ${analysis.severity}`;
    await saveToHistory(photoUri, resultText);
    alert('Análise salva no histórico!');
  }

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Ionicons name="alert-circle" size={40} color="#DC2626" />
        <Text style={styles.title}>{analysis.title}</Text>
        <Text style={styles.category}>{analysis.category}</Text>
      </View>

      {/* SEVERITY */}
      <View style={styles.card}>
        <Text style={styles.label}>Gravidade</Text>
        <Text
          style={[
            styles.severity,
            analysis.severity === 'Alta' && styles.severityHigh
          ]}
        >
          {analysis.severity}
        </Text>
      </View>

      {/* DESCRIPTION */}
      <View style={styles.card}>
        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.text}>{analysis.description}</Text>
      </View>

      {/* FIX */}
      <View style={styles.card}>
        <Text style={styles.label}>Pode consertar em casa?</Text>
        <Text style={styles.text}>
          {analysis.canFixAtHome ? 'Sim' : 'Não recomendado'}
        </Text>
      </View>

      {/* COST */}
      <View style={styles.card}>
        <Text style={styles.label}>Custo estimado</Text>
        <Text style={styles.text}>{analysis.estimatedCost}</Text>
      </View>

      {/* RECOMMENDATIONS */}
      <View style={styles.card}>
        <Text style={styles.label}>Recomendações</Text>
        {analysis.recommendations.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={18} color="#16A34A" />
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Ionicons name="people" size={20} color="#6D28D9" />
          <Text style={styles.secondaryText}>Ver profissionais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
          <Ionicons name="bookmark" size={20} color="#FFFFFF" />
          <Text style={styles.primaryText}>Salvar análise</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Função para salvar histórico
async function saveToHistory(photoUri, result) {
  const newItem = {
    id: uuidv4(),
    photoUri,
    result,
    date: new Date().toLocaleString()
  };

  try {
    const stored = await AsyncStorage.getItem('@history');
    const history = stored ? JSON.parse(stored) : [];
    history.push(newItem);
    await AsyncStorage.setItem('@history', JSON.stringify(history));
  } catch (e) {
    console.log('Erro ao salvar histórico:', e);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    paddingTop: 30
  },

  header: {
    alignItems: 'center',
    padding: 24
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4C1D95',
    marginTop: 12,
    textAlign: 'center'
  },

  category: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 16,
    padding: 16,
    elevation: 2
  },

  label: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 6
  },

  text: {
    fontSize: 15,
    color: '#374151'
  },

  severity: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  severityHigh: {
    color: '#DC2626'
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6
  },

  listText: {
    fontSize: 14,
    color: '#374151'
  },

  actions: {
    flexDirection: 'row',
    gap: 12,
    padding: 16
  },

  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6D28D9',
    borderRadius: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },

  secondaryText: {
    color: '#6D28D9',
    fontWeight: 'bold'
  },

  primaryButton: {
    flex: 1,
    backgroundColor: '#6D28D9',
    borderRadius: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },

  primaryText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
