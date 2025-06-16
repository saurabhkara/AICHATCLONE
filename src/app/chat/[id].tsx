import { View, Text, TextInput } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import chatHistory from "@assets/data/chatHistory.json";
import TextInputComp from "@/components/TextInputComp";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatRoom() {
  const { id } = useLocalSearchParams();
  const chatItem = chatHistory.find((item) => item.id === id);
  const insets = useSafeAreaInsets();

  const handleOnSend = (message: string) => {
    console.log("message", message);
  };
  return (
    <View style={{ flex: 1, marginBottom: insets.bottom }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white" }}>Chat Room {chatItem?.title}</Text>
      </View>
      <TextInputComp onSend={handleOnSend} isLoading={false} />
    </View>
  );
}
