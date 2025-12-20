import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Temporary in-memory user store
let users: { id: string; name: string; email: string; password: string }[] = [];

// POST - signup/login
export async function POST(req: Request) {
  const url = new URL(req.url);
  const action = url.searchParams.get("action"); // ?action=signup or ?action=login
  if (!action) return NextResponse.json({ success: false, message: "Missing action" }, { status: 400 });

  const body = await req.json();

  if (action === "signup") {
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

  if (action === "login") {
    const { email, password } = body;
    if (!email || !password)
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });

    const user = users.find(u => u.email === email);
    if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });

    return NextResponse.json({ success: true, message: "Login successful", user: { id: user.id, name: user.name, email } });
  }

  return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
}
