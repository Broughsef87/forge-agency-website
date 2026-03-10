export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-forge-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-forge-orange to-forge-red flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(255,87,34,0.5)]">
              F
            </div>
            <span className="font-bold text-xl tracking-tight">
              FORGE <span className="text-forge-orange">OS</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#ecosystem" className="hover:text-white transition-colors">The Ecosystem</a>
            <a href="https://dad-strength-app.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dad Strength App</a>
            <a href="#youtube" className="hover:text-white transition-colors">The Channel</a>
          </div>
          <button className="px-5 py-2 rounded-md bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors">
            Join the Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-forge-orange/30 bg-forge-orange/10 text-forge-orange text-xs font-mono font-bold uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-forge-orange animate-pulse"></span>
          System Online 24/7
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
          Build the <span className="forge-gradient">Legacy.</span>
          <br />
          Automate the Rest.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          A fully autonomous ecosystem designed to produce value around the clock. Stop trading time for money. Start building systems that buy back your life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-md bg-forge-orange hover:bg-forge-red text-white font-bold transition-colors shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_30px_rgba(255,87,34,0.6)] w-full sm:w-auto">
            Enter the Forge
          </button>
          <button className="px-8 py-4 rounded-md border border-white/20 hover:border-white/50 text-white font-bold transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Watch the Blueprint
          </button>
        </div>
      </main>

      {/* Three Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10" id="ecosystem">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-forge-panel border border-white/5 rounded-xl p-8 hover:border-forge-orange/50 transition-colors group">
            <div className="text-forge-orange font-mono text-sm mb-4">01 // CORE</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:neon-text transition-all">The Brain</h3>
            <p className="text-gray-400 mb-6">
              The central intelligence dashboard (Mission Control). An army of AI agents doing research, writing, and coding while you sleep.
            </p>
            <div className="font-mono text-xs text-gray-500 border-t border-white/10 pt-4">Status: Active & Learning</div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-forge-panel border border-white/5 rounded-xl p-8 hover:border-forge-orange/50 transition-colors group flex flex-col">
            <div className="text-forge-orange font-mono text-sm mb-4">02 // APP</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:neon-text transition-all">Dad Strength</h3>
            <p className="text-gray-400 mb-6 flex-grow">
              Functional power for the guys who need to be heroes at home, not posers in the mirror. Built for the 'Newborn Phase' and beyond.
            </p>
            <a href="https://dad-strength-app.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block w-full py-3 mb-6 rounded bg-white/5 hover:bg-forge-orange text-center font-bold text-sm transition-colors">
              Launch Beta App
            </a>
            <div className="font-mono text-xs text-gray-500 border-t border-white/10 pt-4 mt-auto">Status: Live on Vercel</div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-forge-panel border border-white/5 rounded-xl p-8 hover:border-forge-orange/50 transition-colors group">
            <div className="text-forge-orange font-mono text-sm mb-4">03 // MEDIA</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:neon-text transition-all">The Channel</h3>
            <p className="text-gray-400 mb-6">
              Building the $1M/year legacy in public. Raw insights into the systems, the code, and the reality of raising a kid while scaling.
            </p>
            <div className="font-mono text-xs text-gray-500 border-t border-white/10 pt-4">Status: Filming Drop 01</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12 text-center text-sm text-gray-500 font-mono">
        <p>&copy; 2026 Forge OS. Producing value 24/7.</p>
      </footer>
    </>
  );
}
