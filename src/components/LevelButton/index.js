import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LevelButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fad02c',
    paddingVertical: 13, 
    width: 200,            
    alignItems: 'center',
    paddingHorizontal: 35,
    borderRadius: 50,           
    borderWidth: 2,             
    borderColor: '#fff',         
    shadowColor: '#000',        
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,         
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default LevelButton;
