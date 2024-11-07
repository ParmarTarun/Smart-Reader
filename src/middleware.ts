import { NextResponse, type NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const res = NextResponse.next();

  const cookie = req.cookies.get("sessionId");

  if (!cookie) {
    res.cookies.set("sessionId", crypto.randomUUID());
  }
};
