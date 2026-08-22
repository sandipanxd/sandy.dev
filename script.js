const skills = [
  { name: "Node.js", slug: "nodedotjs" },
  { name: "NestJS", slug: "nestjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "AWS", slug: null },
  { name: "React", slug: "react" },
];

const CLOUD_ICON_SVG = `<svg class="skill-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 16.2 8.1 4.5 4.5 0 0 1 19 18Z"/></svg>`;

function skillIcon({ slug }) {
  if (!slug) return CLOUD_ICON_SVG;
  return `<img class="skill-icon" src="https://cdn.simpleicons.org/${slug}/6ee7b7" alt="" />`;
}

function renderSkills(list) {
  const skillsList = document.getElementById("skillsList");
  const tags = list.map(
    (skill) => `<li>${skillIcon(skill)}${skill.name}</li>`
  );
  skillsList.innerHTML = tags.join("");
}

const projects = [
  {
    name: "Portfolio Site",
    status: "live",
    description: "This site — HTML, CSS, and a build log of the roadmap itself.",
    link: "https://github.com/sandipanxd/sandy.dev",
  },
  {
    name: "To-Do App",
    status: "planned",
    description: "Full-stack CRUD app — React frontend, Express + MongoDB backend.",
    link: null,
  },
  {
    name: "Blog Platform",
    status: "planned",
    description: "Auth-gated posts with JWT, sign up/log in flows.",
    link: null,
  },
  {
    name: "E-Commerce App",
    status: "planned",
    description: "Next.js storefront with Stripe checkout and an admin dashboard.",
    link: null,
  },
];

function statusLabel(status) {
  return status === "live" ? "Live" : "Planned";
}

function renderProjects(list) {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";

  for (const project of list) {
    const card = document.createElement("article");
    card.className = "project-card";

    const linkHtml = project.link
      ? `<a href="${project.link}" target="_blank" rel="noopener">View on GitHub</a>`
      : "";

    card.innerHTML = `
      <span class="status status-${project.status}">${statusLabel(project.status)}</span>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      ${linkHtml}
    `;

    grid.appendChild(card);
  }
}

function applyFilter(filter) {
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);
  renderProjects(filtered);
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    applyFilter(button.dataset.filter);
  });
});

renderSkills(skills);

applyFilter("all");

const THEME_KEY = "sandy-dev-theme";
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

applyTheme(localStorage.getItem(THEME_KEY) || "dark");
