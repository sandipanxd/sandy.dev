export function statusLabel(status) {
  return status === "live" ? "Live" : "Planned";
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <span className={`status status-${project.status}`}>{statusLabel(project.status)}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener">
          View on GitHub
        </a>
      )}
    </article>
  );
}
