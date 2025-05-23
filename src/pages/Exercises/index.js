import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import GeneralButton from "../../components/GeneralButton";
import CameraView from "../../components/CameraView";
import { subLevelsByLevels, levelsByWeek } from '../../components/dataSubLevels'; 

const videosBySubLevel = {
  1: "https://www.youtube.com/watch?v=2cufeBFlkq8",
  2: "https://www.youtube.com/watch?v=ZRexQ28CoXA",
  3: "https://www.youtube.com/watch?v=DbuX_Fe3Yco",
  4: "https://www.youtube.com/shorts/NZUY_Bz62vQ",
  5: "https://www.youtube.com/watch?v=kiEmbhvv7Fo",
  6: "https://www.youtube.com/shorts/9isTSsvmlZo",
  7: "https://www.youtube.com/shorts/gJNCS2vyJrE",
  8: "https://www.youtube.com/watch?v=zRGAn7RWyL8",
};

const Exercises = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { week, level, subLevel } = route.params;

  const [showCamera, setShowCamera] = useState(false);
  const [exerciseFinished, setExerciseFinished] = useState(false);

  const videoUrl = videosBySubLevel[subLevel] || null;

  const startExercise = () => {
    setShowCamera(true);
  };

  const finishExercise = () => {
    setExerciseFinished(true);
    const subLevels = subLevelsByLevels[level] || [];
    const isLastSubLevel = subLevel === subLevels[subLevels.length - 1];

    const levelsInWeek = levelsByWeek[week] || [];
    const isLastLevel = level === levelsInWeek[levelsInWeek.length - 1];

    if (isLastSubLevel) {
      if (isLastLevel) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Levels", { week });
      }
    } else {
      navigation.navigate("SubLevels", { week, level });
    }
  };

  // Mostrar a câmera em tela cheia quando ativa
  if (showCamera && !exerciseFinished) {
    return (
        <View style={styles.cameraContainer}>
          <CameraView />
          <View style={styles.buttonOverlay}>
            <GeneralButton
              title="Finalizar Exercício"
              color="#1abc9c"
              onPress={finishExercise}
            />
          </View>
        </View>
    );
  }

  // Tela padrão com vídeo e botão
  return (
    <ImageBackground
        source={require('../../assets/MainBack.png')}
        style={styles.background}
        imageStyle={{ opacity: 0.95 }}
      >
    <View style={styles.container}>
      <Text style={styles.title}>
        Semana {week}  |  Nível {level}  |  Exercício {subLevel}
      </Text>

      {videoUrl && (
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: videoUrl }}
            javaScriptEnabled
            allowsFullscreenVideo
            style={{ flex: 1 }}
          />
        </View>
      )}

      {!exerciseFinished && (
        <GeneralButton
          title="Iniciar Exercício"
          color="#fad02c"
          onPress={startExercise}
        />
      )}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    marginTop: 10, //distancia entre o topo e o texto
    marginBottom: 20, //distancia entre o texto e o video
    textAlign: "center",
  },
  videoContainer: {
    width: "100%",
    height: 220,
    marginBottom: 350, 
    backgroundColor: "#000",
    borderRadius: 10,
    overflow: "hidden",
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "#000",
    position: "relative",
  },
  buttonOverlay: {
    position: "absolute",
    bottom: 40,
    left: 90,
    right: 20,	
  },
});

export default Exercises;