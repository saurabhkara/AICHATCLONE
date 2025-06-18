import { View, Text } from "react-native";

export default function MessageListItem({ item }: any) {
  const { message, role } = item;
  const iUser = role === "user";
  console.log(iUser);
  return (
    <View
      style={{
        paddingHorizontal: 4,
        paddingVertical: 2,
        alignSelf: iUser ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={[
          {
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginBottom: 5,
            maxWidth: "70%",
            borderTopStartRadius: 10,
            borderBottomStartRadius: 10,
          },
          iUser && { backgroundColor: "gray" },
        ]}
      >
        <Text style={[{ color: "white", fontSize: 16 }]}>{message}</Text>
      </View>
    </View>
  );
}
