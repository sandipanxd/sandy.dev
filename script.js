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

applyFilter("all");
