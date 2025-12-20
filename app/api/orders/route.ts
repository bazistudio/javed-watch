import { NextResponse } from "next/server";

// Temporary in-memory orders store
let orders: {
  id: string;
  items: { productId: string; name: string; price: number; quantity: number }[];
  total: number;
  customerName: string;
  email: string;
  status: string;
}[] = [];

// GET all orders
export async function GET() {
  return NextResponse.json({ success: true, orders });
}

// POST - Place new order
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.items || !body.customerName || !body.email) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const total = body.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

    const newOrder = {
      id: Date.now().toString(),
      items: body.items,
      total,
      customerName: body.customerName,
      email: body.email,
      status: "Pending",
    };

    orders.push(newOrder);

    return NextResponse.json({ success: true, message: "Order placed successfully", order: newOrder });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
}
