const interests = [
  { label: 'AI', description: "exploring how it's reshaping the way we build software" },
  { label: 'Music', description: 'playing instruments, always learning something new' },
  { label: 'Design', description: 'obsessing over typography, layout, and visual detail' },
];

const Interests = () => (
  <section className="relative z-10 max-w-3xl mx-auto px-6 py-20">
    <h2 className="font-instrument italic text-3xl font-normal mb-12 -tracking-tight pb-4 section-rule">
      Currently Into
    </h2>
    <ul className="list-none p-0 m-0 space-y-5">
      {interests.map((item) => (
        <li key={item.label} className="font-inter text-sm leading-relaxed text-[#888]">
          <span className="text-[#E5E5E5]">{item.label}</span> — {item.description}
        </li>
      ))}
    </ul>
  </section>
);

export default Interests;
