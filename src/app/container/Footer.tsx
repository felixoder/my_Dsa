import Link from "next/link";

export default function Footer() {
  return (
    <div className=" bottom-0 flex justify-center items-center mt-2 mb-2 bg-gray-100">
      Created By{" "}
      <Link href="https://github.com/felixoder" className="underline ml-2">
        {" "}
        Debayan ❤️
      </Link>
    </div>
  );
}
