import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import LevelButton from "../../components/LevelButton";
import { subLevelsByLevels } from '../../components/dataSubLevels'; 

const exerciseNamesBySubLevel = {
  1: "Respiração",
  2: "Along de Coluna",
  3: "Sapinho Relaxado",
  4: "Flat",
  5: "Along. de Piriforme",
  6: "Respiração Sentada",
  7: "Dancinha",
  8: "Bicicleta DD",
};

const SubLevels = ({ navigation }) => {
  const route = useRoute();
  const { week, level } = route.params; //obtem a semana e nivel passado como parametro
  const subLevels = subLevelsByLevels[level] || []; //subniveis dinamicos do nivel atual
  
  return (
    <ImageBackground
      source={require('../../assets/MainBack.png')}
      style={styles.background}
      imageStyle={{ opacity: 0.95 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Exercícios do nível {level}</Text>
        {subLevels.map((subLevelId) => {
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
    paddingTop: 90,
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
    paddingBottom: 110,
  },
});

export default SubLevels;