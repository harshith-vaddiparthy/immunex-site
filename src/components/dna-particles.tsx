'use client'

import { useEffect, useRef } from 'react'

export function DNAParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationId: number
        let time = 0

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio
            canvas.height = canvas.offsetHeight * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        }
        resize()
        window.addEventListener('resize', resize)

        const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
        const numParticles = 180
        const w = () => canvas.offsetWidth
        const h = () => canvas.offsetHeight

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * 2000,
                y: Math.random() * 1200,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
            })
        }

        const draw = () => {
            ctx.clearRect(0, 0, w(), h())
            time += 0.003

            // DNA helix - warm brown/amber tones for light mode
            const centerX = w() * 0.65
            const amplitude = w() * 0.12
            const verticalSpacing = 8

            for (let y = -20; y < h() + 20; y += verticalSpacing) {
                const phase = y * 0.015 + time * 2
                const x1 = centerX + Math.sin(phase) * amplitude
                const x2 = centerX + Math.sin(phase + Math.PI) * amplitude
                const depth1 = (Math.cos(phase) + 1) / 2
                const depth2 = (Math.cos(phase + Math.PI) + 1) / 2

                // Strand 1 - warm brown
                ctx.beginPath()
                ctx.arc(x1, y, 1.5 + depth1 * 1.5, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(139, 90, 43, ${0.1 + depth1 * 0.3})`
                ctx.fill()

                // Strand 2 - warm amber
                ctx.beginPath()
                ctx.arc(x2, y, 1.5 + depth2 * 1.5, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(180, 120, 60, ${0.1 + depth2 * 0.3})`
                ctx.fill()

                // Connecting rungs
                if (y % (verticalSpacing * 4) < verticalSpacing) {
                    const rungOpacity = Math.min(depth1, depth2) * 0.15 + 0.03
                    ctx.beginPath()
                    ctx.moveTo(x1, y)
                    ctx.lineTo(x2, y)
                    ctx.strokeStyle = `rgba(100, 70, 30, ${rungOpacity})`
                    ctx.lineWidth = 0.5
                    ctx.stroke()
                }
            }

            // Floating particles - warm tones
            for (const p of particles) {
                p.x += p.vx
                p.y += p.vy
                p.vx += (Math.random() - 0.5) * 0.01
                p.vy += (Math.random() - 0.5) * 0.01
                p.vx *= 0.99
                p.vy *= 0.99

                if (p.x < 0) p.x = w()
                if (p.x > w()) p.x = 0
                if (p.y < 0) p.y = h()
                if (p.y > h()) p.y = 0

                const pulse = Math.sin(time * 2 + p.x * 0.01) * 0.3 + 0.7

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(100, 70, 40, ${p.opacity * pulse * 0.4})`
                ctx.fill()
            }

            // Connection lines - subtle warm
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 100) {
                        const lineOpacity = (1 - dist / 100) * 0.06
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(139, 90, 43, ${lineOpacity})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }

            animationId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="size-full"
            style={{ display: 'block' }}
        />
    )
}
