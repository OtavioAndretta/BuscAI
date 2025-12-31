import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function HistoryScreen({ navigation }) {
  const [history, setHistory] = useState([]);
  const tabBarHeight = useBottomTabBarHeight();

  // Recarrega histórico sempre que a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, [])
  );

  async function loadHistory() {
    try {
      const json = await AsyncStorage.getItem('@history');
      if (json) setHistory(JSON.parse(json));
    } catch (e) {
      console.log('Erro ao carregar histórico:', e);
    }
  }

  async function clearHistory() {
    try {
      await AsyncStorage.removeItem('@history');
      setHistory([]);
    } catch (e) {
      console.log('Erro ao limpar histórico:', e);
    }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('AnalysisResult', {
            photoUri: item.photoUri,
            analysis: item.analysis
          })
        }
      >
        <Image source={{ uri: item.photoUri }} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.result}>{item.analysis.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#6B7280" />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container, { paddingBottom: tabBarHeight + 24 }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Histórico de Análises</Text>
        {history.length > 0 && (
          <TouchableOpacity onPress={clearHistory}>
            <Ionicons name="trash-outline" size={24} color="#DC2626" />
          </TouchableOpacity>
        )}
      </View>

      {history.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Nenhuma análise feita ainda.</Text>
        </View>
      ) : (
        <FlatList
          data={[...history].reverse()} // mais recente primeiro
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    paddingHorizontal: 16,
    paddingTop: 24
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4C1D95'
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    alignItems: 'center'
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12
  },
  info: {
    flex: 1,
    justifyContent: 'center'
  },
  result: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4C1D95',
    marginBottom: 4
  },
  date: {
    fontSize: 12,
    color: '#6B7280'
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280'
  }
});
