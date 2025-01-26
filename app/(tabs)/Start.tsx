import { Redirect, useNavigation, useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const App = () => {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image
          source={require("../../assets/image.png")} // Replace with your image path
          style={styles.headerImage}
        />
        <Text style={styles.title}>Keep Your Personal Data Protected</Text>
        <Text style={styles.subtitle}>
          Get Registered and Protect your cycle data
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../../assets/google-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(auth)/Auth")}
        >
          <Image
            source={require("../../assets/email-icon.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Continue with Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: 250, // Adjust the width as needed
    height: 250, // Adjust the height as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 120,
    marginBottom: 10,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  buttonText: {
    color: "#010101",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
