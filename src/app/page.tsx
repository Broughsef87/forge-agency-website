import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F8F6] text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F8F8F6]/80 backdrop-blur-md z-50 border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-zinc-900 rounded-sm"></div>
            <span className="font-medium tracking-tight">FORGE AGENCY</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About Us</a>
          </div>
          <button className="text-sm font-medium px-4 py-2 bg-zinc-900 text-[#F8F8F6] rounded-full hover:bg-zinc-800 transition-colors">
            Book a Call
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-8 max-w-4xl">
            The ultimate intelligence layer for modern enterprises.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl mb-12">
            Supercharge your enterprise workflows with bespoke AI automation. 
            Deploy autonomous agent swarms, build productized workflows, 
            and remove the human bottleneck from your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-zinc-900 text-[#F8F8F6] rounded-full font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
              Explore Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Custom Agents Card */}
            <div className="group p-8 md:p-12 bg-white rounded-3xl border border-zinc-200 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h2 className="text-2xl font-medium tracking-tight mb-4">Bespoke AI Workflows</h2>
              <p className="text-zinc-500 font-light leading-relaxed mb-8">
                Custom-built agent swarms integrated directly into your operations. We build systems that let you scale revenue without scaling headcount.
              </p>
              <ul className="space-y-3 text-sm text-zinc-600 font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-900" /> Automated Onboarding</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-900" /> Data Processing Pipelines</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-900" /> Custom LLM Integrations</li>
              </ul>
            </div>

            {/* Productized Systems Card */}
            <div className="group p-8 md:p-12 bg-white rounded-3xl border border-zinc-200 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 bg-zinc-100 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-2xl font-medium tracking-tight mb-4">Productized Automation</h2>
              <p className="text-zinc-500 font-light leading-relaxed mb-8">
                Ready-to-deploy automated workflows that eliminate human bottlenecks immediately. Pay for outcomes, not just software.
              </p>
              <ul className="space-y-3 text-sm text-zinc-600 font-medium">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-900" /> CRM Automations</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-900" /> Intelligent Routing</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-900" /> Lead Gen Agents</li>
              </ul>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-zinc-900 rounded-sm"></div>
            <span>© 2026 FORGE AGENCY</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
