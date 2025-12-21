export const runtime = "nodejs";

import { NextResponse } from "next/server";

let cart: any[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(req: Request) {
  const item = await req.json();
  cart.push(item);
  return NextResponse.json({ success: true, item });
}
