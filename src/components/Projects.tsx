const projects = [
  {
    title: 'DigiSamuday',
    subtitle: 'Society Management System',
    period: '10/2024 – 03/2025',
    tech: ['Python (Django)', 'React', 'TailwindCSS', 'MySQL'],
    description:
      'A full-stack web application for managing resident, visitor, and facility operations in apartment societies. Designed for seamless society administration with a modern, responsive interface.',
    features: [
      'User authentication & role-based access control (Admin, Resident, Security)',
      'Visitor management with digital pass generation',
      'Complaint handling & resolution tracking system',
      'Facility booking & scheduling module',
      'Real-time dashboard with analytics',
    ],
    color: 'purple',
    icon: '🏘️',
    status: 'Completed',
    gradient: 'from-purple-900/40 to-slate-900/60',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ background: '#0a0a0f' }}>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-900/8 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-code text-purple-400 text-sm tracking-widest uppercase mb-3 block">{'// what i built'}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Personal <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-500 max-w-xl mx-auto font-inter">
            Hands-on projects that demonstrate my ability to design and build full-stack applications from concept to deployment.
          </p>
        </div>

        {/* Project Card - Featured */}
        {projects.map((project) => (
          <div
            key={project.title}
            className={`glass-card rounded-3xl overflow-hidden border border-purple-700/30 hover:border-purple-500/50 transition-all duration-500 card-hover glow-purple`}
          >
            {/* Top gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500" />

            <div className="p-8 lg:p-10">
              <div className="grid lg:grid-cols-5 gap-10">
                {/* Left */}
                <div className="lg:col-span-3">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-3xl">{project.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <p className="text-purple-300 font-medium text-sm">{project.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-700/30">
                        ✅ {project.status}
                      </span>
                      <span className="text-slate-500 text-xs font-code">{project.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed font-inter mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-white text-sm font-semibold mb-3 font-code text-purple-300">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-900/20 border border-purple-700/40 text-purple-200 font-code"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Features */}
                <div className="lg:col-span-2">
                  <div className="bg-white/3 rounded-2xl p-6 h-full border border-white/5">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400 text-sm font-inter">
                          <span className="w-5 h-5 rounded-full bg-purple-700/30 border border-purple-600/40 flex items-center justify-center text-purple-400 text-xs shrink-0 mt-0.5 font-bold">
                            {i + 1}
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-4 font-inter">Want to see more of my work?</p>
          <a
            href="https://github.com/Fiery-sama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-primary px-8 py-3.5 rounded-xl text-white font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
