import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { insertIntoProfilesTable } from "../DBFunctions/Insert";
import { useNavigation } from "expo-router";

export default function App() {
  const [viewMode, setViewMode] = useState("Month");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const navigation = useNavigation();
  const weekDays = ["M", "T", "W", "T", "F", "S", "Su"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const firstDayOfWeek = firstDay.getDay() || 7;
    for (let i = 1; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const getNextMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const toggleDateSelection = (date: Date) => {
    const dateStr = formatDate(date);
    if (selectedDate === dateStr) {
      setSelectedDate(null);
    } else {
      setSelectedDate(dateStr);
    }
  };

  const handleEditPeriodDates = () => {
    console.log("Selected date:", selectedDate);
    // Here you can handle the selected date
  };

  const renderMonth = (monthDate: Date) => {
    const days = getDaysInMonth(monthDate);
    const today = new Date();
    const monthName = monthDate.toLocaleString("default", { month: "long" });

    return (
      <View style={styles.monthContainer}>
        <Text style={styles.monthName}>{monthName}</Text>
        <View style={styles.calendar}>
          <View style={styles.weekDays}>
            {weekDays.map((day, index) => (
              <Text key={index} style={styles.weekDay}>
                {day}
              </Text>
            ))}
          </View>
          <View style={styles.daysGrid}>
            {days.map((date, index) => {
              if (!date)
                return <View key={`empty-${index}`} style={styles.emptyDay} />;

              const isToday = date.toDateString() === today.toDateString();
              const isSelected = selectedDate === formatDate(date);

              return (
                <TouchableOpacity
                  key={date.getTime()}
                  style={styles.dayContainer}
                  onPress={() => toggleDateSelection(date)}
                >
                  <View style={styles.checkboxContainer}>
                    <View
                      style={[
                        styles.customCheckbox,
                        isSelected && styles.customCheckboxSelected,
                      ]}
                    />
                  </View>
                  <Text
                    style={[
                      styles.dayText,
                      isToday && styles.todayText,
                      isSelected && styles.selectedDayText,
                    ]}
                  >
                    {date.getDate()}
                  </Text>
                  {isToday && <Text style={styles.todayLabel}>TODAY</Text>}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.viewToggle}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              viewMode === "Month" && styles.toggleButtonActive,
            ]}
            onPress={() => setViewMode("Month")}
          >
            <Text
              style={[
                styles.toggleText,
                viewMode === "Month" && styles.toggleTextActive,
              ]}
            >
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              viewMode === "Year" && styles.toggleButtonActive,
            ]}
            onPress={() => setViewMode("Year")}
          >
            <Text
              style={[
                styles.toggleText,
                viewMode === "Year" && styles.toggleTextActive,
              ]}
            >
              Year
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {renderMonth(currentMonth)}
        {renderMonth(getNextMonth(currentMonth))}
      </ScrollView>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          handleEditPeriodDates();
        }}
      >
        <Text style={styles.editButtonText}>Edit period dates</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  closeButton: {
    padding: 8,
  },
  viewToggle: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    padding: 4,
    marginLeft: 32,
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
  },
  toggleButtonActive: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    fontSize: 16,
    color: "#666",
  },
  toggleTextActive: {
    color: "#000",
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  monthContainer: {
    paddingVertical: 16,
  },
  monthName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  calendar: {
    paddingHorizontal: 16,
  },
  weekDays: {
    flexDirection: "row",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayContainer: {
    width: "14.28%", // 100% / 7
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  checkboxContainer: {
    position: "absolute",
    top: 4,
    left: 4,
    zIndex: 1,
  },
  customCheckbox: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FF4B8C",
  },
  customCheckboxSelected: {
    backgroundColor: "#FF4B8C",
  },
  emptyDay: {
    width: "14.28%",
    height: 64,
  },
  dayText: {
    fontSize: 16,
  },
  selectedDayText: {
    color: "#FF4B8C",
    fontWeight: "600",
  },
  todayText: {
    fontWeight: "bold",
  },
  todayLabel: {
    fontSize: 10,
    color: "#666",
    marginTop: 2,
  },
  editButton: {
    backgroundColor: "#FF4B8C",
    margin: 16,
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
