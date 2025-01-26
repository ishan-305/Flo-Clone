import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onSkip: () => void;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
  onSkip,
}: ProgressBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progress,
            { width: `${(currentStep / totalSteps) * 100}%` },
          ]}
        />
      </View>
      <TouchableOpacity onPress={onSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  progressContainer: {
    flex: 1,
    height: 2,
    backgroundColor: "#E5E5E5",
    marginRight: 15,
  },
  progress: {
    height: "100%",
    backgroundColor: "#000",
  },
  skipText: {
    color: "#999",
    fontSize: 16,
  },
});
