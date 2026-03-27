'use client'
import { motion } from 'motion/react'
import { Search, Microscope, Share2, Lightbulb, ShieldCheck, ArrowRight } from 'lucide-react'

const agents = [
    {
        number: '01',
        name: 'Literature Scanner',
        icon: Search,
        description: 'Mines PubMed (36M+ articles) and bioRxiv preprints for drug-innate immunity associations using LLM-powered NLP extraction.',
        input: 'PubMed queries across 7 pathway families',
        output: 'Structured drug-pathway-evidence triples',
        status: 'Operational',
        color: 'from-blue-500/20 to-blue-600/5',
        borderColor: 'border-blue-500/30',
        iconColor: 'text-blue-400',
    },
    {
        number: '02',
        name: 'Molecular Reasoner',
        icon: Microscope,
        description: 'GNN-based prediction of drug-target binding affinity for innate immune targets using Morgan fingerprints and ESM-2 protein embeddings.',
        input: 'SMILES structures + protein sequences',
        output: 'Binding probability scores per target',
        status: 'Training',
        color: 'from-purple-500/20 to-purple-600/5',
        borderColor: 'border-purple-500/30',
        iconColor: 'text-purple-400',
    },
    {
        number: '03',
        name: 'Knowledge Graph',
        icon: Share2,
        description: 'Constructs a heterogeneous biomedical graph from 9 data sources with 6 node types and 12 edge types. Link prediction via TransE/RotatE embeddings.',
        input: 'Multi-source relational data',
        output: 'Typed graph with novel associations',
        status: 'Operational',
        color: 'from-emerald-500/20 to-emerald-600/5',
        borderColor: 'border-emerald-500/30',
        iconColor: 'text-emerald-400',
    },
    {
        number: '04',
        name: 'Hypothesis Generator',
        icon: Lightbulb,
        description: 'LLM-based evidence synthesis combining literature, molecular, and graph signals into ranked hypotheses with confidence tiers (A/B/C).',
        input: 'Multi-agent evidence streams',
        output: 'Ranked hypotheses with mechanistic rationale',
        status: 'Operational',
        color: 'from-amber-500/20 to-amber-600/5',
        borderColor: 'border-amber-500/30',
        iconColor: 'text-amber-400',
    },
    {
        number: '05',
        name: 'Safety Validator',
        icon: ShieldCheck,
        description: 'Cross-references every candidate against FDA FAERS (20M+ adverse event reports) and known drug-drug interactions for risk stratification.',
        input: 'Candidate drugs from hypothesis generator',
        output: 'Risk-stratified safety profiles',
        status: 'Operational',
        color: 'from-red-500/20 to-red-600/5',
        borderColor: 'border-red-500/30',
        iconColor: 'text-red-400',
    },
]

export default function PipelineSection() {
    return (
        <section id="pipeline" className="bg-background py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">Multi-Agent Pipeline</p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Five Agents. One Mission.</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        Each agent specializes in a distinct stage of the repurposing pipeline - from literature mining to safety validation. They communicate, build on each other&apos;s outputs, and produce evidence-graded candidates.
                    </p>
                </motion.div>

                {/* Flow diagram */}
                <div className="mt-16 hidden items-center justify-center gap-2 text-sm text-muted-foreground lg:flex">
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1">Literature</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1">Molecular</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">Graph</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1">Hypothesis</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1">Safety</span>
                    <ArrowRight className="size-4" />
                    <span className="rounded-full border border-foreground/20 bg-foreground/5 px-3 py-1 font-medium text-foreground">Ranked Candidates</span>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={agent.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl border ${agent.borderColor} bg-gradient-to-b ${agent.color} p-6 transition-all hover:scale-[1.02]`}
                        >
                            <div className="flex items-start justify-between">
                                <div className={`flex size-10 items-center justify-center rounded-xl border ${agent.borderColor} bg-background/50`}>
                                    <agent.icon className={`size-5 ${agent.iconColor}`} />
                                </div>
                                <span className="text-xs font-mono text-muted-foreground">{agent.number}</span>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{agent.name}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                            <div className="mt-4 space-y-2 text-xs">
                                <div className="flex gap-2">
                                    <span className="font-medium text-muted-foreground">In:</span>
                                    <span className="text-muted-foreground/80">{agent.input}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-medium text-muted-foreground">Out:</span>
                                    <span className="text-muted-foreground/80">{agent.output}</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    agent.status === 'Operational' 
                                        ? 'bg-emerald-500/10 text-emerald-400' 
                                        : 'bg-amber-500/10 text-amber-400'
                                }`}>
                                    <span className={`size-1.5 rounded-full ${
                                        agent.status === 'Operational' ? 'bg-emerald-400' : 'bg-amber-400'
                                    }`} />
                                    {agent.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Summary card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-b from-foreground/5 to-transparent p-6"
                    >
                        <h3 className="text-lg font-semibold">Scan → Predict → Synthesize → Validate</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            The pipeline is greater than the sum of its parts. Each agent is focused, testable, and produces structured output that feeds the next stage. The result: ranked, evidence-graded drug repurposing hypotheses.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-emerald-400">4/5</div>
                                <div className="text-xs text-muted-foreground">Agents operational</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-emerald-400">A/B/C</div>
                                <div className="text-xs text-muted-foreground">Confidence tiers</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
