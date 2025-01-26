import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "../../src/copmponents/ProgressBar";

const feelings = [
  { text: "It's a love-hate relationship", emoji: "🙃" },
  { text: "Embarrassed", emoji: "🤫" },
  { text: "Hate it", emoji: "😠" },
  { text: "I want to understand it better", emoji: "🤔" },
  { text: "We've become friends", emoji: "😌" },
];

export default function FeelingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ProgressBar
        currentStep={1}
        totalSteps={3}
        onSkip={() => navigation.navigate("Source")}
      />

      <Text style={styles.title}>How do you feel about your period?</Text>

      <View style={styles.optionsContainer}>
        {feelings.map((feeling, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => navigation.navigate("Help")}
          >
            <Text style={styles.optionText}>
              {feeling.text} {feeling.emoji}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  option: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
});
