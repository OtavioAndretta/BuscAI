import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function CameraScreen({ navigation }) {
  const cameraRef = useRef(null);

  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState(null);

  async function takePicture() {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync({
      quality: 0.7
    });

    setPhotoUri(photo.uri);
  }

  function resetPhoto() {
    setPhotoUri(null);
  }

  async function analyzePhoto() {
  if (!photoUri) return;

  const analysisResult = {
    title: 'Possível curto-circuito',
    category: 'Elétrico',
    severity: 'Alta',
    description: 'A imagem indica sinais de superaquecimento nos fios...',
    canFixAtHome: false,
    estimatedCost: 'R$ 250 - R$ 600',
    recommendations: [
      'Desligar imediatamente a energia',
      'Não tocar nos fios expostos',
      'Chamar um eletricista qualificado'
    ]
  };

  // Navegar imediatamente para a tela de resultado
  navigation.navigate('AnalysisResult', {
    photoUri,
    analysis: analysisResult
  });

  
}

  if (!permission) return <View style={styles.container} />;

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Ionicons name="camera-outline" size={64} color="#6D28D9" />
        <Text style={styles.permissionText}>
          Precisamos acessar sua câmera
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={requestPermission}
        >
          <Text style={styles.primaryText}>Permitir câmera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!photoUri ? (
        <>
          <CameraView ref={cameraRef} style={styles.camera} facing="back" />
          <View style={styles.controls}>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <Ionicons name="camera" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Image source={{ uri: photoUri }} style={styles.preview} />
          <View style={styles.actions}>
            <TouchableOpacity style={styles.secondaryButton} onPress={resetPhoto}>
              <Ionicons name="refresh" size={20} color="#6D28D9" />
              <Text style={styles.secondaryText}>Refazer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.primaryButton} onPress={analyzePhoto}>
              <Ionicons name="sparkles" size={20} color="#FFFFFF" />
              <Text style={styles.primaryText}>Analisar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingTop: 40 },
  camera: { flex: 1 },
  controls: { position: 'absolute', bottom: 40, width: '100%', alignItems: 'center' },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#6D28D9',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6
  },
  preview: { flex: 1, resizeMode: 'cover' },
  actions: { flexDirection: 'row', gap: 12, padding: 16, backgroundColor: '#F5F3FF' },
  primaryButton: {
    flex: 1,
    backgroundColor: '#6D28D9',
    paddingVertical: 5,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  primaryText: { color: '#FFFFFF', fontWeight: 'bold' },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#6D28D9',
    paddingVertical: 14,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  secondaryText: { color: '#6D28D9', fontWeight: 'bold' },
  permissionContainer: { flex: 1, backgroundColor: '#F5F3FF', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 },
  permissionText: { marginTop: 16, marginBottom: 24, fontSize: 16, color: '#4C1D95', textAlign: 'center' }
});
