import Link from "next/link";
import Footer from "../container/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-center font-bold mb-3">My DSA journey</h1>

      <div className="flex justify-center items-center flex-col gap-4">
        <Suspense fallback="Loading...">
          <Link href="/pattern">Chapter 1 - Pattern Problems</Link>
          <Link href="/maths">Chapter 2 - Maths Problems</Link>
          <Link href="/basic_recursion">Chapter 3 - Basic Recursion</Link>
          <Link href="/basic_hashing">Chapter 4 - Basic Hashing</Link>
          <Link href="/sorting">Chapter 5 - Sorting</Link>
        </Suspense>
      </div>
    </div>
  );
}
