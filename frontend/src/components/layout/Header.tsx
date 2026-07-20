import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-sky-400"
        >
          Atmos Weather
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-sky-400"
                : "text-slate-300 transition hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-sky-400"
                : "text-slate-300 transition hover:text-white"
            }
          >
            Dashboard
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
