import ForgeLogo from '../components/ForgeLogo';

export default function Home() {
  return (
    <div className="bg-forge-dark text-white min-h-screen selection:bg-forge-orange/40 relative grid-bg crt-overlay">
      <div className="scanline" />
      
      {/* Navigation */}
      <nav className="border-b border-forge-orange/20 bg-forge-dark/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <ForgeLogo className="w-10 h-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
            <span className="font-orbitron font-black text-xl tracking-[0.2em] uppercase neon-text-orange">
              FORGE <span className="text-white group-hover:text-forge-orange transition-colors">AGENCY</span>
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-black font-orbitron text-gray-500 uppercase tracking-[0.3em]">
            <a href="#solutions" className="hover:text-forge-orange transition-colors relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-forge-orange transition-all group-hover:w-full"></span>
            </a>
            <a href="#engine" className="hover:text-forge-orange transition-colors relative group">
              The Engine
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-forge-orange transition-all group-hover:w-full"></span>
            </a>
            <a href="#audit" className="hover:text-forge-orange transition-colors relative group">
              Audit
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-forge-orange transition-all group-hover:w-full"></span>
            </a>
          </div>
          <a href="#audit" className="cyber-button px-6 py-3 bg-white text-black font-orbitron font-black text-[10px] uppercase tracking-widest hover:bg-forge-orange hover:text-white transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            INIT_AUDIT
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-40 text-center flex flex-col items-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-forge-orange/20 blur-[180px] -z-10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/10 blur-[180px] -z-10 rounded-full animate-pulse-slow"></div>
        
        <div className="inline-flex items-center gap-3 px-6 py-2 border-l-4 border-forge-orange bg-forge-orange/5 text-forge-orange text-[10px] font-mono font-bold uppercase tracking-[0.4em] mb-12 animate-fade-in backdrop-blur-sm border-r border-y border-white/5">
          <span className="w-2 h-2 bg-forge-orange animate-pulse shadow-[0_0_10px_#FF5722]"></span>
          FORGE OS AGENTIC INFRASTRUCTURE // v4.0.1
        </div>

        <h1 className="text-6xl md:text-[9rem] font-orbitron font-black tracking-tighter mb-8 leading-[0.85] uppercase">
          <span className="block mb-2">Build The</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-forge-orange via-white to-gray-700 neon-text-orange">
            AUTONOMOUS
          </span>
          <br />
          <span className="block mt-2">Empire</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-medium leading-relaxed font-inter">
          We architect custom AI agent workflows for high-ticket service providers. <span className="text-white">Eliminate the human bottleneck.</span> Scale operations with code, not headcount.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto">
          <button className="cyber-button px-14 py-7 bg-forge-orange text-white font-orbitron font-black uppercase text-xs tracking-[0.3em] transition-all shadow-[0_0_50px_rgba(255,87,34,0.4)] hover:shadow-[0_0_80px_rgba(255,87,34,0.7)] w-full sm:w-auto active:scale-95 group">
            <span className="group-hover:animate-glitch block">Secure Audit Slot</span>
          </button>
          <button className="cyber-button px-14 py-7 border border-white/10 hover:border-forge-orange/50 text-white font-orbitron font-black uppercase text-xs tracking-[0.3em] transition-all w-full sm:w-auto backdrop-blur-sm bg-white/5 active:scale-95 group">
            <span className="group-hover:text-forge-orange transition-colors">System Specs</span>
          </button>
        </div>
      </main>

      {/* Feature Section: Lead-to-Qualified Engine */}
      <section className="py-40 border-y border-white/5 bg-forge-panel/40 relative overflow-hidden" id="engine">
        <div className="absolute top-0 right-0 w-96 h-96 bg-forge-orange/5 blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="font-mono text-[10px] text-forge-orange mb-6 tracking-[0.6em] uppercase flex items-center gap-3">
                <span className="w-10 h-[1px] bg-forge-orange"></span>
                Flagship Workflow
              </div>
              <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-10 leading-none">THE LEAD-TO-<br/><span className="text-forge-orange">QUALIFIED</span> ENGINE.</h2>
              <p className="text-gray-400 text-xl mb-12 leading-relaxed font-inter max-w-xl">
                The end of manual prospecting. Our core engine uses a cluster of autonomous agents to handle the entire top-of-funnel lifecycle.
              </p>
              <div className="grid gap-8">
                {[
                  { title: "DEEP RESEARCH", desc: "Agents crawl LinkedIn, Twitter, and company filings to build a 360° prospect profile." },
                  { title: "ICP SCORING", desc: "Automated qualification based on your 50+ custom data points and behavioral signals." },
                  { title: "AGENTIC OUTREACH", desc: "Not 'templates'. Personalized context-aware sequences that sound like you." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 flex-shrink-0 border border-white/10 flex items-center justify-center font-mono text-forge-orange group-hover:border-forge-orange/50 transition-colors">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-orbitron font-black text-sm tracking-widest mb-2 group-hover:text-forge-orange transition-colors">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-forge-orange/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="bg-black/80 border border-white/10 p-1 relative cyber-panel backdrop-blur-xl">
                <div className="bg-forge-dark p-10 border border-white/5 cyber-panel">
                  <div className="flex gap-2 mb-10">
                    <div className="w-3 h-3 rounded-full bg-forge-red/50 shadow-[0_0_10px_rgba(216,67,21,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  </div>
                  <div className="space-y-6 font-mono text-sm">
                    <div className="flex gap-3">
                      <span className="text-forge-orange">FORGE_SYS:</span>
                      <span className="text-gray-300">init_workflow("L2Q_ENGINE_v4")</span>
                    </div>
                    <div className="text-gray-500 flex gap-3">
                      <span>[0.1s]</span>
                      <span>Deploying Research Cluster...</span>
                    </div>
                    <div className="text-gray-500 flex gap-3">
                      <span>[0.4s]</span>
                      <span>Target: Fortune 500 / Tech / Series B</span>
                    </div>
                    <div className="text-green-400 flex gap-3 bg-green-400/5 p-2 border-l border-green-400/30">
                      <span>[OK]</span>
                      <span>Found 142 High-Intent Prospects</span>
                    </div>
                    <div className="text-gray-500 flex gap-3">
                      <span>[0.8s]</span>
                      <span>Synthesizing personality-matched outreach...</span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <span className="text-forge-orange">STATUS:</span>
                      <span className="px-2 py-0.5 bg-forge-orange/20 text-forge-orange text-[10px] animate-pulse">RUNNING_AUTONOMOUS</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl hidden md:block border-l-8 border-forge-orange cyber-panel">
                <div className="font-orbitron font-black text-black text-4xl mb-1">92%</div>
                <div className="text-gray-500 font-mono text-[9px] uppercase tracking-tighter">Accuracy in Qualification</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Productized Services */}
      <section className="max-w-7xl mx-auto px-6 py-40" id="solutions">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-8 uppercase leading-none">The <span className="text-forge-orange">Forge</span> Stack.</h2>
            <p className="text-gray-400 text-lg font-medium">Bespoke infrastructure for agencies, content creators, and founders who value their time at $1k+/hr.</p>
          </div>
          <div className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.4em] border-b border-white/10 pb-2">
            SELECT_PACKAGE_TO_PROCEED
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Solution 1 */}
          <div className="bg-forge-panel/20 border border-white/5 p-12 hover:border-forge-orange/30 transition-all group relative cyber-panel backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-gray-700 tracking-widest">ARCH // 01</div>
            <h3 className="text-2xl font-orbitron font-black mb-6 group-hover:text-forge-orange transition-colors">AUTONOMOUS OPS</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm font-medium h-24">
              Custom-coded agent clusters that handle lead triage, CRM management, and multi-step data processing.
            </p>
            <div className="space-y-4 mb-12">
              <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forge-orange/40 rounded-full"></span> 24/7 Monitoring
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forge-orange/40 rounded-full"></span> Custom API Integrations
              </div>
            </div>
            <div className="font-mono text-[11px] text-white border-t border-white/5 pt-8 uppercase tracking-[0.2em]">From $10k Setup</div>
          </div>

          {/* Solution 2 - Featured */}
          <div className="bg-forge-orange/5 border-2 border-forge-orange p-12 hover:bg-forge-orange/[0.08] transition-all group relative cyber-panel backdrop-blur-xl scale-105 shadow-[0_0_80px_rgba(255,87,34,0.15)] z-10">
            <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-forge-orange tracking-widest font-black">CORE // 02</div>
            <h3 className="text-2xl font-orbitron font-black mb-6 text-white group-hover:neon-text-orange transition-all">HYPER-SCALE CONTENT</h3>
            <p className="text-gray-300 mb-10 leading-relaxed text-sm font-medium h-24">
              Deploy a digital newsroom. Agents that research, fact-check, and write 100+ deep-dive articles per month.
            </p>
            <div className="space-y-4 mb-12">
              <div className="text-[10px] font-mono text-forge-orange uppercase flex items-center gap-2 font-black">
                <span className="w-1.5 h-1.5 bg-forge-orange rounded-full shadow-[0_0_8px_#FF5722]"></span> Full SEO Autopilot
              </div>
              <div className="text-[10px] font-mono text-forge-orange uppercase flex items-center gap-2 font-black">
                <span className="w-1.5 h-1.5 bg-forge-orange rounded-full shadow-[0_0_8px_#FF5722]"></span> Multi-Channel Distribution
              </div>
            </div>
            <div className="font-mono text-[11px] text-forge-orange border-t border-forge-orange/20 pt-8 uppercase tracking-[0.2em] font-black underline underline-offset-8 decoration-2">From $15k / Month</div>
          </div>

          {/* Solution 3 */}
          <div className="bg-forge-panel/20 border border-white/5 p-12 hover:border-forge-orange/30 transition-all group relative cyber-panel backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-gray-700 tracking-widest">COS // 03</div>
            <h3 className="text-2xl font-orbitron font-black mb-6 group-hover:text-forge-orange transition-colors text-white">FRACTIONAL AI CoS</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm font-medium h-24">
              A 90-day transformation of your entire business. We audit, build, and deploy your custom Forge OS.
            </p>
            <div className="space-y-4 mb-12">
              <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forge-orange/40 rounded-full"></span> Complete Systems Audit
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forge-orange/40 rounded-full"></span> Team Training & Handover
              </div>
            </div>
            <div className="font-mono text-[11px] text-white border-t border-white/5 pt-8 uppercase tracking-[0.2em]">Retainer: $30k+</div>
          </div>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="max-w-5xl mx-auto px-6 mb-40" id="audit">
        <div className="bg-gradient-to-br from-forge-orange to-forge-red p-12 md:p-24 text-center relative overflow-hidden cyber-panel shadow-[0_0_100px_rgba(255,87,34,0.2)]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
          <div className="relative z-10">
            <div className="font-mono text-[10px] text-white/60 mb-8 tracking-[0.8em] uppercase">Status: Limited Capacity</div>
            <h2 className="text-5xl md:text-8xl font-orbitron font-black mb-10 leading-none text-white uppercase">READY TO <br />FORGE?</h2>
            <p className="text-white/90 text-xl mb-14 max-w-xl mx-auto font-medium leading-relaxed">
              We only partner with 2 businesses per month to ensure architectural integrity. Secure your audit before the queue closes.
            </p>
            <button className="cyber-button px-16 py-8 bg-white text-black font-orbitron font-black uppercase text-sm tracking-[0.4em] hover:bg-black hover:text-white transition-all active:scale-95 shadow-2xl">
              INIT_AUDIT_PROTOCOL
            </button>
          </div>
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -rotate-45 translate-x-16 -translate-y-16"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-32 relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-forge-orange/5 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
           <div className="flex items-center gap-6 mb-16 group">
             <ForgeLogo className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500" />
             <span className="font-orbitron font-black text-2xl tracking-[0.5em] uppercase text-gray-500 group-hover:text-white transition-colors">FORGE AGENCY</span>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-32 mb-24 w-full max-w-4xl mx-auto text-center">
             <div>
               <h5 className="font-orbitron font-black text-[10px] text-white uppercase tracking-widest mb-6">Socials</h5>
               <div className="flex flex-col gap-4 font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                 <a href="#" className="hover:text-forge-orange transition-colors">Twitter / X</a>
                 <a href="#" className="hover:text-forge-orange transition-colors">LinkedIn</a>
               </div>
             </div>
             <div>
               <h5 className="font-orbitron font-black text-[10px] text-white uppercase tracking-widest mb-6">Legal</h5>
               <div className="flex flex-col gap-4 font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                 <a href="#" className="hover:text-forge-orange transition-colors">Privacy</a>
                 <a href="#" className="hover:text-forge-orange transition-colors">Terms</a>
               </div>
             </div>
             <div className="col-span-2">
                <h5 className="font-orbitron font-black text-[10px] text-white uppercase tracking-widest mb-6">Manifesto</h5>
                <p className="font-mono text-[9px] text-gray-700 uppercase leading-loose tracking-[0.2em]">
                  The future belongs to the automated. <br/>
                  Human creativity, architected by silicon. <br/>
                  Efficiency is the only true competitive advantage.
                </p>
             </div>
           </div>

           <div className="pt-20 border-t border-white/5 w-full text-center">
             <p className="text-[10px] text-gray-700 font-mono uppercase tracking-[0.6em] mb-4">EST. 2026 // ANDREW BROUGH // FORGE OS ECOSYSTEM</p>
             <p className="text-[9px] text-gray-800 font-mono tracking-[0.4em]">ALL RIGHTS RESERVED. CODE IS LAW. VERSION 4.0.1</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
