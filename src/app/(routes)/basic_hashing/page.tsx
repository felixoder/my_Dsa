import Link from "next/link";

export default function BasicHashingPage(){
  return(
    <div>
      <h1 className="font-bold text-xl text-center mb-5">
        Chapter 4 - Basic Hashing [Basic]
      </h1>
      <div className="flex justify-center items-center flex-col gap-5">
        <Link href="https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0">
          1. Frequency of array elements <span className="text-green-400">Easy</span>
        </Link>
      </div>
    </div>


  )
}
