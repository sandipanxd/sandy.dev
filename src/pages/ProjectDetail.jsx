import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { statusLabel } from "../components/ProjectCard";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="project-detail">
        <h2>Project not found</h2>
        <p>There's no project at this address.</p>
        <Link className="back-link" to="/">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <span className={`status status-${project.status}`}>{statusLabel(project.status)}</span>
      <h2>{project.name}</h2>
      <p>{project.details}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener">
          View on GitHub
        </a>
      )}
      <Link className="back-link" to="/">
        Back to projects
      </Link>
    </section>
  );
}
