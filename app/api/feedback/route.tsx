import { NextResponse } from "next/server";
import { connectToDB } from "@utils/database";
import Feedback from "@models/Feedback";
import sendEmail from "@utils/sendEmail";
import axios from "axios";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { isValidPhoneNumber } from "libphonenumber-js";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

const verifyRecaptcha = async (token: string) => {
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
  );

  return data.success;
};

interface EmailData {
  name: string;
  phoneNumber: string;
  email: string;
  accepted: boolean;
  recaptchaToken: string;
}

export async function POST(req: Request) {
  try {
    await connectToDB();
    const info = await req.json();

    const sanitizedInfo: EmailData = {
      name: purify.sanitize(info.name),
      phoneNumber: "+" + purify.sanitize(info.phoneNumber),
      email: purify.sanitize(info.email),
      accepted: info.accepted,
      recaptchaToken: info.recaptchaToken,
    };

    const phoneNumber = isValidPhoneNumber(sanitizedInfo.phoneNumber);

    if (!phoneNumber) {
      return NextResponse.json(
        { message: "Invalid phone number" },
        { status: 400 }
      );
    }

    if (
      !sanitizedInfo.name ||
      !sanitizedInfo.phoneNumber ||
      !sanitizedInfo.phoneNumber ||
      !sanitizedInfo.email ||
      !sanitizedInfo.accepted ||
      !sanitizedInfo.recaptchaToken
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const isHuman = await verifyRecaptcha(sanitizedInfo.recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const emailResult = await sendEmail(sanitizedInfo);
    if (emailResult.error) {
      return NextResponse.json({ message: emailResult.error }, { status: 400 });
    }

    await Feedback.create(sanitizedInfo);

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
