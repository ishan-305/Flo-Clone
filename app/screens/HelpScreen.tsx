import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ProgressBar from "../../src/copmponents/ProgressBar";

const helpOptions = [
  {
    title: "Sync my sex life with my cycle",
    icon: "❤️",
    bgColor: "#FFE6E6",
  },
  {
    title: "Make masturbation work for me",
    icon: "🎯",
    bgColor: "#E6E6FF",
  },
  {
    title: "Spot signs of PCOS or Endometriosis",
    icon: "🔍",
    bgColor: "#E6F0FF",
  },
  {
    title: "Decode my discharge",
    icon: "🔬",
    bgColor: "#F0E6FF",
  },
  {
    title: "Manage symptoms and moods",
    icon: "💊",
    bgColor: "#FFE6F0",
  },
  {
    title: "Learn how to orgasm",
    icon: "✨",
    bgColor: "#E6FFF0",
  },
];

export default function HelpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ProgressBar
        currentStep={2}
        totalSteps={3}
        onSkip={() => navigation.navigate("Source")}
      />

      <Text style={styles.title}>What can we help you do?</Text>
      <Text style={styles.subtitle}>Choose as many as you like.</Text>

      <View style={styles.grid}>
        {helpOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: option.bgColor }]}
          >
            <Text style={styles.cardIcon}>{option.icon}</Text>
            <Text style={styles.cardText}>{option.title}</Text>
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
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
  },
  card: {
    width: "45%",
    margin: "2.5%",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 24,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    textAlign: "center",
  },
});
