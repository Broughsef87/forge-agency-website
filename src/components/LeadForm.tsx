"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getSupabase } from "@/lib/supabase";

interface LeadFormProps {
  onClose?: () => void;
  conversation?: string;
}

export default function LeadForm({ onClose, conversation }: LeadFormProps) {
  const [form, setForm] = useState({ name: "", email: "", company: "", useCase: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await getSupabase().from("leads").insert({
      name: form.name,
      email: form.email,
      company: form.company,
      use_case: form.useCase,
      source: "lead-gen-agent",
      ...(conversation ? { conversation } : {}),
    });

    if (error) {
      console.error("Failed to save lead:", error.message);
    } else {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      if (typeof window !== 'undefined' && typeof w.gtag === 'function') {
        w.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: form.company,
        })
      }
    }

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-stone-200 p-10 text-center flex flex-col items-center justify-center" style={{ minHeight: "300px" }}>
        <CheckCircle size={40} className="mb-4 text-stone-900" />
        <h3 className="text-xl font-medium tracking-tight text-stone-900 mb-2">You&apos;re on the list.</h3>
        <p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs mb-6">
          Andrew will reach out within one business day to confirm your strategy call.
        </p>
        <a
          href="https://calendly.com/broughsef/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-stone-700 transition-colors"
        >
          Book your strategy call now <ArrowRight size={15} />
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-stone-900 p-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-1">Next Step</p>
          <h3 className="text-xl font-medium tracking-tight text-stone-900">Book Your Strategy Call</h3>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-stone-400 hover:text-stone-900 transition-colors text-sm">
            ✕
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">Name</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jane Smith"
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jane@company.com"
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">Company</label>
          <input
            required
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Acme Industries"
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">Use Case</label>
          <textarea
            rows={3}
            value={form.useCase}
            onChange={(e) => setForm({ ...form, useCase: e.target.value })}
            placeholder="Briefly describe what you want to automate..."
            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-stone-900 text-white py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-stone-700 disabled:opacity-50 transition-colors"
        >
          {loading ? "Submitting..." : <>Confirm Call Request <ArrowRight size={15} /></>}
        </button>
      </form>
    </div>
  );
}
