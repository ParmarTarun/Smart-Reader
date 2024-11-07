"use client";

import { type Message, useChat } from "ai/react";
import React, { FC } from "react";
import Messages from "./Messages";
import { ChatInput } from "./ChatInput";

interface ChatWrapperProps {
  sessionId: string;
  initialMessages: Message[];
}

const ChatWrapper: FC<ChatWrapperProps> = ({ sessionId, initialMessages }) => {
  const { messages, handleInputChange, input, handleSubmit, setInput } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
      initialMessages,
    });
  return (
    <div className="relative flex min-h-full flex-1 flex-col justify-between gap-2 divide-y divide-zinc-700 bg-zinc-900">
      <div className="flex flex-1 flex-col justify-between bg-zinc-800 text-black">
        <Messages messages={messages} />
      </div>
      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
      />
    </div>
  );
};

export default ChatWrapper;
