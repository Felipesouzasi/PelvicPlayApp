import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import LevelButton from "../../components/LevelButton";

//array dinamico para organizar os exercicios dentro dos niveis
const subLevelsByLevels = {
  1: [1],
  2: [2],
  3: [1, 2],
  4: [1, 2, 3, 4],
  5: [1, 2, 3, 4],
  6: [1, 3, 4, 6],
  7: [5, 6],
  8: [7],
  9: [1],
  10: [2],
  11: [1, 2],
  12: [1, 2, 3, 4],
  13: [8],
  14: [6],
  15: [5, 6],
  16: [7],
};

const exerciseNamesBySubLevel = {
  1: 'Respiração',
  2: 'Alongamento de Coluna',
  3: 'Sapinho Relaxado',
  4: 'Flat',
  5: 'Along. de Piriforme',
  6: 'Respiração Sentada',
  7: 'Dancinha',
  8: 'Bicicleta DD',
};

const SubLevels = ({ navigation }) => {
  const route = useRoute();
  //const navigation = useNavigation();
  const { week } = route.params; //obtem a semana passada como parametro
  const { level } = route.params; //obtem o nivel passado como parametro

  const subLevel = subLevelsByLevels[level] || []; //subniveis dinamicos do nivel atual
  return (
    <ImageBackground
      source={require('../../assets/MainBack.png')}
      style={styles.background}
      imageStyle={{ opacity: 0.95 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Exercícios do nível {level}</Text>
        {subLevel.map((subLevelId) => {
          const exerciseName = exerciseNamesBySubLevel[subLevelId] || `Exercício ${subLevelId}`;
          return (
            <LevelButton
              key={subLevelId}
              title={exerciseName}
              onPress={() =>
                navigation.navigate("Exercises", { week, level, subLevel: subLevelId })
              }
            />
          );
        })}
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
    //justifyContent: 'center',
    paddingTop: 150,
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    paddingBottom: 50,
  },
});

export default SubLevels;