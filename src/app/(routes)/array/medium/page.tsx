import Link from "next/link";

export default function ArrayMediumPage() {
  return (
    <div>
      <h1 className="font-bold text-xl text-center mb-5">
        Chapter 7 -  Array <span className="text-orange-400 ml-2">Medium</span>
      </h1>
        <p className="text-orange-500 font-small text-md text-center mt-2 mb-2">
            MEDIUM        
        </p>
      <div className="flex justify-center items-center flex-col gap-5">
        <Link href="https://leetcode.com/problems/two-sum/">
          1. Two Sum Problem
          <span className="text-green-400">Medium</span>
        </Link>
        <Link href="https://leetcode.com/problems/sort-colors/description/">
          2. Sort an array of 0&apos;s 1&apos;s and 2&apos;s <span className="font-bold text-md ml-1 mr-1">DUTCH NATIONAL FLAG ALGORITHM</span>
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://leetcode.com/problems/majority-element/description/">
          3. Majority Element greater than n/2 times  
        <span className="font-bold text-md ml-1 mr-1">MOORE&apos;S VOTING ALGORITHM</span>
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://leetcode.com/problems/maximum-subarray/">
          4. Kadane&apos;s Algorithm, maximum subarray sum. ALSO GET HOW TO PRINT THE SUBARRAY
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/">
          5. Stock Buy and Sell
          <span className="text-orange-400">Medium</span>
        </Link>
      </div>
    </div>
  );
}

