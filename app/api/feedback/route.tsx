import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Feedback from "@models/Feedback";
import sendEmail from "@utils/sendEmail";
import axios from "axios";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTURE_2;

const verifyRecaptcha = async (token: string) => {
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
  );

  return data.success;
};

export async function POST(req: Request) {
  try {
    await connectToDB();
    const info = await req.json();

    const isHuman = await verifyRecaptcha(info.recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

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
