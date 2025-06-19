import TextInputComp from "@/components/TextInputComp";
import { StatusBar, Text, View } from "react-native";
import { useChatStore } from "@/store/chatstore";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  const insets = useSafeAreaInsets();
  const createNewChat = useChatStore((state) => state.createNewChat);
  const addNewMessage = useChatStore((state) => state.addNewMessage);

  const handleMessageTitle = async (message: string) => {
    const chatId = createNewChat(message.substring(0, 50));
    addNewMessage(chatId, {
      id: Date.now().toString(),
      role: "user",
      message: message,
    });
    router.push(`/chat/${chatId}`);
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
