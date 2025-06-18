import { View, Text } from "react-native";
import Markdown from "react-native-markdown-display";

const markdownStyles = {
  body: {
    color: "white",
  },
  code_inline: {
    backgroundColor: "#1e1e1e",
    color: "white",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    lineHeight: 20,
  },
  code_block: {
    backgroundColor: "#1e1e1e",
    color: "white",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    lineHeight: 20,
  },
  fence: {
    backgroundColor: "#1e1e1e",
    color: "white",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    lineHeight: 20,
  },
  blockquote: {
    backgroundColor: "#2d2d2d",
    borderLeftColor: "#4d4d4d",
    borderLeftWidth: 4,
    paddingLeft: 16,
    paddingVertical: 8,
    marginVertical: 8,
  },
  bullet_list: {
    marginVertical: 8,
  },
  ordered_list: {
    marginVertical: 8,
  },
  list_item: {
    marginVertical: 4,
  },
  hr: {
    backgroundColor: "#4d4d4d",
    marginVertical: 16,
  },
  heading1: {
    marginVertical: 10,
  },
  heading2: {
    marginVertical: 10,
  },
  heading3: {
    marginVertical: 10,
  },
};

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
