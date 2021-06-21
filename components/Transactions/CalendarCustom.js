import React, { useState } from "react";
import { View, Text } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export const CalendarCustom = ({ navigation, route }) => {
  // this.onDateChange = this.onDateChange.bind(this);

  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  // const { selectedStartDate } = this.state;
  const startDate = selectedStartDate ? selectedStartDate.toString() : "";

  return (
    <View>
      <CalendarPicker onDateChange={onDateChange} />

      <Text>SELECTED DATE:{startDate}</Text>
    </View>
  );
};
