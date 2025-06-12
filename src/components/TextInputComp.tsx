import { View, TextInput, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TextInputComp() {
  return (
    <View
      style={{
        backgroundColor: "#262626",
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <TextInput
        placeholder="Ask Anything"
        placeholderTextColor={"gray"}
        multiline
        style={{ color: "white", paddingHorizontal: 10, paddingVertical: 6 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="airplane-plus" size={24} color="black" />
        <View>
          <Text>Voice</Text>
        </View>
      </View>
    </View>
  );
}
