export default function About() {
  return (
    <section className="flex flex-col gap-4">
      <span className="type-heading">About</span>
      <div className="flex flex-col gap-[26px] type-caption">
        <p>
          I&apos;m based in Ottawa, Canada. For over half a decade, I have
          worked with founders in startups, enterprise teams, and agencies.
        </p>
        <p>
          Aside from work, I tinker through life with my swe wife. I read
          philosophy, sketch, hike and can also solve a Rubik&apos;s Cube in
          about 15 seconds.
        </p>
        <p>
          Find me on{" "}
          <a href="#" className="underline">
            X
          </a>{" "}
          or reach me via{" "}
          <a href="#" className="underline">
            email
          </a>
          . My code is on{" "}
          <a href="#" className="underline">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
