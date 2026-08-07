import Link from "next/link";

const projects = [
  {
    slug: "pop",
    name: "Pop",
    description: "A celebratory button for React",
  },
  {
    slug: "fieldquote",
    name: "FieldQuote",
    description: "Making clinical supervision easy for preceptors",
  },
  {
    slug: "sightline",
    name: "Sightline",
    description: "Canadian Government's expense growth analysis and insights",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-3">
      <span className="type-heading">Projects</span>
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="flex flex-col -mx-3 px-3 py-2 rounded-lg hover-transition hover:bg-[#F2F2F2]"
        >
          <span className="type-body">{project.name}</span>
          <span className="type-caption">{project.description}</span>
        </Link>
      ))}
    </section>
  );
}
