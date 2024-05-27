"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div
          className="flex items-center justify-center flex-col text-xl"
          style={{ height: "calc(100vh - 100px)" }}
        >
          <div>
            <h2 className="mb-2">Not Found</h2>
            <p className="mb-2">Could not find requested resource</p>
            <Link style={{ color: "rgba(151, 71, 255, 1)" }} href="/">
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
