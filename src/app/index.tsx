import TextInputComp from "@/components/TextInputComp";
import { StatusBar, Text, View } from "react-native";
import { useChatStore } from "@/store/chatstore";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  const insets = useSafeAreaInsets();
  const createNewChat = useChatStore((state) => state.createNewChat);
  const addNewMessage = useChatStore((state) => state.addNewMessage);

  let dataR;
  const handleMessageTitle = async (message: string) => {
    console.log(777);
    const chatId = createNewChat(message.substring(0, 50));

    addNewMessage(chatId, {
      id: Date.now().toString(),
      role: "user",
      message: message,
    });
    router.push(`/chat/${chatId}`);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
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

      addNewMessage(chatId, aiResponseMessage);
    } catch (error) {
      console.error("Chat error:", error);
    }
  };

  return (
    <View style={{ flex: 1, marginBottom: insets.bottom }}>
      <View style={{ flex: 1 }}>
        <Text className="text-primary bg-slate-600">Hello Saurabh</Text>
      </View>

      <TextInputComp onSend={handleMessageTitle} isLoading={false} />
      <StatusBar barStyle={"light-content"} />
    </View>
  );
}
