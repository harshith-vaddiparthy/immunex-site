'use client'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
)
import React from 'react'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'

const menuItems = [
  { name: 'Architecture', href: '#architecture' },
  { name: 'Pathways', href: '#pathways' },
  { name: 'Data', href: '#data' },
  { name: 'Roadmap', href: '#roadmap' },
]

const dataSourceLogos = [
  { name: 'PubMed', count: '36M+' },
  { name: 'ChEMBL', count: '2.4M' },
  { name: 'DrugBank', count: '14K+' },
  { name: 'BindingDB', count: '2.9M' },
  { name: 'Reactome', count: '2.6K+' },
  { name: 'InnateDB', count: '32K+' },
  { name: 'FAERS', count: '20M+' },
  { name: 'KEGG', count: '500+' },
]

const agents = [
  { num: '01', name: 'Literature Scanner', desc: 'Continuously mines PubMed (36M+ articles) and bioRxiv. Extracts drug-pathway-effect triples using LLM-powered NLP with confidence scoring.', status: 'Operational' },
  { num: '02', name: 'Molecular Reasoner', desc: 'Graph neural network trained on ChEMBL (2.4M compounds). Predicts binding affinity between drugs and innate immune targets like NLRP3, STING, TLR4.', status: 'Training' },
  { num: '03', name: 'Knowledge Graph', desc: 'Heterogeneous biomedical graph linking drugs, targets, pathways, diseases from 9 sources. TransE/RotatE embeddings for link prediction.', status: 'Operational' },
  { num: '04', name: 'Hypothesis Generator', desc: 'LLM reasoning agent synthesizing multi-source evidence into ranked hypotheses with mechanistic explanations and confidence tiers.', status: 'Operational' },
  { num: '05', name: 'Safety Validator', desc: 'Cross-references candidates against FDA FAERS (20M+ adverse event reports), drug interactions, and contraindications before human review.', status: 'Operational' },
]

const pathways = [
  { name: 'TLR Signaling', targets: ['TLR2', 'TLR4', 'TLR7', 'TLR9', 'MyD88'], role: 'Pathogen recognition and inflammatory initiation' },
  { name: 'Inflammasome', targets: ['NLRP3', 'NLRC4', 'AIM2', 'Caspase-1'], role: 'IL-1\u03B2/IL-18 processing and pyroptosis' },
  { name: 'cGAS-STING', targets: ['cGAS', 'STING', 'TBK1', 'IRF3'], role: 'Cytosolic DNA sensing, type I interferon' },
  { name: 'NF-\u03BAB', targets: ['IKK\u03B2', 'RelA', 'NEMO'], role: 'Master inflammatory transcription regulator' },
  { name: 'JAK-STAT', targets: ['JAK1', 'JAK2', 'TYK2', 'STAT1'], role: 'Cytokine and interferon signal transduction' },
  { name: 'Trained Immunity', targets: ['mTOR', 'HIF-1\u03B1', 'KDM5'], role: 'Epigenetic reprogramming of innate cells' },
  { name: 'Complement', targets: ['C3', 'C5', 'Factor D', 'MASP-2'], role: 'Innate opsonization and inflammatory cascade' },
]

const milestones = [
  { period: 'Months 1-3', title: 'Foundation', items: ['Literature scanner at scale', 'Knowledge graph v1 from 4 databases', 'GNN baseline trained', 'Retrospective validation framework'] },
  { period: 'Months 4-6', title: 'Pipeline', items: ['Full 5-agent pipeline end-to-end', 'Retrospective recall on 50+ drugs', 'First novel candidate batch', 'Immunology research partnership'] },
  { period: 'Months 7-12', title: 'Discovery', items: ['Continuous autonomous operation', '3+ high-confidence novel candidates', '1+ candidate in wet-lab discussion', 'Paper submitted, company formed'] },
]

