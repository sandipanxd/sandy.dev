import { useEffect, useState } from "react";

export default function Header({ theme, onToggleTheme }) {
  const [githubStats, setGithubStats] = useState("Loading GitHub stats…");

  useEffect(() => {
    async function loadGithubStats() {
      try {
        const response = await fetch("https://api.github.com/users/sandipanxd");

        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }

        const { public_repos, followers } = await response.json();
        setGithubStats(`${public_repos} public repos · ${followers} followers`);
      } catch (error) {
        setGithubStats("GitHub stats unavailable right now");
        console.error("Failed to load GitHub stats:", error);
      }
    }

    loadGithubStats();
  }, []);

  return (
    <header>
      <button
        type="button"
        className="theme-toggle"
        aria-label="Toggle color theme"
        onClick={onToggleTheme}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </button>
      <h1>Sandipan Biswas</h1>
      <p>Full stack developer in progress — Node.js, NestJS, React.</p>
      <p className="github-stats">{githubStats}</p>
    </header>
  );
}
