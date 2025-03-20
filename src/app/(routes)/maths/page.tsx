import Link from "next/link";

export default function MathsPage() {
  return (
    <div>
      <h1 className="font-bold text-xl text-center mb-5">
        Chapter 2 - Maths [Basic]
      </h1>
      <div className="flex justify-center items-center flex-col gap-5">
        <Link href="https://www.geeksforgeeks.org/problems/count-digits5716/1">
          1. Count Digits <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://leetcode.com/problems/reverse-integer/">
          2. Reverse Number Leetcode 7{" "}
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://leetcode.com/problems/palindrome-number/">
          3. Pallindrome Number <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.naukri.com/code360/problems/armstrong-number_1462443">
          4. Amstrong Number <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1">
          5. Sum 1 to n Divisior <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.naukri.com/code360/problems/find-prime-numbers_839723">
          6. Find Prime Numbers
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1">
          7. LCM and GCD
          <span className="text-green-400">Easy</span>
        </Link>
      </div>
    </div>
  );
}
