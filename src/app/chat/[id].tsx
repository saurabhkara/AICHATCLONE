import { View, Text, TextInput, FlatList } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import chatHistory from "@assets/data/chatHistory.json";
import TextInputComp from "@/components/TextInputComp";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MessageListItem from "@/components/MessageListItem";
import { useChatStore } from "@/store/chatstore";

export default function ChatRoom() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();

  const chatItem = useChatStore((state) =>
    state.chatHistory.find((item) => item.id === id)
  );
  const addNewMessage = useChatStore((state) => state.addNewMessage);

  const handleOnSend = async (message: string) => {
    if (!chatItem) {
      return;
    }

    addNewMessage(chatItem?.id, {
      id: Date.now().toString(),
      role: "user",
      message: message,
    });
    const previousResponseId =
      chatItem.messages[chatItem.messages.length - 1]?.responseId;
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          previousResponseId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      const aiResponseMessage = {
        id: Date.now().toString(),
        message: data.responseMessage,
        responseId: data.responseId,
        role: "assistant" as const,
      };

      addNewMessage(chatItem.id, aiResponseMessage);
    } catch (error) {
      console.error("Chat error:", error);
    }
  };

  return (
    <View style={{ flex: 1, marginBottom: insets.bottom }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={chatItem?.messages}
          renderItem={({ item, index }) => (
            <MessageListItem item={item} key={item.id} />
          )}
        />
      </View>
      <TextInputComp onSend={handleOnSend} isLoading={false} />
    </View>
  );
}
