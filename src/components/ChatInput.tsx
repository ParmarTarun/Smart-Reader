"use client";

import { Button, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import { FC } from "react";
import { type useChat } from "ai/react";

interface ChatInputProps {
  input: string;
  handleInputChange: ReturnType<typeof useChat>["handleInputChange"];
  handleSubmit: ReturnType<typeof useChat>["handleSubmit"];
  setInput: ReturnType<typeof useChat>["setInput"];
}

export const ChatInput: FC<ChatInputProps> = ({
  input,
  handleInputChange,
  handleSubmit,
  setInput,
}) => {
  return (
    <div className="bg-zin-900 absolute bottom-0 left-0 z-10 w-full">
      <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="relative flex w-full flex-grow flex-col p-4">
            <form className="relative" onSubmit={handleSubmit}>
              <Textarea
                minRows={4}
                autoFocus
                placeholder="Enter your question..."
                className="resize-none rounded-xl bg-zinc-800 text-base hover:bg-zinc-900"
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                    setInput("");
                  }
                }}
                value={input}
              />
              <Button
                size="sm"
                type="submit"
                className="border-border absolute bottom-2 right-2 z-10 border bg-zinc-900"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
