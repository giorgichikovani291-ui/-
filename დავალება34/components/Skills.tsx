import type { Skill } from "@/types";

const skills: Skill[] = [
  { name: "HTML", years: "2 Years Experience" },
  { name: "CSS", years: "2 Years Experience" },
  { name: "JavaScript", years: "2 Years Experience" },
  { name: "React", years: "1 Year Experience" },
  { name: "Python", years: "1 Year Experience" },
  { name: "Linux", years: "1 Year Experience" },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <h3 className="text-heading-m font-bold">{skill.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted/60">
              {skill.years}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
