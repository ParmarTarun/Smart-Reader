import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { messages, sessionId } = await req.json();
  const lastMessage = messages.at(-1).content;

  const resp = await ragChat.chat(lastMessage, { streaming: true, sessionId });

  return aiUseChatAdapter(resp);
};
