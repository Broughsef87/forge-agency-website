import ForgeLogo from '../components/ForgeLogo';

export default function Home() {
  return (
    <div className="bg-forge-dark text-white min-h-screen selection:bg-forge-orange/40 relative">
      <div className="scanline" />
      
      {/* Navigation */}
      <nav className="border-b border-forge-orange/20 bg-forge-dark/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group">
            <ForgeLogo className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
            <span className="font-orbitron font-black text-xl tracking-[0.2em] uppercase neon-text-orange">
              FORGE <span className="text-white">AGENCY</span>
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-xs font-bold font-orbitron text-gray-500 uppercase tracking-widest">
            <a href="#solutions" className="hover:text-forge-orange transition-colors">Solutions</a>
            <a href="#engine" className="hover:text-forge-orange transition-colors">The Engine</a>
            <a href="#audit" className="hover:text-forge-orange transition-colors">Book Audit</a>
          </div>
          <a href="#audit" className="cyber-button px-6 py-3 bg-white text-black font-orbitron font-black text-[10px] uppercase tracking-widest hover:bg-forge-orange hover:text-white transition-colors">
            Init Audit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-40 text-center flex flex-col items-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-forge-orange/10 blur-[150px] -z-10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-neon-purple/5 blur-[150px] -z-10 rounded-full animate-pulse-slow"></div>
        
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-none border-l-2 border-forge-orange bg-forge-orange/10 text-forge-orange text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-12 animate-fade-in backdrop-blur-sm">
          <span className="w-2 h-2 bg-forge-orange animate-pulse"></span>
          FORGE OS AGENTIC INFRASTRUCTURE // v4.0.1
        </div>

        <h1 className="text-5xl md:text-8xl font-orbitron font-black tracking-tighter mb-8 leading-none">
          THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forge-orange via-white to-gray-600">
            AUTONOMOUS
          </span>
          <br />
          BUSINESS ENGINE
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed font-inter">
          We architect custom AI agent workflows for 7-figure founders. Buy back 20+ hours a week. Scale your operations without adding human overhead.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto">
          <button className="cyber-button px-12 py-6 bg-forge-orange text-white font-orbitron font-black uppercase text-xs tracking-[0.2em] transition-all shadow-[0_0_50px_rgba(255,87,34,0.3)] hover:shadow-[0_0_70px_rgba(255,87,34,0.6)] w-full sm:w-auto active:scale-95 group">
            <span className="group-hover:animate-glitch block">Claim Efficiency Audit</span>
          </button>
          <button className="cyber-button px-12 py-6 border border-white/20 hover:border-forge-orange/50 text-white font-orbitron font-black uppercase text-xs tracking-[0.2em] transition-all w-full sm:w-auto backdrop-blur-sm bg-white/5 active:scale-95">
            View Workflows
          </button>
        </div>
      </main>

      {/* Feature Section: Lead-to-Qualified Engine */}
      <section className="py-32 border-y border-white/5 bg-forge-panel/20" id="engine">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-forge-orange/10 blur-3xl -z-10"></div>
              <div className="font-mono text-[10px] text-forge-orange mb-4 tracking-[0.5em] uppercase">Core Architecture</div>
              <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8 leading-tight">THE LEAD-TO-QUALIFIED <span className="text-forge-orange">ENGINE.</span></h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-inter">
                Stop wasting human bandwidth on tire-kickers. Our flagship productized workflow uses multi-agent orchestration to research, qualify, and book meetings with your ideal clients while you sleep.
              </p>
              <ul className="space-y-6">
                {[
                  "Deep-research agents verify prospect data via LinkedIn and Web Search",
                  "Behavioral analysis agents score leads based on custom ICP fit",
                  "Agentic outreach personalized for every individual contact",
                  "Seamless handover to your calendar for qualified ops only"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-none border border-forge-orange/50 flex-shrink-0 flex items-center justify-center text-[10px] font-mono text-forge-orange">{idx + 1}</span>
                    <span className="text-gray-300 font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/50 border border-forge-orange/30 p-1 rounded-none relative">
              <div className="absolute -inset-1 bg-forge-orange/5 blur opacity-20"></div>
              <div className="bg-forge-dark p-8 border border-white/10">
                <div className="flex gap-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-forge-red"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4 font-mono text-xs">
                  <div className="text-forge-orange">{'>'} sys.init_workflow("LEAD_TO_QUALIFIED")</div>
                  <div className="text-gray-500">[*] Launching deep-research agent cluster...</div>
                  <div className="text-gray-500">[*] Analyzing prospect domain: forgeos.com</div>
                  <div className="text-green-400">[✓] Prospect ICP match: 98% (High Priority)</div>
                  <div className="text-gray-500">[*] Synthesizing personalized outreach context...</div>
                  <div className="text-forge-orange animate-pulse">{'>'} Waiting for agent confirmation_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-40" id="solutions">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6">WORKFLOW <span className="text-forge-orange">SOLUTIONS.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-bold tracking-widest uppercase text-xs">High-Ticket Productized AI Infrastructure.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Solution 1 */}
          <div className="bg-forge-panel/40 border border-white/5 p-12 hover:border-forge-orange/50 transition-all group relative backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-gray-700 tracking-widest">OPS // 01</div>
            <h3 className="text-2xl font-orbitron font-black mb-6 group-hover:text-forge-orange transition-colors">AUTONOMOUS OPS</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm font-medium">
              A custom-coded 24/7 engine that handles the logic of your back-office. From lead triage to multi-step data processing.
            </p>
            <div className="font-mono text-[10px] text-gray-600 border-t border-white/5 pt-8 uppercase tracking-[0.3em]">Entry: $10k+ Setup</div>
          </div>

          {/* Solution 2 */}
          <div className="bg-forge-panel/60 border border-forge-orange/40 p-12 hover:border-forge-orange transition-all group relative backdrop-blur-sm scale-105 shadow-[0_0_50px_rgba(255,87,34,0.1)]">
            <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-forge-orange tracking-widest">CONTENT // 02</div>
            <h3 className="text-2xl font-orbitron font-black mb-6 text-forge-orange">HYPER-SCALE CONTENT</h3>
            <p className="text-gray-300 mb-10 leading-relaxed text-sm font-medium">
              100+ deep-researched, SEO-optimized articles a month. Agents that search, verify, and write in your brand voice.
            </p>
            <div className="font-mono text-[10px] text-forge-orange border-t border-white/10 pt-8 uppercase tracking-[0.3em] font-black">Monthly: $15k+</div>
          </div>

          {/* Solution 3 */}
          <div className="bg-forge-panel/40 border border-white/5 p-12 hover:border-forge-orange/50 transition-all group relative backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-gray-700 tracking-widest">STRATEGY // 03</div>
            <h3 className="text-2xl font-orbitron font-black mb-6 group-hover:text-forge-orange transition-colors">FRACTIONAL AI CoS</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm font-medium">
              A 90-day infrastructure transformation. Audit, custom RAG architecture, and team deployment.
            </p>
            <div className="font-mono text-[10px] text-gray-600 border-t border-white/5 pt-8 uppercase tracking-[0.3em]">Consulting: $30k+</div>
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="max-w-5xl mx-auto px-6 mb-40" id="audit">
        <div className="bg-gradient-to-br from-forge-orange to-forge-red p-12 md:p-20 text-center relative overflow-hidden cyber-button">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8 relative z-10">READY TO <br />FORGE?</h2>
          <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto font-medium relative z-10">
            We only take on 2 new partners per month to ensure deep architectural integrity. Apply for a Workflow Audit below.
          </p>
          <button className="px-12 py-6 bg-white text-black font-orbitron font-black uppercase text-sm tracking-[0.3em] hover:bg-black hover:text-white transition-all relative z-10 active:scale-95 shadow-2xl">
            Book the Audit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-forge-orange/20 bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
           <div className="flex items-center gap-4 mb-10 opacity-60">
             <ForgeLogo className="w-8 h-8" />
             <span className="font-orbitron font-black text-lg tracking-[0.4em] uppercase">FORGE AGENCY</span>
           </div>
           <div className="flex gap-8 mb-12 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
             <a href="#" className="hover:text-forge-orange transition-colors">Twitter</a>
             <a href="#" className="hover:text-forge-orange transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-forge-orange transition-colors">Systems</a>
           </div>
           <p className="text-[10px] text-gray-700 font-mono uppercase tracking-[0.5em] mb-4 text-center">EST. 2026 // ANDREW BROUGH // FORGE OS ECOSYSTEM</p>
           <p className="text-[9px] text-gray-800 font-mono tracking-[0.3em] text-center">ALL RIGHTS RESERVED. CODE IS LAW. EFFICIENCY IS PROFIT.</p>
        </div>
      </footer>
    </div>
  );
}
