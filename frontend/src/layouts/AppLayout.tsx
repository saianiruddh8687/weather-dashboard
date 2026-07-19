import { Outlet, Link } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <header className="border-b border-slate-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide text-sky-400"
          >
            Atmos Weather
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="transition hover:text-sky-400"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className="transition hover:text-sky-400"
            >
              Dashboard
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © 2026 Atmos Weather
      </footer>
    </div>
  );
}
