"use client";

import React, { useState } from "react";
import { ArrowRight, Loader2, Mail } from "lucide-react";

interface CSResult {
  healthScore: number;
  status: string;
  churnRisk: "Low" | "Medium" | "High" | "Critical";
  summary: string;
  interventions: string[];
}

const churnRiskStyles: Record<string, string> = {
  Low: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  High: "bg-orange-50 text-orange-700 border-orange-200",
  Critical: "bg-red-50 text-red-700 border-red-200",
};

const PLACEHOLDER = `Last login: 14 days ago. Support tickets opened: 3 this month (all unresolved). Feature usage dropped 80% since onboarding. Contract renewal in 45 days.`;

export default function CSAgentDemo() {
  const [customerData, setCustomerData] = useState("");
  const [result, setResult] = useState<CSResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerData.trim() || loading) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/cs-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerData }),
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

  const buildMailtoLink = (interventions: string[]) => {
    if (!interventions || interventions.length === 0) return "mailto:";
    const firstAction = interventions[0];
    const body = `Customer Intervention Required\n\nThe CS Agent has flagged a customer requiring immediate attention.\n\nRecommended first action:\n${firstAction}\n\nPlease review and take action as soon as possible.`;
    return `mailto:?subject=Customer%20Intervention%20Required&body=${encodeURIComponent(body)}`;
  };

  const riskStyle = result ? (churnRiskStyles[result.churnRisk] ?? churnRiskStyles.High) : "";

  return (
    <section className="max-w-6xl mx-auto px-6 mb-32" style={{ scrollMarginTop: "80px" }}>
      <p data-reveal className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-3">Autonomous Customer Success</p>
      <h2 data-reveal data-delay="100" className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">
        Your agent knows which customers are about to leave. Before they do.
      </h2>
      <p data-reveal data-delay="150" className="text-stone-500 font-light leading-relaxed mb-10 max-w-xl">
        Paste in any customer&apos;s recent activity and watch the agent assess health, calculate churn risk, and generate an intervention plan — instantly.
      </p>

      <div data-reveal data-delay="200" className="grid md:grid-cols-2 gap-8 items-start">

        {/* Input Panel */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-6">Customer Activity</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Paste customer activity:</label>
              <textarea
                rows={6}
                value={customerData}
                onChange={(e) => setCustomerData(e.target.value)}
                placeholder={PLACEHOLDER}
                disabled={loading}
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 disabled:opacity-50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !customerData.trim()}
              className="w-full bg-stone-900 text-white py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-stone-700 disabled:opacity-40 transition-colors"
            >
              {loading ? (
                <><Loader2 size={15} className="animate-spin" /> Running health check...</>
              ) : (
                <>Run Health Check <ArrowRight size={15} /></>
              )}
            </button>
          </form>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        </div>

        {/* Result Panel — Customer Health Card */}
        <div>
          {!result && !loading && (
            <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 flex items-center justify-center min-h-[200px]">
              <p className="text-stone-400 text-sm font-light text-center">Paste customer activity to generate a health assessment.</p>
            </div>
          )}

          {loading && (
            <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 flex items-center justify-center min-h-[200px]">
              <div className="flex items-center gap-3 text-stone-400">
                <Loader2 size={18} className="animate-spin" />
                <span className="text-sm font-medium">Running health check...</span>
              </div>
            </div>
          )}

          {result && (
            <div className="bg-white rounded-3xl border border-stone-200 p-8 space-y-6">
              {/* Header: Score + Status + Risk */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-6xl font-bold tracking-tight text-stone-900 leading-none mb-1">
                    {result.healthScore}
                  </div>
                  <div className="text-sm font-medium text-stone-500">{result.status}</div>
                </div>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${riskStyle}`}>
                  {result.churnRisk} Risk
                </span>
              </div>

              {/* Situation Summary */}
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] text-stone-400 uppercase mb-2">Situation Summary</p>
                <p className="text-sm text-stone-600 font-light leading-relaxed">{result.summary}</p>
              </div>

              {/* Intervention Plan */}
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] text-stone-400 uppercase mb-3">Intervention Plan</p>
                <div className="space-y-3">
                  {result.interventions?.map((action, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-xs font-mono font-semibold text-stone-400 mt-0.5 shrink-0">0{i + 1}</span>
                      <p className="text-sm text-stone-700 leading-relaxed">{action}</p>
                    </div>
                  ))}
                </div>

                {/* Send First Intervention Button */}
                {result.interventions && result.interventions.length > 0 && (
                  <a
                    href={buildMailtoLink(result.interventions)}
                    className="mt-4 inline-flex items-center gap-2 bg-stone-900 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-stone-700 transition-colors"
                  >
                    <Mail size={14} />
                    Send First Intervention →
                  </a>
                )}
              </div>

              {/* Deploy CTA */}
              <p className="text-sm text-stone-400 border-t border-stone-100 pt-4">
                Want this agent monitoring your customers?{" "}
                <a
                  href="#demo"
                  className="text-stone-900 font-medium hover:underline"
                >
                  Talk to us →
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
