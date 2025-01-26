import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "../../src/copmponents/ProgressBar";

const sources = [
  "Google Play or Google search",
  "Friends or Family",
  "Instagram or Facebook",
  "TikTok",
  "YouTube or TV",
  "Influencer or Celebrity",
  "Medical professional",
  "Other",
];

export default function SourceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ProgressBar currentStep={3} totalSteps={3} onSkip={() => {}} />

      <Text style={styles.title}>How did you find out about us?</Text>

      <View style={styles.optionsContainer}>
        {sources.map((source, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => {
              // Handle completion
            }}
          >
            <Text style={styles.optionText}>{source}</Text>
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
