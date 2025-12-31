import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function HomeScreen({ navigation }) {
     const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F3FF' }}>
       <ScrollView
        contentContainerStyle={[
          styles.container,
          { paddingBottom: tabBarHeight + 24 }
        ]}
      >

        <View style={styles.heroCard}>
  <Text style={styles.title}>BuscAI</Text>

  <Text style={styles.subtitle}>
    Tire uma foto e descubra o que quebrou
  </Text>

  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Camera')}
  >
    <Text style={styles.buttonText}>Tirar Foto</Text>
  </TouchableOpacity>
</View>


        <View style={styles.features}>
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>📸</Text>
            <Text style={styles.featureText}>Tire uma foto</Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🤖</Text>
            <Text style={styles.featureText}>IA analisa o problema</Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🛠️</Text>
            <Text style={styles.featureText}>Encontre o conserto</Text>
          </View>
        </View>

        <View style={styles.trust}>
          <Text style={styles.trustText}>🔒 Profissionais verificados</Text>
          <Text style={styles.trustText}>⚡ Análise em segundos</Text>
          <Text style={styles.trustText}>⭐ Avaliações reais</Text>
        </View>

        <Text style={styles.powered}>Powered by AI 🤖</Text>

      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24,
    paddingTop:100,
  },
  heroCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  padding: 24,
  width: '100%',
  alignItems: 'center',
  elevation: 4
},


  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4C1D95'
  },

  subtitle: {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 24,
    color: '#6B7280',
    textAlign: 'center'
  },

  button: {
    backgroundColor: '#6D28D9',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 14,
    elevation: 4
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16
  },

  features: {
    marginTop: 40,
    width: '100%'
  },

  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2
  },

  featureIcon: {
    fontSize: 24,
    marginRight: 12
  },

  featureText: {
    fontSize: 14,
    color: '#4C1D95',
    fontWeight: '500'
  },

  trust: {
    marginTop: 32,
    alignItems: 'center'
  },

  trustText: {
    fontSize: 12,
    color: '#6B7280',
    marginVertical: 2
  },

  powered: {
    marginTop: 40,
    fontSize: 12,
    color: '#9CA3AF'
  }
});
