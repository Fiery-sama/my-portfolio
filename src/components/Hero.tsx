import { useEffect, useState } from 'react';

const roles = [
  'Software Developer',
  'Full-Stack Web Developer',
  'Python Developer',
  'React Developer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(prev =>
          isDeleting
            ? prev.slice(0, -1)
            : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? 55 : 90);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg grid-pattern overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-3xl" />

      {/* Floating code snippets */}
      <div className="absolute top-32 right-16 hidden xl:block opacity-20 font-code text-xs text-purple-300 animate-float" style={{ animationDelay: '0s' }}>
        <div>{'const dev = {'}</div>
        <div>{'  name: "Suhail",'}</div>
        <div>{'  stack: ["React", "Python"],'}</div>
        <div>{'  passion: "Building"'}</div>
        <div>{'};'}</div>
      </div>

      <div className="absolute bottom-40 left-16 hidden xl:block opacity-15 font-code text-xs text-cyan-300 animate-float" style={{ animationDelay: '2s' }}>
        <div>{'def solve_problems():'}</div>
        <div>{'  while True:'}</div>
        <div>{'    code()'}</div>
        <div>{'    learn()'}</div>
        <div>{'    ship()'}</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-sm font-medium mb-6 font-code">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Suhail</span>
              <br />
              <span className="gradient-text">Khan</span>
            </h1>

            <div className="flex items-center gap-2 mb-6 h-10">
              <span className="text-xl lg:text-2xl text-slate-300 font-medium font-inter">
                {displayed}
              </span>
              <span className="w-0.5 h-7 bg-purple-500 animate-pulse rounded-full" />
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg font-inter">
              Enthusiastic Software Developer with a solid foundation in Python and full-stack web development. 
              Passionate about building scalable applications and solving real-world problems using modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary px-7 py-3.5 rounded-xl text-white font-semibold flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn-outline px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10">
              <span className="text-slate-500 text-sm font-code">{'// follow me'}</span>
              <a
                href="https://github.com/Fiery-sama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-900/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/iamsuhailkhan1864"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-900/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:khan.suhail1864@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-900/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Avatar/Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-0 -m-6 rounded-full border border-dashed border-purple-600/30 animate-spin-slow" />
              <div className="absolute inset-0 -m-12 rounded-full border border-dashed border-cyan-600/15 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

              {/* Avatar container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-purple-900/60 via-slate-900 to-cyan-900/40 border-2 border-purple-700/40 shadow-2xl shadow-purple-900/50 flex items-center justify-center overflow-hidden">
                {/* Code SVG pattern inside */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <text x="10" y="30" fill="#a855f7" fontSize="8" fontFamily="monospace">{'import React from "react"'}</text>
                    <text x="10" y="50" fill="#06b6d4" fontSize="8" fontFamily="monospace">{'const App = () => {'}</text>
                    <text x="10" y="70" fill="#a855f7" fontSize="8" fontFamily="monospace">{'  return <div>'}</text>
                    <text x="10" y="90" fill="#06b6d4" fontSize="8" fontFamily="monospace">{'    Hello World'}</text>
                    <text x="10" y="110" fill="#a855f7" fontSize="8" fontFamily="monospace">{'  </div>'}</text>
                    <text x="10" y="130" fill="#06b6d4" fontSize="8" fontFamily="monospace">{'}'}</text>
                    <text x="10" y="160" fill="#a855f7" fontSize="8" fontFamily="monospace">{'def main():'}</text>
                    <text x="10" y="180" fill="#06b6d4" fontSize="8" fontFamily="monospace">{'  print("Hello")'}</text>
                  </svg>
                </div>

                {/* Initials */}
                <div className="relative z-10 text-center">
                  <div className="text-7xl lg:text-8xl font-bold gradient-text font-inter leading-none mb-2">SK</div>
                  <div className="text-slate-400 text-sm font-code tracking-widest">{'<developer />'}</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#111118] border border-purple-600/40 rounded-xl px-3 py-2 text-xs font-code text-purple-300 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                ⚡ React & Python
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#111118] border border-cyan-600/40 rounded-xl px-3 py-2 text-xs font-code text-cyan-300 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                🚀 Full-Stack Dev
              </div>
              <div className="absolute top-1/2 -right-8 bg-[#111118] border border-green-600/40 rounded-xl px-3 py-2 text-xs font-code text-green-300 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                🎓 GATE Qualified
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 pb-8">
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors group">
            <span className="text-xs font-code tracking-widest">scroll down</span>
            <div className="w-5 h-8 rounded-full border border-slate-600 group-hover:border-purple-500 flex items-start justify-center pt-1.5 transition-colors">
              <div className="w-1 h-2 rounded-full bg-purple-500 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
