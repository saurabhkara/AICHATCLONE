import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function ChatRoom() {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View>
      <Text style={{ color: "white" }}>Chat Room {id}</Text>
    </View>
  );
}
