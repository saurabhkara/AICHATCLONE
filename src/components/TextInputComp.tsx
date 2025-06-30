import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Image,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

interface IPropType {
  onSend: (message: string, imageBase64?: string | null) => Promise<void>;
  isLoading: boolean;
}

export default function TextInputComp({ onSend, isLoading }: IPropType) {
  const [message, setMessage] = useState("");
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const handleOnSend = () => {
    onSend(message, imageBase64);
    setMessage("");
    setImageBase64(null);
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled && result.assets[0].base64) {
      setImageBase64(`data:image/jpeg;base64,${result.assets[0].base64}`);
    }
  };

  const clearImage = () => {
    setImageBase64(null);
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
        {imageBase64 && (
          <ImageBackground
            source={{ uri: imageBase64 }}
            style={{
              backgroundColor: "white",
              height: 80,
              width: 80,
              marginHorizontal: 15,
              borderRadius: 25,
            }}
          >
            <AntDesign
              name="closecircle"
              size={20}
              color="white"
              onPress={clearImage}
              disabled={isLoading}
              style={{
                backgroundColor: "black",
                height: 20,
                width: 20,
                borderRadius: 10,
                padding: 2,
                alignSelf: "flex-end",
              }}
            />
          </ImageBackground>
        )}
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
          <MaterialCommunityIcons
            name="plus"
            size={24}
            color="white"
            onPress={handleImagePicker}
          />
          {!!message || !!imageBase64 ? (
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
