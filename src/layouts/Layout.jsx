import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const THEME_KEY = "sandy-dev-theme";

export default function Layout() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <div className="page">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
