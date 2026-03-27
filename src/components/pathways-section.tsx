'use client'
import { motion } from 'motion/react'

const pathways = [
    {
        name: 'TLR Signaling',
        targets: ['TLR2', 'TLR4', 'TLR7', 'TLR9'],
        relevance: 'Pathogen recognition and inflammatory initiation',
        leads: ['Imiquimod (TLR7)', 'Eritoran (TLR4)'],
        color: 'border-blue-500/30 bg-blue-500/5',
        dotColor: 'bg-blue-400',
    },
    {
        name: 'Inflammasome',
        targets: ['NLRP3', 'NLRC4', 'AIM2', 'Caspase-1'],
        relevance: 'IL-1β/IL-18 processing and pyroptosis',
        leads: ['Colchicine', 'Dapansutrile', 'Tranilast'],
        color: 'border-red-500/30 bg-red-500/5',
        dotColor: 'bg-red-400',
    },
    {
        name: 'cGAS-STING',
        targets: ['cGAS', 'STING', 'TBK1'],
        relevance: 'Cytosolic DNA sensing and type I interferon response',
        leads: ['Amlexanox (TBK1)', 'DMXAA'],
        color: 'border-purple-500/30 bg-purple-500/5',
        dotColor: 'bg-purple-400',
    },
    {
        name: 'NF-κB',
        targets: ['IKKβ', 'RelA', 'NEMO'],
        relevance: 'Master inflammatory transcription factor regulation',
        leads: ['Bortezomib', 'Sulfasalazine'],
        color: 'border-orange-500/30 bg-orange-500/5',
        dotColor: 'bg-orange-400',
    },
    {
        name: 'JAK-STAT',
        targets: ['JAK1', 'JAK2', 'TYK2', 'STAT1'],
        relevance: 'Cytokine and interferon signal transduction',
        leads: ['Tofacitinib', 'Ruxolitinib', 'Baricitinib'],
        color: 'border-cyan-500/30 bg-cyan-500/5',
        dotColor: 'bg-cyan-400',
    },
    {
        name: 'Trained Immunity',
        targets: ['mTOR', 'HIF-1α', 'KDM5'],
        relevance: 'Epigenetic reprogramming of myeloid cells',
        leads: ['Metformin (mTOR)', 'Rapamycin'],
        color: 'border-emerald-500/30 bg-emerald-500/5',
        dotColor: 'bg-emerald-400',
    },
    {
        name: 'Complement',
        targets: ['C3', 'C5', 'Factor D'],
        relevance: 'Innate opsonization and inflammatory cascading',
        leads: ['Eculizumab (C5)', 'Avacopan'],
        color: 'border-pink-500/30 bg-pink-500/5',
        dotColor: 'bg-pink-400',
    },
]

export default function PathwaysSection() {
    return (
        <section id="pathways" className="border-t border-border/50 bg-gradient-to-b from-background to-background py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">Target Coverage</p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">7 Pathways. 24 Targets.</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        IMMUNEX tracks validated drug targets across the core signaling pathways of the innate immune system - from pathogen recognition to epigenetic memory.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {pathways.map((pathway, index) => (
                        <motion.div
                            key={pathway.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className={`rounded-2xl border ${pathway.color} p-5 transition-all hover:scale-[1.02]`}
                        >
                            <div className="flex items-center gap-2">
                                <span className={`size-2 rounded-full ${pathway.dotColor}`} />
                                <h3 className="font-semibold">{pathway.name}</h3>
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground">{pathway.relevance}</p>
                            
                            <div className="mt-4">
                                <p className="text-xs font-medium text-muted-foreground mb-2">Targets</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {pathway.targets.map((target) => (
                                        <span key={target} className="rounded-md bg-foreground/5 px-2 py-0.5 text-xs font-mono">
                                            {target}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-3">
                                <p className="text-xs font-medium text-muted-foreground mb-1">Known repurposing leads</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {pathway.leads.map((lead) => (
                                        <span key={lead} className="text-xs text-emerald-400/80">
                                            {lead}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
