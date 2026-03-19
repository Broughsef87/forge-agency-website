"use client";

import AgencyLogo from '../components/AgencyLogo';

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] text-zinc-900 selection:bg-zinc-200 font-sans min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F9F9F9]/80 backdrop-blur-xl border-b border-zinc-200 px-8 py-5 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <AgencyLogo className="text-zinc-900 w-6 h-6" />
          <span className="font-medium tracking-wide text-sm text-zinc-900">FORGE AGENCY</span>
        </div>
        <div className="hidden md:flex gap-10 text-xs font-medium tracking-wide text-zinc-500">
          <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
          <a href="#infrastructure" className="hover:text-zinc-900 transition-colors">Infrastructure</a>
          <a href="#results" className="hover:text-zinc-900 transition-colors">Results</a>
        </div>
        <a href="#contact" className="px-5 py-2 bg-zinc-900 text-white text-xs font-medium rounded-full hover:bg-zinc-800 transition-colors">
          Book a Consultation
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-zinc-900 mb-8 max-w-4xl leading-tight">
          Remove the human <br className="hidden md:block"/>
          <span className="font-medium text-zinc-400">bottleneck.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mb-12">
          We build high-ticket AI automation and productized workflows for modern enterprises. Fast, reliable, and entirely autonomous.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="px-8 py-4 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/20">
            Partner with Forge
          </a>
          <a href="#capabilities" className="px-8 py-4 bg-white text-zinc-900 rounded-full text-sm font-medium border border-zinc-200 hover:bg-zinc-50 transition-all">
            View Capabilities
          </a>
        </div>
      </section>

      {/* Feature Grid - Industrial / Clean */}
      <section className="py-24 px-8 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">Agentic Workflows</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              Multi-agent systems designed to handle complex logic, research, and execution without requiring constant management.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">High-Ticket Automation</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              We productize your most expensive, time-consuming processes. Scale your output while drastically reducing overhead.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-zinc-900">24/7 Execution</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              Infrastructure that never sleeps. Your business operations run consistently, flawlessly, and invisibly in the background.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm font-light text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Forge Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}