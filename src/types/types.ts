export interface Message {
    id: string;
    role: 'user' | 'assistant';
    message: string;
    responseId?: string;
}

export interface Chat {
    id: string;
    title: string;
    messages: Message[];
}