const experiences = [
  {
    company: 'Trustpilot',
    period: '2023 \u2014 Present',
    role: 'Full Stack Software Engineer',
    description: "Building and maintaining core platform features on one of the world's largest consumer review platforms.",
  },
  {
    company: 'AND Digital',
    period: '2021 \u2014 2023',
    role: 'Full Stack Software Engineer',
    description: 'Delivered customer-facing web applications for enterprise clients including Lloyds Banking Group.',
  },
  {
    company: 'CodeClan',
    period: '2020',
    role: 'Professional Software Development',
    description: '16-week intensive full stack coding bootcamp.',
  },
];

const Experience = () => (
  <section className="relative z-10 max-w-3xl mx-auto px-6 py-20">
    <h2 className="font-instrument italic text-3xl font-normal mb-12 -tracking-tight pb-4 section-rule">
      Experience
    </h2>
    <div className="space-y-10">
      {experiences.map((exp) => (
        <div key={exp.company}>
          <div className="flex justify-between items-baseline flex-wrap gap-2 mb-2">
            <h3 className="font-instrument italic text-xl font-normal">{exp.company}</h3>
            <span className="font-inter text-xs text-[#888] tracking-wide">{exp.period}</span>
          </div>
          <p className="font-inter text-sm text-[#888] tracking-wide uppercase mb-3">{exp.role}</p>
          <p className="font-inter text-sm leading-relaxed text-[#888]">{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
