import { NextResponse } from "next/server";

let products = [
  { id: "1", name: "Classic Leather Watch", price: 12000, category: "Formal" },
  { id: "2", name: "Sport Waterproof Watch", price: 15000, category: "Sports" },
  { id: "3", name: "Sport Classic Watch", price: 5000, category: "Sports" },
];

// GET all products
export async function GET() {
  return NextResponse.json({ success: true, products });
}

// POST - Add product
export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = { id: Date.now().toString(), ...body };
  products.push(newProduct);
  return NextResponse.json({ success: true, message: "Product added", product: newProduct });
}

// PUT - Update product
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const index = products.findIndex(p => p.id === body.id);
    if (index === -1) return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    products[index] = { ...products[index], ...body };
    return NextResponse.json({ success: true, message: "Product updated", product: products[index] });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
}

// DELETE - Delete product
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const index = products.findIndex(p => p.id === body.id);
    if (index === -1) return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    const deleted = products.splice(index, 1);
    return NextResponse.json({ success: true, message: "Product deleted", product: deleted[0] });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
}
