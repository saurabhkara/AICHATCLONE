import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

interface IPropType {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function TextInputComp({ onSend, isLoading }: IPropType) {
  const [message, setMessage] = useState("");

  const handleOnSend = () => {
    onSend(message);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 500}
    >
      <View
        style={{
          backgroundColor: "#262626",
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 5,
          paddingBottom: 8,
        }}
      >
        <TextInput
          placeholder="Ask Anything"
          placeholderTextColor={"gray"}
          value={message}
          onChangeText={setMessage}
          multiline
          style={{ color: "white", paddingHorizontal: 10, paddingVertical: 6 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <MaterialCommunityIcons name="plus" size={24} color="white" />
          {!!message ? (
            <MaterialCommunityIcons
              name="arrow-up-circle"
              size={28}
              color="white"
              onPress={handleOnSend}
              disabled={isLoading}
            />
          ) : (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                paddingHorizontal: 5,
                paddingVertical: 3,
                alignItems: "center",
                gap: 4,
                borderRadius: 8,
              }}
            >
              <Text>Voice</Text>
              <MaterialCommunityIcons
                name="account-voice"
                size={22}
                color="black"
              />
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
