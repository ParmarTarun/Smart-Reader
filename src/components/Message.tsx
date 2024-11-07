import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import React, { FC } from "react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

const Message: FC<MessageProps> = ({ isUserMessage, content }) => {
  return (
    <div
      className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="mx-auto flex max-w-3xl items-start gap-2.5">
          <div
            className={cn(
              "flex aspect-square size-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900",
              {
                "border-blue-700 bg-blue-950 text-zinc-200": isUserMessage,
              },
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5 text-white" />
            )}
          </div>
          <div className="ml-6 flex w-full flex-col">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {isUserMessage ? "You" : "Reader"}
              </span>
            </div>
            <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
