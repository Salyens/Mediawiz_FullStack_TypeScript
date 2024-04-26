import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Feedback from "@models/Feedback";
import sendEmail from "@utils/sendEmail";


export async function POST(req:Request) {
  try {
    await connectToDB();
    const info = await req.json();
    const emailResult = await sendEmail(info);

    if (emailResult.error) {
      return NextResponse.json({ message: emailResult.error }, { status: 400 });
    }

    await Feedback.create(info);

    return NextResponse.json({ message: "User saved" }, { status: 200 });
  } catch (error) {

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const data = await Feedback.find();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
