'use client'
import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'

const sources = [
    { name: 'PubMed / MEDLINE', records: '36M+ articles', type: 'Biomedical literature', url: 'https://pubmed.ncbi.nlm.nih.gov/', usage: 'Literature scanning, evidence extraction' },
    { name: 'ChEMBL', records: '2.4M compounds', type: 'Drug bioactivity', url: 'https://www.ebi.ac.uk/chembl/', usage: 'Target binding data, selectivity profiles' },
    { name: 'BindingDB', records: '2.9M data points', type: 'Binding affinity', url: 'https://www.bindingdb.org/', usage: 'Molecular reasoner training data' },
    { name: 'DrugBank', records: '14,000+ drugs', type: 'Drug encyclopedia', url: 'https://go.drugbank.com/', usage: 'Drug metadata, known targets, interactions' },
    { name: 'Reactome', records: '2,600+ pathways', type: 'Biological pathways', url: 'https://reactome.org/', usage: 'Pathway membership, signaling cascades' },
    { name: 'InnateDB', records: '32,000+ interactions', type: 'Innate immunity', url: 'https://www.innatedb.com/', usage: 'Curated innate immune interactions' },
    { name: 'KEGG', records: '500+ pathways', type: 'Metabolic/signaling', url: 'https://www.genome.jp/kegg/', usage: 'Cross-reference pathway mapping' },
    { name: 'ClinicalTrials.gov', records: '500K+ studies', type: 'Clinical trials', url: 'https://clinicaltrials.gov/', usage: 'Validation of repurposing candidates' },
    { name: 'FDA FAERS', records: '20M+ reports', type: 'Adverse events', url: 'https://open.fda.gov/data/faers/', usage: 'Safety validation layer' },
]

const references = [
    {
        authors: 'Pushpakom, S. et al.',
        title: 'Drug repurposing: progress, challenges and recommendations.',
        journal: 'Nature Reviews Drug Discovery',
        year: '2019',
        doi: '10.1038/nrd.2018.168',
    },
    {
        authors: 'Stokes, J.M. et al.',
        title: 'A Deep Learning Approach to Antibiotic Discovery.',
        journal: 'Cell',
        year: '2020',
        doi: '10.1016/j.cell.2020.01.021',
    },
    {
        authors: 'Netea, M.G. et al.',
        title: 'Trained immunity: a program of innate immune memory in health and disease.',
        journal: 'Science',
        year: '2016',
        doi: '10.1126/science.aaf1098',
    },
    {
        authors: 'Zeng, X. et al.',
        title: 'Network-based prediction of drug-target interactions using an arbitrary-order proximity embedded deep forest.',
        journal: 'Bioinformatics',
        year: '2020',
        doi: '10.1093/bioinformatics/btaa010',
    },
    {
        authors: 'Li, Y. et al.',
        title: 'A survey of current trends in computational drug repositioning.',
        journal: 'Briefings in Bioinformatics',
        year: '2016',
        doi: '10.1093/bib/bbv020',
    },
]

export default function DataSourcesSection() {
    return (
        <section id="data" className="border-t border-border/50 bg-gradient-to-b from-background to-background py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">Data Foundation</p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">9 Integrated Sources</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        All primary data sources are publicly available or accessible under academic license. No proprietary datasets required.
                    </p>
                </motion.div>

                <div className="mt-16 overflow-hidden rounded-2xl border border-border/50">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border/50 bg-foreground/[0.02]">
                                    <th className="px-6 py-4 text-left font-medium text-muted-foreground">Source</th>
                                    <th className="px-6 py-4 text-left font-medium text-muted-foreground">Records</th>
                                    <th className="px-6 py-4 text-left font-medium text-muted-foreground hidden md:table-cell">Type</th>
                                    <th className="px-6 py-4 text-left font-medium text-muted-foreground hidden lg:table-cell">Usage in Pipeline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sources.map((source, index) => (
                                    <motion.tr
                                        key={source.name}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="border-b border-border/30 last:border-0"
                                    >
                                        <td className="px-6 py-4">
                                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-medium text-foreground hover:text-emerald-400 transition-colors">
                                                {source.name}
                                                <ExternalLink className="size-3 text-muted-foreground" />
                                            </a>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{source.records}</td>
                                        <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{source.type}</td>
                                        <td className="px-6 py-4 text-muted-foreground hidden lg:table-cell">{source.usage}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* References */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24"
                >
                    <h3 className="text-2xl font-bold">References</h3>
                    <div className="mt-8 space-y-4">
                        {references.map((ref, index) => (
                            <div key={index} className="flex gap-4 text-sm">
                                <span className="font-mono text-xs text-muted-foreground mt-0.5">[{index + 1}]</span>
                                <div>
                                    <span className="text-muted-foreground">{ref.authors} </span>
                                    <span className="text-foreground">&ldquo;{ref.title}&rdquo; </span>
                                    <span className="italic text-muted-foreground">{ref.journal}</span>
                                    <span className="text-muted-foreground"> ({ref.year}). </span>
                                    <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                                        DOI: {ref.doi}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
