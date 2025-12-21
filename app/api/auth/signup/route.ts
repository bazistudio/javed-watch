export const runtime = "nodejs";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Temporary in-memory user store
let users: { id: string; name: string; email: string; password: string }[] = [];

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password)
    return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });

  const existing = users.find(u => u.email === email);
  if (existing) return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now().toString(), name, email, password: hashedPassword };
  users.push(newUser);

  return NextResponse.json({ success: true, message: "Signup successful", user: { id: newUser.id, name, email } });
}
