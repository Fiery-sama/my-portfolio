const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    period: '08/2023 – Present',
    location: 'Delhi, India',
    color: 'purple',
    icon: '🎓',
    courses: ['Software Engineering', 'Web Development', 'AI/ML and Data Science', 'Digital Image Processing & CV'],
  },
  {
    degree: 'Bachelor of Vocation (B. Voc.) in Software Development',
    institution: 'Ramanujan College, University of Delhi',
    period: '07/2018 – 06/2021',
    location: 'Delhi, India',
    color: 'cyan',
    icon: '📚',
    courses: ['Software Development', 'Web Development', 'Data Science and Analytics', 'Managerial Skills'],
  },
];

const certificates = [
  { title: 'Programming Fundamentals using Python', issuer: 'Infosys Springboard', period: '07/2025 – Present', icon: '🐍' },
  { title: 'AI Agents Fundamentals', issuer: 'Hugging Face', period: '05/2025 – Present', icon: '🤖' },
  { title: 'Introduction to Data Science', issuer: 'Infosys Springboard', period: '05/2025 – Present', icon: '📊' },
  { title: 'Junior Data Associate', issuer: 'Nasscom', period: '03/2021 – Present', icon: '💼' },
  { title: 'Web Developer', issuer: 'Nasscom', period: '04/2020 – Present', icon: '🌐' },
  { title: 'Software Developer', issuer: 'Nasscom', period: '02/2019 – Present', icon: '⚡' },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; heading: string; bg: string }> = {
  purple: {
    dot: 'bg-purple-600',
    border: 'border-purple-700/40 hover:border-purple-500/60',
    badge: 'bg-purple-900/30 text-purple-300 border-purple-700/30',
    heading: 'text-purple-300',
    bg: 'bg-purple-900/10',
  },
  cyan: {
    dot: 'bg-cyan-500',
    border: 'border-cyan-700/40 hover:border-cyan-500/60',
    badge: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/30',
    heading: 'text-cyan-300',
    bg: 'bg-cyan-900/10',
  },
};

export default function Education() {
  return (
    <section id="education" className="py-24 section-bg-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-900/6 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-code text-cyan-400 text-sm tracking-widest uppercase mb-3 block">{'// my journey'}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Education & <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center">🎓</span>
              Academic Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => {
                const colors = colorMap[edu.color];
                return (
                  <div
                    key={edu.institution}
                    className={`glass-card rounded-2xl p-6 border card-hover transition-all ${colors.border}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.badge} flex items-center justify-center text-xl shrink-0`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-bold text-base leading-tight mb-1 ${colors.heading}`}>{edu.degree}</h4>
                        <p className="text-white font-medium text-sm">{edu.institution}</p>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="text-slate-500 text-xs font-code">{edu.period}</span>
                          <span className="text-slate-600 text-xs flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">Key Courses</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className={`px-2.5 py-1 rounded-md text-xs border ${colors.badge}`}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Achievement */}
              <div className="glass-card rounded-2xl p-6 border border-yellow-700/30 card-hover bg-yellow-900/5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <h4 className="text-yellow-300 font-bold text-base">GATE Qualified</h4>
                    <p className="text-slate-400 text-sm">Graduate Aptitude Test in Engineering (2023)</p>
                    <p className="text-slate-500 text-xs font-code mt-1">Major Achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-600/20 flex items-center justify-center">📜</span>
              Certifications
            </h3>

            <div className="space-y-3">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card rounded-xl p-4 border border-white/5 hover:border-cyan-700/40 card-hover transition-all flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-900/20 border border-cyan-700/30 flex items-center justify-center text-xl shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm leading-tight">{cert.title}</h4>
                    <p className="text-cyan-400 text-xs font-medium mt-0.5">{cert.issuer}</p>
                    <p className="text-slate-500 text-xs font-code mt-0.5">{cert.period}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-400 shrink-0 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
