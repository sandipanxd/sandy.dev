import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard, { statusLabel } from "./ProjectCard";

const FILTERS = ["all", "live", "planned"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.status === activeFilter);

  return (
    <section>
      <h2>Projects</h2>
      <div className="filter-row">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-btn${filter === activeFilter ? " active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === "all" ? "All" : statusLabel(filter)}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
