// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './src/components/Home'; // caminho do seu componente

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
