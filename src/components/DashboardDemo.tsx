'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Homepage hero demo — a faithful recreation of the salesperson-dashboard
 * per-rep view, populated from SYNTHETIC data only.
 *
 * HARD RULE: never wire this to live client data. No real rep names, no real
 * companies, no real commissions. Everything below is invented sample data
 * with round numbers — see the "Sample data" badge in the UI.
 */

type ProjectStatus = 'Contract Signed' | 'In Production' | 'Shipped' | 'Delivered';

interface SampleProject {
  name: string;
  building: string;
  status: ProjectStatus;
  estDelivery: string;
  actDelivery: string | null;
  contract: number;
  commission: number;
  commissionPaid: boolean;
}

interface SampleRep {
  name: string;
  initials: string;
  projects: SampleProject[];
}

const STATUS_STYLES: Record<ProjectStatus, string> = {
  'Contract Signed': 'bg-stone-100 text-stone-600 border-stone-200',
  'In Production': 'bg-amber-50 text-amber-700 border-amber-200',
  Shipped: 'bg-blue-50 text-blue-700 border-blue-200',
  Delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const REPS: SampleRep[] = [
  {
    name: 'Sam Rivera',
    initials: 'SR',
    projects: [
      {
        name: 'Summit Storage',
        building: '40×60 mini-storage, phase 2',
        status: 'Contract Signed',
        estDelivery: 'Jul 10',
        actDelivery: null,
        contract: 86000,
        commission: 2600,
        commissionPaid: false,
      },
      {
        name: 'Cedar Valley Farms',
        building: 'Equipment barn, 50×80',
        status: 'In Production',
        estDelivery: 'Jun 24',
        actDelivery: null,
        contract: 54000,
        commission: 1600,
        commissionPaid: false,
      },
      {
        name: 'Hilltop RV & Boat',
        building: 'Storage canopy, 30×100',
        status: 'Shipped',
        estDelivery: 'Jun 12',
        actDelivery: 'Jun 14',
        contract: 38000,
        commission: 1100,
        commissionPaid: false,
      },
      {
        name: 'Blue Ridge Equipment',
        building: 'Warehouse add-on, 60×120',
        status: 'Delivered',
        estDelivery: 'May 20',
        actDelivery: 'May 19',
        contract: 120000,
        commission: 3600,
        commissionPaid: true,
      },
    ],
  },
  {
    name: 'Jordan Blake',
    initials: 'JB',
    projects: [
      {
        name: 'Lakeside Self-Store',
        building: 'Phase 1, 4 buildings',
        status: 'In Production',
        estDelivery: 'Jul 02',
        actDelivery: null,
        contract: 92000,
        commission: 2800,
        commissionPaid: false,
      },
      {
        name: 'Prairie Ag Supply',
        building: 'Open-front shed, 40×100',
        status: 'Contract Signed',
        estDelivery: 'Aug 08',
        actDelivery: null,
        contract: 41000,
        commission: 1200,
        commissionPaid: false,
      },
      {
        name: 'Ridgeline Contracting',
        building: 'Shop building, 50×60',
        status: 'Delivered',
        estDelivery: 'May 30',
        actDelivery: 'Jun 02',
        contract: 67000,
        commission: 2000,
        commissionPaid: true,
      },
    ],
  },
];

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`;

export default function DashboardDemo() {
  const [repIdx, setRepIdx] = useState(0);
  const [openRow, setOpenRow] = useState<number | null>(null);
  const rep = REPS[repIdx];

  const pending = rep.projects.filter((p) => !p.commissionPaid).reduce((s, p) => s + p.commission, 0);
  const paid = rep.projects.filter((p) => p.commissionPaid).reduce((s, p) => s + p.commission, 0);
  const active = rep.projects.filter((p) => p.status !== 'Delivered').length;

  const switchRep = (idx: number) => {
    setRepIdx(idx);
    setOpenRow(null);
  };

  return (
    <section id="demo" className="max-w-6xl mx-auto px-6 mb-32" style={{ scrollMarginTop: '80px' }}>
      {/* Header */}
      <div className="max-w-2xl mb-10">
        <div className="flex items-center gap-3 mb-3">
          <p data-reveal className="font-mono text-[10px] tracking-[0.3em] text-stone-400 uppercase">
            Live Demo — The Salesperson Dashboard
          </p>
        </div>
        <h2 data-reveal data-delay="100" className="font-display text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4 leading-[1.05]">
          This is what your sales team sees.
        </h2>
        <p data-reveal data-delay="150" className="text-stone-500 font-light leading-relaxed">
          Only their own jobs, pulled live from the spreadsheet you already use. No new software, no double entry. We built this for{' '}
          <Link href="/insights/roi-salesperson-dashboard" className="text-stone-700 underline underline-offset-2 hover:text-[#E8572A] transition-colors">
            ROI Metal Buildings
          </Link>
          {' '}— poke around the sample below.
        </p>
      </div>

      {/* Dashboard window */}
      <div data-reveal data-delay="200" className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-stone-100 bg-stone-50/60">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.2em] text-stone-400 uppercase">Rep view · synced from master sheet</span>
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase font-semibold bg-stone-900 text-white px-2 py-0.5 rounded-full">Sample data</span>
        </div>

        <div className="p-6 md:p-8">
          {/* Rep switcher */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              {REPS.map((r, i) => (
                <button
                  key={r.name}
                  onClick={() => switchRep(i)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    i === repIdx
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-700'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    i === repIdx ? 'bg-[#E8572A] text-white' : 'bg-stone-300 text-stone-600'
                  }`}>
                    {r.initials}
                  </span>
                  {r.name}
                </button>
              ))}
            </div>
            <p className="font-mono text-[10px] tracking-[0.15em] text-stone-400 uppercase">
              Switch reps — the books don&apos;t overlap
            </p>
          </div>

          {/* Stat tiles */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
            <div className="bg-stone-50 rounded-2xl p-4 md:p-5 border border-stone-100">
              <div className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-900">{active}</div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-stone-400 uppercase mt-1">Active projects</div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 md:p-5 border border-stone-100">
              <div className="font-display text-2xl md:text-3xl font-medium tracking-tight text-[#E8572A]">{fmt(pending)}</div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-stone-400 uppercase mt-1">Commission pending</div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 md:p-5 border border-stone-100">
              <div className="font-display text-2xl md:text-3xl font-medium tracking-tight text-stone-900">{fmt(paid)}</div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] text-stone-400 uppercase mt-1">Commission paid</div>
            </div>
          </div>

          {/* Project table */}
          <div className="border border-stone-100 rounded-2xl overflow-hidden">
            {/* Table head (desktop) */}
            <div className="hidden md:grid grid-cols-[2fr_1fr_0.7fr_0.7fr_0.8fr] gap-4 px-5 py-3 bg-stone-50/60 border-b border-stone-100">
              {['Project', 'Status', 'Est. delivery', 'Act. delivery', 'Commission'].map((h) => (
                <span key={h} className="font-mono text-[9px] tracking-[0.2em] text-stone-400 uppercase">{h}</span>
              ))}
            </div>

            {rep.projects.map((p, i) => (
              <div key={p.name} className={i !== rep.projects.length - 1 ? 'border-b border-stone-100' : ''}>
                <button
                  onClick={() => setOpenRow(openRow === i ? null : i)}
                  className="w-full grid grid-cols-2 md:grid-cols-[2fr_1fr_0.7fr_0.7fr_0.8fr] gap-2 md:gap-4 px-5 py-4 text-left items-center hover:bg-stone-50/60 transition-colors"
                >
                  <div>
                    <div className="text-sm font-medium text-stone-900">{p.name}</div>
                    <div className="text-xs text-stone-400 font-light">{p.building}</div>
                  </div>
                  <div>
                    <span className={`inline-block text-[11px] font-medium px-2.5 py-1 rounded-full border ${STATUS_STYLES[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="hidden md:block font-mono text-xs text-stone-500">{p.estDelivery}</div>
                  <div className="hidden md:block font-mono text-xs">
                    {p.actDelivery ? <span className="text-stone-900 font-semibold">{p.actDelivery}</span> : <span className="text-stone-300">—</span>}
                  </div>
                  <div className="hidden md:flex items-center gap-2 font-mono text-xs text-stone-900">
                    {fmt(p.commission)}
                    <span className={`text-[9px] tracking-wider uppercase px-1.5 py-0.5 rounded ${p.commissionPaid ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                      {p.commissionPaid ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                </button>

                {/* Expanded detail */}
                {openRow === i && (
                  <div className="px-5 pb-4 grid md:grid-cols-4 gap-3 bg-stone-50/40">
                    <div className="bg-white rounded-xl border border-stone-100 p-3">
                      <div className="font-mono text-[9px] tracking-[0.2em] text-stone-400 uppercase mb-1">Contract value</div>
                      <div className="text-sm font-semibold text-stone-900">{fmt(p.contract)}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-stone-100 p-3">
                      <div className="font-mono text-[9px] tracking-[0.2em] text-stone-400 uppercase mb-1">Est. delivery (locked)</div>
                      <div className="text-sm font-semibold text-stone-900">{p.estDelivery}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-stone-100 p-3">
                      <div className="font-mono text-[9px] tracking-[0.2em] text-stone-400 uppercase mb-1">Act. delivery (live)</div>
                      <div className="text-sm font-semibold text-stone-900">{p.actDelivery ?? 'Not yet shipped'}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-stone-100 p-3">
                      <div className="font-mono text-[9px] tracking-[0.2em] text-stone-400 uppercase mb-1">Your commission</div>
                      <div className="text-sm font-semibold text-stone-900">
                        {fmt(p.commission)} <span className="text-xs font-normal text-stone-400">· {p.commissionPaid ? 'paid' : 'pays on delivery'}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="font-mono text-[10px] tracking-wider text-stone-400 mt-4 leading-relaxed">
            Estimated dates lock in once. Actuals update from the master sheet — within 15 minutes. The ops manager never stops working in her spreadsheet.
          </p>
        </div>
      </div>
    </section>
  );
}
