import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex items-center justify-center flex-col text-xl"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div>
        <h2 className="mb-2">Not Found</h2>
        <p className="mb-2">Could not find requested resource</p>
        <Link prefetch={true} className="second_color" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
