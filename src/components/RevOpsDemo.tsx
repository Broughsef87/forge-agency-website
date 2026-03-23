"use client";

import React, { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface OutreachStep {
  subject: string;
  body: string;
}

interface RevOpsResult {
  signal: string;
  sequence: OutreachStep[];
  confidence: number;
  justification: string;
}

export default function RevOpsDemo() {
  const [trigger, setTrigger] = useState("");
  const [result, setResult] = useState<RevOpsResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trigger.trim() || loading) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/revops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trigger }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 mb-32" style={{ scrollMarginTop: "80px" }}>
      <p data-reveal className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-3">Autonomous RevOps</p>
      <h2 data-reveal data-delay="100" className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">
        Know exactly when to reach out. And what to say.
      </h2>
      <p data-reveal data-delay="150" className="text-stone-500 font-light leading-relaxed mb-2 max-w-xl">
        This agent monitors market signals and builds personalized outreach sequences in seconds — without a human SDR.
      </p>
      <p data-reveal data-delay="160" className="text-xs text-stone-400 font-medium mb-10">This is your RevOps agent working.</p>

      <div data-reveal data-delay="200" className="grid md:grid-cols-2 gap-8 items-start">

        {/* Input Panel */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-6">Trigger Input</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Describe a company trigger event:</label>
              <textarea
                rows={4}
                value={trigger}
                onChange={(e) => setTrigger(e.target.value)}
                placeholder="Acme Corp just hired a new VP of Sales"
                disabled={loading}
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 disabled:opacity-50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !trigger.trim()}
              className="w-full bg-stone-900 text-white py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-stone-700 disabled:opacity-40 transition-colors"
            >
              {loading ? (
                <><Loader2 size={15} className="animate-spin" /> Analyzing signal...</>
              ) : (
                <>Generate Sequence <ArrowRight size={15} /></>
              )}
            </button>
          </form>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        </div>

        {/* Result Panel */}
        <div className="space-y-4">
          {!result && !loading && (
            <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 flex items-center justify-center min-h-[200px]">
              <p className="text-stone-400 text-sm font-light text-center">Enter a trigger event to generate your outreach sequence.</p>
            </div>
          )}

          {loading && (
            <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 flex items-center justify-center min-h-[200px]">
              <div className="flex items-center gap-3 text-stone-400">
                <Loader2 size={18} className="animate-spin" />
                <span className="text-sm font-medium">Analyzing signal...</span>
              </div>
            </div>
          )}

          {result && (
            <>
              {/* Signal Summary */}
              <div className="bg-white rounded-3xl border border-stone-200 p-6">
                <p className="text-xs font-semibold tracking-[0.15em] text-stone-400 uppercase mb-2">Signal Detected</p>
                <p className="text-stone-800 text-sm leading-relaxed">{result.signal}</p>
              </div>

              {/* Outreach Sequence */}
              <div className="space-y-3">
                {result.sequence?.map((step, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-stone-200 p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-semibold text-stone-400">0{i + 1}</span>
                      <p className="text-sm font-semibold text-stone-900 truncate">{step.subject}</p>
                    </div>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>

              {/* Confidence Badge */}
              <div className="bg-white rounded-2xl border border-stone-200 p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] text-stone-400 uppercase mb-1">Confidence Score</p>
                  <p className="text-sm text-stone-500 font-light">{result.justification}</p>
                </div>
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-stone-900 flex items-center justify-center ml-4">
                  <span className="text-white font-bold text-lg">{result.confidence}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
