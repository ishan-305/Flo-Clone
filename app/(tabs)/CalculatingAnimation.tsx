import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function CalculatingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Image placeholder - replace source with the provided image */}
        <Image
          source={require("../../assets/calender.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Calculating your cycle predictions...</Text>

        <Text style={styles.subtitle}>
          89% of users say Flo has helped them feel more informed and educated
          about their cycle health.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("/(tabs)/TodayScreen")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#ff4d7d",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    position: "absolute",
    bottom: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
