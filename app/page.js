import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl text-blue-600">CPRG 306: Web Development 2 - Assignments</h1>

      <Link href="/week-2" className="text-xl">
        Week 2
      </Link>
      <br />
      <Link href="/week-3" className="text-xl">
        Week 3
      </Link>
    </main>
  );
}