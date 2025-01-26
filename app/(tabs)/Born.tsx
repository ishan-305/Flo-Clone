import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../src/copmponents/Button";

const ITEM_HEIGHT = 60;
const YEARS = Array.from({ length: 80 }, (_, i) => ({
  value: new Date().getFullYear() - i,
  label:
    new Date().getFullYear() - i === 0
      ? "Select"
      : (new Date().getFullYear() - i).toString(),
}));

export default function BirthYearScreen({ navigation }) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const onMomentumScrollEnd = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.y;
    const selectedIndex = Math.round(contentOffset / ITEM_HEIGHT);
    const year = YEARS[selectedIndex].value;
    setSelectedYear(year === 0 ? null : year);
  };

  const renderYear = ({ item, index }) => {
    const inputRange = [
      (index - 2) * ITEM_HEIGHT,
      (index - 1) * ITEM_HEIGHT,
      index * ITEM_HEIGHT,
    ];

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0.3, 1, 0.3],
      extrapolate: "clamp",
    });

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={[
          styles.yearItem,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <Text style={[styles.yearText, item.value === 0 && styles.selectText]}>
          {item.label}
        </Text>
      </Animated.View>
    );
  };

  const handleSubmit = () => {
    if (selectedYear) {
      console.log("Selected year:", selectedYear);
      // Handle submission
      navigation.navigate("NextScreen", { birthYear: selectedYear });
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>When were you born?</Text>
        <Text style={styles.subtitle}>
          Your cycle can change with age.{"\n"}
          Knowing it helps us make better predictions.
        </Text>

        {/* Year Picker */}
        <View style={styles.pickerContainer}>
          <Animated.FlatList
            ref={flatListRef}
            data={[{ value: 0, label: "Select" }, ...YEARS]}
            renderItem={renderYear}
            keyExtractor={(item) => item.value.toString()}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            onMomentumScrollEnd={onMomentumScrollEnd}
            contentContainerStyle={styles.listContent}
            getItemLayout={(_, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index,
            })}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={7}
          />
          <View style={styles.selectionHighlight} />
        </View>

        {/* Submit Button */}
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleSubmit}
            title="Continue"
            disabled={!selectedYear}
            style={!selectedYear ? styles.submitButtonDisabled : {}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 40,
  },
  pickerContainer: {
    height: ITEM_HEIGHT * 5,
    alignItems: "center",
    justifyContent: "center",
  },
  yearItem: {
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  yearText: {
    fontSize: 24,
    fontWeight: "500",
  },
  selectText: {
    fontWeight: "bold",
  },
  listContent: {
    paddingVertical: ITEM_HEIGHT * 2,
  },
  selectionHighlight: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    marginTop: -ITEM_HEIGHT / 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  submitButtonDisabled: {
    backgroundColor: "#ccc",
  },
});
