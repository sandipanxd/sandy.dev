export const projects = [
  {
    name: "Portfolio Site",
    slug: "portfolio-site",
    status: "live",
    description: "This site — HTML, CSS, and a build log of the roadmap itself.",
    details:
      "Started as plain HTML/CSS/JS and rebuilt on React + Vite as the Week 4 milestone project. Each feature — Flexbox/Grid layouts, a light/dark theme toggle, live GitHub stats via fetch, a controlled contact form, and this routing — was added incrementally, one roadmap day at a time.",
    link: "https://github.com/sandipanxd/sandy.dev",
  },
  {
    name: "To-Do App",
    slug: "to-do-app",
    status: "planned",
    description: "Full-stack CRUD app — React frontend, Express + MongoDB backend.",
    details:
      "The first true full-stack project on the roadmap: a React frontend talking to an Express + MongoDB REST API, with full create/read/update/delete flows, environment variables, and CORS handled properly, deployed with the frontend and backend on separate hosts.",
    link: null,
  },
  {
    name: "Blog Platform",
    slug: "blog-platform",
    status: "planned",
    description: "Auth-gated posts with JWT, sign up/log in flows.",
    details:
      "Adds authentication on top of the To-Do App's full-stack pattern — JWT-based sign up and log in, password hashing with bcrypt, and protected routes on both the API and the frontend so only logged-in users can create or edit posts.",
    link: null,
  },
  {
    name: "E-Commerce App",
    slug: "e-commerce-app",
    status: "planned",
    description: "Next.js storefront with Stripe checkout and an admin dashboard.",
    details:
      "The portfolio's capstone project: a Next.js storefront with server-side rendering, a Stripe test-mode checkout flow, and an admin dashboard for managing orders — bringing together everything from the roadmap's advanced stage.",
    link: null,
  },
];
