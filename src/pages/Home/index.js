import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importação de components
import WeekButton from '../../components/WeekButton';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/MainBack.png')}
      style={styles.background}
      imageStyle={{ opacity: 0.95 }}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {Array.from({ length: 8 }, (_, index) => (
            <WeekButton
              key={index}
              title={`Atividade ${index + 1}`}
              onPress={() => navigation.navigate("Levels", { week: index + 1 })}
            />
          ))}
        </ScrollView>
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
  },

  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  scrollContainer: {
    paddingTop: 160,
    paddingVertical: 20,
    alignItems: "center",
  },
});


export default Home;