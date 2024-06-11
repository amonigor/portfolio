import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5">
      <h1 className="pb-5 text-9xl font-bold">Igor Amon</h1>
      <p className="text-xl">Software Engineer</p>

      <div className="flex items-center justify-center gap-2 pt-5">
        <Link
          href="https://www.linkedin.com/in/igor-amon/"
          className="flex gap-1 hover:opacity-50"
          target="_blank"
        >
          <p className="leading-tight">LinkedIn</p>
        </Link>
        <Link
          href="https://github.com/amonigor"
          className="flex gap-1 hover:opacity-50"
          target="_blank"
        >
          <p className="leading-tight">Github</p>
        </Link>
      </div>
    </main>
  );
}
