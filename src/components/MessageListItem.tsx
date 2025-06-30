import { View, Text, Image } from "react-native";
import Markdown from "react-native-markdown-display";
import { Message } from "../types/types";
import { markdownStyles } from "@/util/markdown";

interface IMessageListItem {
  item: Message;
}

export default function MessageListItem({ item }: IMessageListItem) {
  const { message, role, image } = item;
  const iUser = role === "user";
  return (
    <View
      style={{
        paddingHorizontal: 4,
        paddingVertical: 2,
        alignSelf: iUser ? "flex-end" : "flex-start",
      }}
    >
      {!!image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 180,
            height: 180,
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
      )}

      {!!message && (
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
      )}
    </View>
  );
}
