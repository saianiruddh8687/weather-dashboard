import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6">
      <h1 className="text-7xl font-black">404</h1>

      <p className="mt-4 text-slate-400">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-sky-500 px-6 py-3 font-medium transition hover:bg-sky-600"
      >
        Go Home
      </Link>
    </section>
  );
}
