"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-2xl">Something went wrong!</h2>
      <button className="second_color mb-6 text-xl" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
