import HeroSection from '@/components/hero-section'
import PipelineSection from '@/components/pipeline-section'
import PathwaysSection from '@/components/pathways-section'
import ResultsSection from '@/components/results-section'
import DataSourcesSection from '@/components/data-sources-section'
import FooterSection from '@/components/footer-section'

export default function Home() {
    return (
        <>
            <HeroSection />
            <PipelineSection />
            <PathwaysSection />
            <ResultsSection />
            <DataSourcesSection />
            <FooterSection />
        </>
    )
}
