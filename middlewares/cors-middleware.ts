import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://www.mediawiz.store",
  "https://mediawiz.store",
];

export function corsMiddleware(req: NextRequest) {
  const origin = req.headers.get("origin");

  if (req.method === "OPTIONS") {
    const preflightResponse = NextResponse.next();
    preflightResponse.headers.set("Access-Control-Allow-Credentials", "true");
    if (origin && allowedOrigins.includes(origin)) {
      preflightResponse.headers.set("Access-Control-Allow-Origin", origin);
    }
    preflightResponse.headers.set(
      "Access-Control-Allow-Methods",
      "GET,DELETE,PATCH,POST,PUT"
    );
    preflightResponse.headers.set(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    return preflightResponse;
  }

  if (origin && !allowedOrigins.includes(origin)) {
    console.error("CORS error: This origin is not allowed");
    return NextResponse.json(
      { error: "CORS error: This origin is not allowed" },
      { status: 403 }
    );
  }

  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Credentials", "true");
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return response;
}
