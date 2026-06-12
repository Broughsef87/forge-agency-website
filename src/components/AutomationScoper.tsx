'use client';

import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const BOOKING_URL = 'https://calendar.app.google/kmAtXQsU4zL9m6Z96';

const EXAMPLE_CHIPS = [
  'My crew keeps asking where their jobs are.',
  "I'm still quoting by hand.",
  'Invoices go out late.',
  'Leads sit in my inbox over the weekend.',
];

export default function AutomationScoper() {
  const [bottleneck, setBottleneck] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const runScoper = async (text: string) => {
    if (!text.trim() || loading) return;
    setLoading(true);
    setError('');
    setResponse('');
    setDone(false);

    try {
      const res = await fetch('/api/scoper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bottleneck: text }),
      });

      // Non-streaming error (e.g. 503 quota)
      if (!res.ok || !res.body || res.headers.get('Content-Type')?.includes('application/json')) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong. Try again.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      while (true) {
        const { done: finished, value } = await reader.read();
        if (finished) break;
        acc += decoder.decode(value, { stream: true });
        setResponse(acc);
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChip = (chip: string) => {
    setBottleneck(chip);
    runScoper(chip);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runScoper(bottleneck);
  };

  const reset = () => {
    setBottleneck('');
    setResponse('');
    setDone(false);
    setError('');
  };

  return (
    <section className="max-w-6xl mx-auto px-6 mb-32" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-2xl mb-10">
        <p data-reveal className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-3">
          Demo — The Automation Scoper
        </p>
        <h2 data-reveal data-delay="100" className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4 leading-[1.05]">
          Tell us what&apos;s eating your week.
        </h2>
        <p data-reveal data-delay="150" className="text-stone-500 font-light leading-relaxed">
          Describe the bottleneck in plain English. The scoper tells you what we&apos;d automate and what it roughly pays back — in about ten seconds.
        </p>
      </div>

      <div data-reveal data-delay="200" className="grid md:grid-cols-2 gap-8 items-start">
        {/* Input panel */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8">
          <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-5">Your bottleneck</p>

          {/* Example chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            {EXAMPLE_CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => handleChip(chip)}
                disabled={loading}
                className="text-xs font-medium text-stone-600 bg-stone-100 hover:bg-[#FFF4EC] hover:text-[#E8572A] px-3 py-1.5 rounded-full transition-colors disabled:opacity-40"
              >
                {chip}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              rows={4}
              value={bottleneck}
              onChange={(e) => setBottleneck(e.target.value)}
              placeholder="e.g. Every Friday I spend half a day figuring out who gets paid commission on what…"
              disabled={loading}
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 disabled:opacity-50 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={loading || !bottleneck.trim()}
              className="w-full bg-stone-900 text-white py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-stone-700 disabled:opacity-40 transition-colors"
            >
              {loading ? (
                <><Loader2 size={15} className="animate-spin" /> Scoping…</>
              ) : (
                <>Scope it <ArrowRight size={15} /></>
              )}
            </button>
          </form>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        </div>

        {/* Output panel */}
        <div>
          {!response && !loading && (
            <div className="bg-stone-50 rounded-3xl border border-stone-200 p-8 flex items-center justify-center min-h-[220px]">
              <p className="text-stone-400 text-sm font-light text-center max-w-xs">
                Pick an example or describe your own bottleneck — you&apos;ll get a concrete read on what we&apos;d automate.
              </p>
            </div>
          )}

          {(loading || response) && (
            <div className="bg-white rounded-3xl border border-stone-200 p-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase mb-4">What we&apos;d build</p>
              <div className="text-sm text-stone-700 font-light leading-relaxed whitespace-pre-wrap">
                {response}
                {loading && <span className="inline-block w-1.5 h-3.5 bg-[#E8572A] ml-0.5 align-middle animate-pulse" />}
              </div>

              {done && (
                <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap items-center gap-3">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8572A] text-white rounded-full font-medium text-sm hover:bg-[#FF7A3F] hover:shadow-[0_0_30px_-5px_rgba(232,87,42,0.5)] transition-all duration-300"
                  >
                    Book a free 30-minute call
                    <ArrowRight size={15} />
                  </a>
                  <button
                    onClick={reset}
                    className="text-sm font-medium text-stone-400 hover:text-stone-900 transition-colors"
                  >
                    Try another bottleneck
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
