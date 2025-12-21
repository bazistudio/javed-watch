import { NextResponse } from "next/server";
import { verifyToken } from "./jwt";

export function requireAuth(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.split(" ")[1];
  const decoded = verifyToken(token);

  return decoded;
}