export default function Home() {
  const [menuState, setMenuState] = React.useState(false)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <header className="fixed z-50 w-full">
        <nav className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between py-4 lg:py-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-sm font-black text-zinc-950">IX</div>
              IMMUNEX
            </Link>

            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm text-zinc-400">
                {menuItems.map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="hover:text-zinc-100 transition-colors">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="https://github.com/harshith-vaddiparthy/immunex" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-md text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </a>
              <a href="https://encode.pillar.vc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-zinc-950 transition-colors">
                Apply to Fellowship <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <button onClick={() => setMenuState(!menuState)} className="lg:hidden p-2">
              {menuState ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-12 lg:pt-44 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Encode: AI for Science Fellowship - Pillar VC x ARIA
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
              Drug repurposing,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                systematized.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              IMMUNEX is an autonomous multi-agent AI system that identifies approved drugs
              for repurposing as innate immune modulators. Five specialized agents. Nine data sources.
              Evidence-graded hypotheses.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="https://github.com/harshith-vaddiparthy/immunex" target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-12 rounded-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200 pl-5 pr-3 text-base font-medium transition-colors">
                <GithubIcon className="mr-2 h-5 w-5" />
                View Source Code
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <a href="#architecture" className="inline-flex items-center h-12 rounded-full px-5 text-base text-zinc-300 hover:bg-zinc-800 transition-colors">
                Explore Architecture
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '78', label: 'PubMed articles scanned' },
                { value: '808', label: 'ChEMBL bioactivity records' },
                { value: '24', label: 'Innate immune targets' },
                { value: '7', label: 'Pathways covered' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-zinc-100">{stat.value}</div>
                  <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data source slider */}
      <section className="border-y border-zinc-800 bg-zinc-950 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-zinc-800 md:pr-6">
              <p className="text-end text-sm text-zinc-500">Integrating 9 biomedical databases</p>
            </div>
            <div className="relative py-4 md:w-[calc(100%-11rem)] overflow-hidden">
              <InfiniteSlider speed={30} speedOnHover={15} gap={48}>
                {dataSourceLogos.map((ds, i) => (
                  <div key={i} className="flex items-center gap-2 text-zinc-500 whitespace-nowrap">
                    <span className="font-semibold text-zinc-300">{ds.name}</span>
                    <span className="text-xs text-zinc-600">{ds.count}</span>
                  </div>
                ))}
              </InfiniteSlider>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-zinc-950" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-zinc-950" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-emerald-400 mb-4">THE PROBLEM</p>
              <h2 className="text-4xl font-bold tracking-tight">
                The innate immune system is an untapped therapeutic frontier
              </h2>
              <p className="mt-6 text-zinc-400 leading-relaxed">
                While adaptive immunity gave us vaccines and checkpoint inhibitors, precision modulation
                of innate immune pathways remains wide open. Hundreds of approved drugs have documented
                but unstudied effects on toll-like receptors, inflammasomes, trained immunity, and interferon signaling.
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                The data exists - scattered across 36 million PubMed articles, molecular databases, and
                clinical trial registries. No single researcher can hold this landscape in working memory.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '90%', label: 'of drugs fail clinical trials', color: 'text-red-400' },
                { value: '35%', label: 'of "transformative" FDA drugs are repurposed', color: 'text-emerald-400' },
                { value: '$2.6B', label: 'average cost to develop a new drug', color: 'text-amber-400' },
                { value: '36M+', label: 'PubMed articles with buried signal', color: 'text-blue-400' },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-zinc-500 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-24 px-6 lg:px-12 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium text-emerald-400 mb-4">MULTI-AGENT ARCHITECTURE</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Five agents. One pipeline.</h2>
          <p className="text-zinc-400 max-w-2xl mb-16">
            Each agent handles one stage of the repurposing pipeline. Evidence converges from
            multiple independent sources to produce confidence-graded hypotheses.
          </p>

          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 hover:border-zinc-700 transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-4 md:w-64 shrink-0">
                    <span className="text-3xl font-bold text-zinc-700 group-hover:text-emerald-500/50 transition-colors">{agent.num}</span>
                    <div>
                      <h3 className="font-semibold text-zinc-100">{agent.name}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${agent.status === 'Operational' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>
                        {agent.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{agent.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pipeline flow */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm">
            {['PubMed', '\u2192', 'Scanner', '\u2192', 'KG + GNN', '\u2192', 'Hypothesis', '\u2192', 'Safety', '\u2192'].map((item, i) => (
              <span key={i} className={item === '\u2192' ? 'text-zinc-600' : 'px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300'}>
                {item}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-lg bg-emerald-900/30 border border-emerald-700/30 text-emerald-400 font-medium">
              Ranked Candidates
            </span>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section id="pathways" className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium text-emerald-400 mb-4">TARGET PATHWAYS</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">24 targets across 7 innate immune pathways</h2>
          <p className="text-zinc-400 max-w-2xl mb-12">
            Selected for therapeutic relevance and druggability. Each pathway represents
            a distinct axis of innate immune modulation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pathways.map((p, i) => (
              <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-700 transition-colors">
                <h3 className="font-semibold text-zinc-100 text-lg">{p.name}</h3>
                <p className="text-xs text-zinc-500 mt-1 mb-4">{p.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.targets.map((t, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section id="data" className="py-24 px-6 lg:px-12 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium text-emerald-400 mb-4">DATA SOURCES</p>
          <h2 className="text-4xl font-bold tracking-tight mb-12">Nine biomedical databases. All public.</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'PubMed', count: '36M+ articles', type: 'Literature' },
              { name: 'ChEMBL', count: '2.4M compounds', type: 'Molecular' },
              { name: 'DrugBank', count: '14,000+ drugs', type: 'Drug Data' },
              { name: 'BindingDB', count: '2.9M data points', type: 'Binding' },
              { name: 'Reactome', count: '2,600+ pathways', type: 'Pathways' },
              { name: 'InnateDB', count: '32,000+ interactions', type: 'Immunity' },
              { name: 'ClinicalTrials.gov', count: '500K+ studies', type: 'Clinical' },
              { name: 'FDA FAERS', count: '20M+ reports', type: 'Safety' },
              { name: 'KEGG', count: '500+ pathways', type: 'Metabolic' },
            ].map((ds, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5">
                <p className="text-xs text-zinc-600 mb-1">{ds.type}</p>
                <p className="font-semibold text-zinc-200 text-sm">{ds.name}</p>
                <p className="text-lg font-bold text-zinc-100 mt-2">{ds.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARIA Alignment */}
      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-indigo-800/30 bg-gradient-to-br from-indigo-950/20 to-zinc-950 p-12 lg:p-16">
            <p className="text-sm font-medium text-indigo-400 mb-4">ARIA ALIGNMENT</p>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Sculpting Innate Immunity</h2>
            <p className="text-zinc-400 leading-relaxed max-w-3xl mb-6">
              IMMUNEX directly aligns with ARIA&apos;s Sculpting Innate Immunity opportunity space.
              By systematically identifying existing drugs that modulate innate immune pathways with precision,
              IMMUNEX supports the development of new therapeutic paradigms - including broad-spectrum
              antiviral resilience through the &pound;46M Sustained Viral Resilience programme.
            </p>
            <p className="text-zinc-500 leading-relaxed max-w-3xl">
              Drug repurposing means candidates come with established safety profiles and manufacturing -
              dramatically accelerating the path from computational hypothesis to clinical application.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-6 lg:px-12 bg-zinc-900/30">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium text-emerald-400 mb-4">12-MONTH ROADMAP</p>
          <h2 className="text-4xl font-bold tracking-tight mb-12">From prototype to discovery</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8">
                <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
                  {m.period}
                </span>
                <h3 className="text-2xl font-bold text-zinc-100 mt-4 mb-6">{m.title}</h3>
                <ul className="space-y-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm text-zinc-400">
                      <span className="text-emerald-500 mt-0.5 shrink-0">&#x2713;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder */}
      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-12">
            <p className="text-sm font-medium text-amber-400 mb-4">THE BUILDER</p>
            <h2 className="text-3xl font-bold">Harshith Vaddiparthy</h2>
            <p className="text-zinc-400 mt-1">AI Systems Architect</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {['Head of Growth, JustPaid (YC W23)', 'Forbes Technology Council', 'AI Agent Infrastructure'].map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700/50">{tag}</span>
              ))}
            </div>

            <p className="text-zinc-400 mt-6 max-w-2xl leading-relaxed">
              I build AI systems that work autonomously in production, not in demos. My expertise is
              in multi-agent orchestration, where specialized AI agents coordinate to solve problems
              no single model can handle alone. IMMUNEX applies this architecture to finding new
              treatments for human disease.
            </p>

            <div className="flex gap-6 mt-8">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/in/harshith-vaddiparthy' },
                { name: 'X / Twitter', href: 'https://x.com/harshith' },
                { name: 'GitHub', href: 'https://github.com/harshith-vaddiparthy' },
                { name: 'Website', href: 'https://harshith.com' },
              ].map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500 text-[10px] font-black text-zinc-950">IX</div>
            IMMUNEX &middot; Built for the{' '}
            <a href="https://encode.pillar.vc" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-200">
              Encode Fellowship
            </a>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/harshith-vaddiparthy/immunex" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 text-sm">GitHub</a>
            <a href="https://harshith.com/immunex" className="text-zinc-500 hover:text-zinc-200 text-sm">harshith.com/immunex</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
