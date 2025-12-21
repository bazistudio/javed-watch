export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { requireAuth } from "../../lib/auth";

let orders: any[] = [];

export async function GET(req: Request) {
  const user = requireAuth(req);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(orders);
}

export async function POST(req: Request) {
  const user = requireAuth(req);
  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const order = await req.json();
  orders.push(order);

  return NextResponse.json({ success: true, order });
}
