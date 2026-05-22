const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'purple',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 75 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'cyan',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Django', level: 82 },
      { name: 'PHP', level: 70 },
      { name: 'Node.js', level: 72 },
      { name: 'Rest APIs', level: 85 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    color: 'pink',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'WordPress', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'OOP', level: 85 },
      { name: 'Data Structures', level: 80 },
    ],
  },
];

const allSkills = [
  'Python', 'Django', 'JavaScript', 'React', 'Next.js', 'Java', 'C++', 'HTML',
  'CSS', 'TailwindCSS', 'Bootstrap', 'MySQL', 'Git', 'VS Code', 'Node.js',
  'Rest APIs', 'OOP', 'Data Structures', 'Algorithms', 'Responsive Design',
  'SEO', 'PHP', 'WordPress', 'Elementor',
];

const colorMap: Record<string, { bar: string; glow: string; tag: string }> = {
  purple: {
    bar: 'from-purple-600 to-purple-400',
    glow: 'bg-purple-600/20 border-purple-700/40',
    tag: 'text-purple-300',
  },
  cyan: {
    bar: 'from-cyan-600 to-cyan-400',
    glow: 'bg-cyan-600/10 border-cyan-700/40',
    tag: 'text-cyan-300',
  },
  pink: {
    bar: 'from-pink-600 to-pink-400',
    glow: 'bg-pink-600/10 border-pink-700/40',
    tag: 'text-pink-300',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{ background: '#0a0a0f' }}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/6 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-code text-purple-400 text-sm tracking-widest uppercase mb-3 block">{'// what i know'}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto font-inter">
            A diverse toolkit built through hands-on experience, personal projects, and continuous learning.
          </p>
        </div>

        {/* All Skills Tags */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <h3 className="text-white font-semibold text-center mb-6 font-code text-sm text-purple-300 tracking-widest uppercase">All Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {allSkills.map((skill) => (
              <span key={skill} className="skill-tag px-4 py-2 rounded-lg text-sm font-medium cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const colors = colorMap[cat.color];
            return (
              <div
                key={cat.title}
                className={`glass-card rounded-2xl p-6 card-hover border ${colors.glow}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className={`text-lg font-bold ${colors.tag}`}>{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className={`text-xs font-code ${colors.tag}`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${colors.bar} progress-bar`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
