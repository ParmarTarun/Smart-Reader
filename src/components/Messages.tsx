import React, { FC } from "react";
import { type Message as TMessage } from "ai";
import Message from "./Message";
import { MessageSquare } from "lucide-react";

interface MessagesProps {
  messages: TMessage[];
}

const Messages: FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message) => (
          <Message
            content={message.content}
            isUserMessage={message.role === "user"}
            key={message.id}
          />
        ))
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="text-xl font-semibold text-white">You're all set!</h3>
          <p className="text-sm text-zinc-500">
            Ask your first question to get started
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
