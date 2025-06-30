import { Chat, Message } from "@/types/types";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IChatStore {
    chatHistory: Chat[];
    isWaitingForResponse: boolean;
    createNewChat: (title: string) => string;
    addNewMessage: (chatId: string, message: Message) => void;
    setIsWaitingForResponse: (isWaitingForResponse: boolean) => void
}

export const useChatStore = create<IChatStore>()(persist(
    (set) => ({
        chatHistory: [],
        isWaitingForResponse: false,
        setIsWaitingForResponse: (isWaitingForResponse: boolean) => {
            set({ isWaitingForResponse })
        },
        createNewChat: (title: string) => {
            const newChat: Chat = {
                id: Date.now().toString(),
                title: title,
                messages: [],
            };
            set((state) => ({
                chatHistory: [newChat, ...state.chatHistory],
            }));
            return newChat.id;
        },
        addNewMessage: (chatId: string, message: Message) => {
            set((state) => ({
                chatHistory: state.chatHistory.map((item) =>
                    item.id === chatId
                        ? { ...item, messages: [...item.messages, message,] }
                        : item
                ),
            }));
        },
    })
    ,
    {
        name: "chat-storage",
        storage: createJSONStorage(() => AsyncStorage),
    }));

