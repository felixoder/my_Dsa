import Link from "next/link";

export default function RecursionPage() {
  return (
    <div>
      <h1 className="font-bold text-xl text-center mb-5">
        Chapter 3 - Basic Recursion [Basic]
      </h1>
      <div className="flex justify-center items-center flex-col gap-5">
        <Link href="https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1">
          1. Print 1 to n without using Loops{" "}
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/print-gfg-n-times/1">
          2. Print "GFG" n times <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1">
          3. Print n to 1 without using Loop{" "}
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1">
          4. Sum of first n terms <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0?problemType=functional&difficulty%255B%255D=-1&page=1&query=problemTypefunctionaldifficulty%255B%255D-1page1">
          5. Factorial of n terms [ Factorial less than ot Equal to n]{" "}
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/reverse-an-array/0">
          6. Reverse an array
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://leetcode.com/problems/valid-palindrome/description/">
          7. Valid Pallindrome
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://leetcode.com/problems/fibonacci-number/description/">
          7. Fibonacci Number
          <span className="text-green-400">Easy</span>
        </Link>
      </div>
    </div>
  );
}
