'use client'
import { motion } from 'motion/react'

const stats = [
    { label: 'PubMed articles scanned', value: '78', sublabel: 'across 7 pathway families' },
    { label: 'ChEMBL bioactivity records', value: '808', sublabel: 'for 11 innate immune targets' },
    { label: 'Protein-protein interactions', value: '28', sublabel: 'with PMID citations' },
    { label: 'Reference drugs validated', value: '15', sublabel: 'literature-confirmed' },
    { label: 'Reactome participants', value: '2,369', sublabel: '7 pathway families' },
    { label: 'Knowledge graph nodes', value: '3,200+', sublabel: '6 entity types' },
    { label: 'Knowledge graph edges', value: '8,400+', sublabel: '12 relation types' },
    { label: 'Innate immune targets', value: '24', sublabel: 'curated from literature' },
]

const methodology = [
    {
        step: '01',
        title: 'Literature Scan',
        description: 'Query PubMed with pathway-specific MeSH terms. Extract drug-target-effect triples using few-shot LLM prompting with biomedical context.',
    },
    {
        step: '02',
        title: 'Molecular Prediction',
        description: 'For drugs without binding data, predict affinity via a GNN trained on ChEMBL and BindingDB. Input: Morgan fingerprints + ESM-2 protein embeddings.',
    },
    {
        step: '03',
        title: 'Graph Reasoning',
        description: 'Knowledge graph link prediction identifies novel drug-target associations not present in any single database. TransE embeddings capture relational semantics.',
    },
    {
        step: '04',
        title: 'Evidence Synthesis',
        description: 'LLM integrates signals from all three upstream agents. Produces ranked hypotheses graded A (strong), B (moderate), or C (computational only).',
    },
    {
        step: '05',
        title: 'Safety Screening',
        description: 'Every candidate checked against FAERS for adverse event frequency, severity, and known drug-drug interactions. High-risk candidates flagged, not discarded.',
    },
]

export default function ResultsSection() {
    return (
        <section id="results" className="border-t border-border/50 bg-background py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">Current Output</p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Real Data. Real Results.</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Pipeline output from processing real biomedical databases - not synthetic benchmarks.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="rounded-2xl border border-border/50 bg-foreground/[0.02] p-5 text-center"
                        >
                            <div className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</div>
                            <div className="mt-1 text-sm font-medium text-foreground/80">{stat.label}</div>
                            <div className="mt-0.5 text-xs text-muted-foreground">{stat.sublabel}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Methodology */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-32 text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">Methodology</p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">How It Works</h2>
                </motion.div>

                <div className="mt-16 space-y-0">
                    {methodology.map((item, index) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex gap-6 border-l border-border/50 py-8 pl-8 relative"
                        >
                            <div className="absolute -left-2 top-8 size-4 rounded-full border-2 border-emerald-400 bg-background" />
                            <div>
                                <span className="text-xs font-mono text-emerald-400">Step {item.step}</span>
                                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                                <p className="mt-2 max-w-2xl text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
