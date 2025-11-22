import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
      isActive
        ? "bg-white/90 text-slate-900"
        : "text-white/90 hover:bg-white/20"
    }`;

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-purple-600/70 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🐍</span>
          <span className="font-extrabold text-white text-lg tracking-tight">
            KidsLearnPython
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/lessons" className={linkClass}>
            Lessons
          </NavLink>
          <NavLink to="/run" className={linkClass}>
            Code Runner
          </NavLink>
          <NavLink to="/quiz" className={linkClass}>
            Quiz
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
