export const runtime = "nodejs";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "../../../lib/jwt";


let users: {
  id: string;
  name: string;
  email: string;
  password: string;
}[] = [];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const user = users.find((u) => u.email === email);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }

  // ✅ JWT TOKEN
  const token = signToken({
    id: user.id,
    email: user.email,
  });

  return NextResponse.json({
    success: true,
    message: "Signin successful",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
}
