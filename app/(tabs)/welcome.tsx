import { Redirect } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const feelings = [
    { text: "It's a love-hate relationship", emoji: "🙃" },
    { text: "Embarrassed", emoji: "🤫" },
    { text: "Hate it", emoji: "😠" },
    { text: "I want to understand it better", emoji: "🤔" },
    { text: "We've become friends", emoji: "😌" },
  ];

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

  const handleSkip = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to Auth screen
      setCurrentStep(4);
    }
  };

  const ProgressBar = () => (
    <View style={styles.progressContainer}>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${(Math.min(currentStep, 3) / 3) * 100}%` },
          ]}
        />
      </View>
      {currentStep <= 3 && (
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const renderScreen = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={styles.screenContainer}>
            <Text style={styles.title}>How do you feel about your period?</Text>
            <View style={styles.optionsContainer}>
              {feelings.map((feeling, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => setCurrentStep(2)}
                >
                  <Text style={styles.optionText}>
                    {feeling.text} {feeling.emoji}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case 2:
        return (
          <View style={styles.screenContainer}>
            <Text style={styles.title}>What can we help you do?</Text>
            <Text style={styles.subtitle}>Choose as many as you like.</Text>
            <View style={styles.gridContainer}>
              {helpOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.card, { backgroundColor: option.bgColor }]}
                  onPress={() => setCurrentStep(3)}
                >
                  <Text style={styles.cardIcon}>{option.icon}</Text>
                  <Text style={styles.cardText}>{option.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case 3:
        return (
          <View style={styles.screenContainer}>
            <Text style={styles.title}>How did you find out about us?</Text>
            <View style={styles.optionsContainer}>
              {sources.map((source, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => setCurrentStep(4)}
                >
                  <Text style={styles.optionText}>{source}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );

      case 4:
        return <Redirect href={"/(auth)/Auth"} />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderScreen()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  progressBarContainer: {
    flex: 1,
    height: 2,
    backgroundColor: "#E5E5E5",
    marginRight: 15,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#000",
  },
  skipText: {
    color: "#999",
    fontSize: 16,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: -20,
    marginBottom: 30,
  },
  optionsContainer: {
    width: "100%",
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
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -10,
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
