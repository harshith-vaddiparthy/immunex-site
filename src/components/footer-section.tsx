import Link from 'next/link'

export default function FooterSection() {
    return (
        <footer className="border-t border-border/50 bg-background py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div>
                        <span className="text-lg font-bold">🧬 IMMUNEX</span>
                        <p className="mt-1 text-sm text-muted-foreground">Autonomous AI for Drug Repurposing in Innate Immunity</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link href="https://github.com/harshith-vaddiparthy/immunex" target="_blank" className="hover:text-foreground transition-colors">
                            GitHub
                        </Link>
                        <Link href="https://harshith.com" target="_blank" className="hover:text-foreground transition-colors">
                            Harshith Vaddiparthy
                        </Link>
                        <span>MIT License</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
