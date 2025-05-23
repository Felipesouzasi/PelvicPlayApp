import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const GeneralButton = ({ title, onPress, color = "#000" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default GeneralButton;