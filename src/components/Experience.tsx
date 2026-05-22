const experiences = [
  {
    role: 'Web Developer',
    company: 'Edusoft ITS Pvt. Ltd.',
    period: '07/2025 – Present',
    location: 'Delhi, India',
    type: 'Full-time',
    description: 'An educational solutions provider serving over 6,000 schools across India with integrated academic content.',
    color: 'purple',
    icon: '🏢',
    tasks: [
      'Developed and customised responsive educational websites using WordPress and PHP, whilst managing MySQL databases for efficient data handling and site performance.',
      'Implemented and administered Learning Management Systems (LMS) to facilitate digital course delivery, student tracking, and online assessments for client schools.',
      'Managed the hosting environment on Hostinger, overseeing DNS configurations, SSL installation, and server optimisation to ensure high availability and security.',
      'Conducted regular troubleshooting, routine backups, and plugin updates to maintain system stability and minimise downtime across all web portals.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'CollegeTips.in',
    period: '05/2025 – 06/2025',
    location: 'Remote',
    type: 'Internship',
    description: 'An edtech startup focused on empowering students through diverse initiatives.',
    color: 'cyan',
    icon: '💻',
    tasks: [
      'Collaborated on building and maintaining responsive web interfaces using HTML, CSS, JavaScript, and React.',
      'Developed front-end features and optimised UI/UX for student-facing platforms.',
      'Ensured mobile responsiveness, cross-browser compatibility, and interactive functionality.',
      'Contributed to performance tuning, code refactoring, and minor backend tasks in a fast-paced edtech environment.',
    ],
  },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; heading: string }> = {
  purple: {
    dot: 'bg-purple-600 shadow-purple-600/60',
    border: 'border-purple-700/40 hover:border-purple-500/60',
    badge: 'bg-purple-900/30 text-purple-300 border-purple-700/30',
    heading: 'text-purple-300',
  },
  cyan: {
    dot: 'bg-cyan-500 shadow-cyan-500/60',
    border: 'border-cyan-700/40 hover:border-cyan-500/60',
    badge: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/30',
    heading: 'text-cyan-300',
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-bg-alt relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-900/6 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-code text-cyan-400 text-sm tracking-widest uppercase mb-3 block">{'// where i worked'}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp) => {
              const colors = colorMap[exp.color];
              return (
                <div key={exp.company} className="md:pl-16 relative group">
                  {/* Dot */}
                  <div
                    className={`absolute left-4 top-8 w-4 h-4 rounded-full ${colors.dot} shadow-lg hidden md:block border-2 border-[#0a0a0f] z-10 transition-all duration-300 group-hover:scale-125`}
                  />

                  {/* Card */}
                  <div
                    className={`glass-card rounded-2xl p-7 border transition-all duration-400 card-hover ${colors.border}`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-2xl">{exp.icon}</span>
                          <h3 className={`text-xl font-bold ${colors.heading}`}>{exp.role}</h3>
                        </div>
                        <div className="text-white font-semibold text-lg ml-9">{exp.company}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}>
                          {exp.type}
                        </span>
                        <span className="text-slate-500 text-sm font-code">{exp.period}</span>
                        <span className="text-slate-600 text-xs flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-500 text-sm italic mb-5 border-l-2 border-purple-700/40 pl-3">
                      {exp.description}
                    </p>

                    <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                      <span className="w-4 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded" />
                      Achievements & Tasks
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm font-inter leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
