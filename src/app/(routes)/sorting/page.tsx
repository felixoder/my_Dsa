import Link from "next/link";

export default function SortingPage() {
  return (
    <div>
      <h1 className="font-bold text-xl text-center mb-5">
        Chapter 5 - Sorting
      </h1>
      <div className="flex justify-center items-center flex-col gap-5">
        <Link href="https://www.geeksforgeeks.org/problems/selection-sort/1">
          1. Selection Sort <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/bubble-sort/1">
          2. Bubble Sort <span className="text-green-400">Easy</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/insertion-sort/0?category%5B%5D=Algorithms&page=1&query=category%5B%5DAlgorithmspage1">
          3. Insertion Sort <span className="text-green-400">Easy</span>
        </Link>
        <p className="text-blue-600">Recursive approach</p>
        <Link href="https://www.geeksforgeeks.org/problems/merge-sort/1">
          4. Merge Sort <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/bubble-sort/1">
          5. Recursive Bubble Sort{" "}
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/insertion-sort/1">
          6. Recursive Insertion Sort
          <span className="text-orange-400">Medium</span>
        </Link>
        <Link href="https://www.geeksforgeeks.org/problems/quick-sort/1">
          7. Quick Sort
          <span className="text-orange-400">Medium</span>
        </Link>
      </div>
    </div>
  );
}
