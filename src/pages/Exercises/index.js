import React from "react";
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import GeneralButton from "../../components/GeneralButton";

  //URL dos videos
  const videosBySubLevel = {
    1: "https://www.youtube.com/watch?v=2cufeBFlkq8",// respiracao
    2: "https://www.youtube.com/watch?v=ZRexQ28CoXA", //alongamento
    3: "https://www.youtube.com/watch?v=DbuX_Fe3Yco", //sapinho
    4: "https://www.youtube.com/shorts/NZUY_Bz62vQ", //flat
    5: "https://www.youtube.com/watch?v=kiEmbhvv7Fo", // respiracao sentada
    6: "https://www.youtube.com/shorts/9isTSsvmlZo", //alongamento piriforme
    7: "https://www.youtube.com/shorts/gJNCS2vyJrE", //dancinha
    8: "https://www.youtube.com/watch?v=zRGAn7RWyL8", //bicicletadd
  };


  const startExercise = () => {
    // Aqui será implementada a lógica de abrir a câmera
    alert('Abrindo a câmera para visão computacional...');
  };

  const Exercises = () => {
    const route = useRoute();
    const { week, level, subLevel } = route.params;
  
    const videoUrl = videosBySubLevel[subLevel] || null; // Obtém o vídeo correspondente ao subnível
  
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Semana {week} - Nível {level} - Exercício {subLevel}
          </Text>
          {videoUrl ? (
            <View style={styles.videoContainer}>
              <WebView
                source={{ uri: videoUrl }}
                style={{ flex: 1 }}
                javaScriptEnabled={true}
                allowsFullscreenVideo={true}
              />
            </View>
          ) : (
            <Text style={styles.text}>Nenhum vídeo disponível para este subnível.</Text>
          )}
          <GeneralButton title="Iniciar Exercício" onPress={startExercise} color="#fad02c" />
        </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(39, 62, 146)",
    padding: 20,
    paddingBottom: 80,
    paddingTop:120,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    marginBottom: 300,
  },
});

export default Exercises;
