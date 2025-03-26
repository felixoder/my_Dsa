
import Link from "next/link";

export default function ArrayEasyPage() {
  return (
    <div>
      <h1 className="font-bold text-xl text-center mb-5">
        Chapter 5 -  Array
      </h1>
        <p className="text-green-500 font-small text-md text-center mt-2 mb-2">
            EASY        
        </p>
      <div className="flex justify-center items-center flex-col gap-5">
        <Link href="https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0">
          1. Largest Element in Array
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/second-largest3735/1">
          2. Second Largest number in an Array without sorting
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.naukri.com/code360/problems/ninja-and-the-second-order-elements_6581960?leftPanelTabValue=PROBLEM">
          3. Second largest and second smallest number in an array without sorting
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.naukri.com/code360/problems/ninja-and-the-sorted-check_6581957?leftPanelTabValue=PROBLEM">
          4. Check an array is sorted
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/">
          4. Check an array is sorted and rotated
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/">
          5. Remove duplicates from an sorted array
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.naukri.com/code360/problems/left-rotate-an-array-by-one_5026278?leftPanelTabValue=SUBMISSION">
          6. Left rotate an array by one place
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://leetcode.com/problems/rotate-array/description/">
          7. Right rotate an array by D place
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.naukri.com/code360/problems/rotate-array_1230543?leftPanelTabValue=SUBMISSION">
          8. Left rotate an array by D place
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://leetcode.com/problems/move-zeroes/description/">
          9. Move zeros to the end
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1">
          10. Linear Search
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1">
          11. Union of two sorted array with duplicates
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://www.naukri.com/code360/problems/intersection-of-2-arrays_1082149">
          12. Intersection of two sorted array 
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://leetcode.com/problems/missing-number/">
          13. Find the missing number
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://leetcode.com/problems/max-consecutive-ones/description/">
          14. Maximum consecutive ones
          <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://leetcode.com/problems/single-number/description/">
          15. Find the number that appears once, and other numbers twice.
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1">
          16. Longest subarray with given sum K Positives
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1">
          17. Longest subarray with sum K (Positives + Negatives)
          <span className="text-orange-400">Medium</span>
        </Link>
      </div>
    </div>
  );
}
