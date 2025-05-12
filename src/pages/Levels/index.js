import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import LevelButton from "../../components/LevelButton";
import { levelsByWeek } from '../../components/dataSubLevels'; 
  
const Levels = ({navigation}) => {
    const route = useRoute();
    const {week} = route.params; //obtem a semana passada como parametro
    const levels = levelsByWeek[week] || [];

    return(
      <ImageBackground
            source={require('../../assets/MainBack.png')}
            style={styles.background}
            imageStyle={{ opacity: 0.95 }}
          >
        <View style = {styles.container}>
            <Text style ={styles.title}>Níveis da semana {week}</Text>
            {levels.map((level) => (
                <LevelButton
                    key={level}
                    title={`Nível ${level}`}
                    onPress={() => navigation.navigate("SubLevels", {week, level})
                    }
                />
            ))}
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
  
  export default Levels;