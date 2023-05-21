import { NextComponentType } from "next";
import Link from "next/link";

const PermissionError: NextComponentType = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-3xl text-indigo-600">403</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Permission error.
        </h1>
        <p className="mt-6 text-xl leading-7 text-gray-600">
          Sorry, you do not have permission to view this page.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link href="/login" className="text-md font-semibold text-gray-900">
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PermissionError;
