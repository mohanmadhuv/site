const projects = [
  {
    name: "Pop",
    description: "A celebratory button for React",
  },
  {
    name: "FieldQuote",
    description: "Optimized feedback capture and relay for medical residents",
  },
  {
    name: "GC Contract Intelligence",
    description: "Canadian Government's expense growth analysis and insights",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-3">
      <span className="type-heading">Projects</span>
      {projects.map((project) => (
        <div
          key={project.name}
          className="flex flex-col -mx-3 px-3 py-2 rounded-lg hover-transition hover:bg-[#F2F2F2]"
        >
          <span className="type-body">{project.name}</span>
          <span className="type-caption">{project.description}</span>
        </div>
      ))}
    </section>
  );
}
