import { skills } from "../data/skills";

const CLOUD_ICON = (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 18H6a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 16.2 8.1 4.5 4.5 0 0 1 19 18Z" />
  </svg>
);

function SkillIcon({ slug }) {
  if (!slug) return CLOUD_ICON;
  return (
    <img className="skill-icon" src={`https://cdn.simpleicons.org/${slug}/6ee7b7`} alt="" />
  );
}

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul className="tags">
        {skills.map((skill) => (
          <li key={skill.name}>
            <SkillIcon slug={skill.slug} />
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
