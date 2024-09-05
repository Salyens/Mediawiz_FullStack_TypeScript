import Admin from "@models/Admin";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDB } from "@utils/database";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const { email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({ email, password: hashedPassword });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "code" in error) {
      const e = error as { code?: number };
      if (e.code === 11000) {
        return NextResponse.json(
          { message: "Email already exists" },
          { status: 400 }
        );
      }
    }
    return NextResponse.json(
      { message: "Error occured while registrating the user" },
      { status: 500 }
    );
  }
}
