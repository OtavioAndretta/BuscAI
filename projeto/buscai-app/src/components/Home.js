import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BuscAI</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                     // ocupa toda a tela
    backgroundColor: '#1B1B2F',  // fundo escuro tipo futurista
    alignItems: 'center',        // centraliza horizontal
    justifyContent: 'center',    // centraliza vertical
  },
  title: {
    fontSize: 48,                // tamanho grande do texto
    fontWeight: 'bold',          // negrito
    color: '#7FDBFF',            // azul ciano, remete a tecnologia
    textShadowColor: '#AA00FF',  // sombra roxa
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
});
