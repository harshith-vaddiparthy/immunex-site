import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-xl font-bold tracking-tight text-foreground', className)}>
            <span className="text-emerald-400">🧬</span> IMMUNEX
        </span>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-lg', className)}>🧬</span>
    )
}
