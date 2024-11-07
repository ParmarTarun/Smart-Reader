import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
import React from "react";

interface PageProps {
  params: Promise<{
    url: string | string[] | undefined;
  }>;
}

const reconstructUrl = (parts: string[]) => {
  return parts.map((el) => decodeURIComponent(el)).join("/");
};

const UrlPage = async ({ params }: PageProps) => {
  const sessionCookie = (await cookies()).get("sessionId")?.value;

  const data = await params;
  const url = reconstructUrl(data.url as string[]);

  const sessionId = (url + "--" + sessionCookie).replace(/\//g, "");

  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  });

  const seenUrl = await redis.sismember("seen-urls", url);
  if (!seenUrl) {
    console.log("Updating");
    await ragChat.context.add({
      type: "html",
      source: url,
      config: { chunkOverlap: 50, chunkSize: 200 },
    });
    await redis.sadd("seen-urls", url);
  }

  return (
    <div className="flex">
      <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
      <div className="flex-1">
        <div className="h-screen w-full bg-red-900">
          <iframe src={url} width="100%" height="100%"></iframe>
        </div>
      </div>
    </div>
  );
};

export default UrlPage;
