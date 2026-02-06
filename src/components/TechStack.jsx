import { Icon } from '@iconify/react';
import { techStack } from '../data/techStack';

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'testing', label: 'Testing' },
  { key: 'cloud', label: 'Cloud & DevOps' },
];

const TechStack = () => (
  <section className="relative z-10 max-w-3xl mx-auto px-6 py-20">
    <h2 className="font-instrument italic text-3xl font-normal mb-12 -tracking-tight pb-4 section-rule">
      Tech Stack
    </h2>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10">
      {categories.map((cat) => (
        <div key={cat.key}>
          <h3 className="font-instrument italic text-lg font-normal mb-4">
            {cat.label}
          </h3>
          <ul className="list-none p-0 m-0">
            {techStack[cat.key].map((item) => (
              <li
                key={item.name}
                className="font-inter text-sm text-[#888] py-1.5 flex items-center gap-2.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Icon icon={item.icon} width="16" height="16" className="shrink-0" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
