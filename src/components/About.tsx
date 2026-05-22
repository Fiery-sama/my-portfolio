const stats = [
  { value: '2+', label: 'Years Experience', icon: '💼' },
  { value: '10+', label: 'Technologies', icon: '⚡' },
  { value: '6+', label: 'Certifications', icon: '🏆' },
  { value: '1', label: 'Major Project', icon: '🚀' },
];

export default function About() {
  return (
    <section id="about" className="py-24 section-bg-alt relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-900/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-900/6 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-code text-purple-400 text-sm tracking-widest uppercase mb-3 block">{'// who am i'}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="glass-card rounded-2xl p-8 mb-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-inter">
                I'm <span className="text-purple-300 font-medium">Suhail Khan</span>, a passionate Software Developer based in 
                <span className="text-cyan-400 font-medium"> Ghaziabad, India</span>. With a strong foundation in Python 
                and full-stack web development, I specialize in crafting scalable applications that solve real-world problems.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 mb-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-600/20 flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-white">My Drive</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-inter">
                I thrive at the intersection of creativity and logic. Whether it's building responsive UIs with React 
                or architecting backend systems with Django, I bring dedication and attention to detail to every project. 
                I'm a GATE 2023 qualifier, constantly pushing my boundaries.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center">
                  <span className="text-lg">🌱</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Beyond Code</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-inter">
                When I'm not coding, I'm exploring open-source projects, participating in hackathons, 
                and attending tech meetups. I love programming challenges and continuously learning through 
                platforms like Infosys Springboard, Nasscom, and Hugging Face.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-6 text-center card-hover group">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-1 font-inter">{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="glass-card rounded-2xl p-6 mb-4">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-purple-400 font-code text-sm">const</span> personalInfo
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Email', value: 'khan.suhail1864@gmail.com', icon: '📧' },
                  { label: 'Phone', value: '+91 7982570877', icon: '📱' },
                  { label: 'Location', value: 'Ghaziabad, India', icon: '📍' },
                  { label: 'Languages', value: 'English, Hindi', icon: '🌐' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 text-sm">
                    <span className="text-base w-6">{item.icon}</span>
                    <span className="text-slate-500 w-20 shrink-0">{item.label}:</span>
                    <span className="text-slate-300 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {['Programming Challenges', 'Open-source Projects', 'Tech Meetups', 'Hackathons', 'AI/ML Research', 'Web Innovation'].map(interest => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-full text-xs font-medium skill-tag"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
