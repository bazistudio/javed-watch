import { NextResponse } from "next/server";

// In-memory cart
let cart: { id: string; productId: string; name: string; price: number; quantity: number }[] = [];

// GET - View cart
export async function GET() {
  return NextResponse.json({ success: true, cart });
}

// POST - Add product to cart
export async function POST(req: Request) {
  const body = await req.json();
  const existing = cart.find(item => item.productId === body.productId);

  if (existing) {
    existing.quantity += body.quantity || 1;
    return NextResponse.json({ success: true, message: "Quantity updated", cart });
  }

  const newItem = {
    id: Date.now().toString(),
    productId: body.productId,
    name: body.name,
    price: body.price,
    quantity: body.quantity || 1,
  };
  cart.push(newItem);

  return NextResponse.json({ success: true, message: "Product added to cart", cart });
}

// PUT - Update quantity
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const item = cart.find(c => c.id === body.id);
    if (!item) return NextResponse.json({ success: false, message: "Cart item not found" }, { status: 404 });

    item.quantity = body.quantity;
    return NextResponse.json({ success: true, message: "Quantity updated", cart });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
}

// DELETE - Remove product from cart
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const index = cart.findIndex(c => c.id === body.id);
    if (index === -1) return NextResponse.json({ success: false, message: "Cart item not found" }, { status: 404 });

    const deleted = cart.splice(index, 1);
    return NextResponse.json({ success: true, message: "Item removed from cart", item: deleted[0], cart });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
}
