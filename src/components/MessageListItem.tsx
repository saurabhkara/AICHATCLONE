import { View, Text } from "react-native";
import Markdown from "react-native-markdown-display";
import { Message } from "../types/types";
import { markdownStyles } from "@/util/markdown";

interface IMessageListItem {
  item: Message;
}

export default function MessageListItem({ item }: IMessageListItem) {
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
            paddingVertical: 2,
            marginBottom: 5,
            maxWidth: "70%",
            borderTopStartRadius: 10,
            borderBottomStartRadius: 10,
          },
          iUser && { backgroundColor: "gray" },
        ]}
      >
        <Markdown style={markdownStyles}>{message}</Markdown>
      </View>
    </View>
  );
}
