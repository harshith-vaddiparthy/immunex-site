'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface InfiniteSliderProps {
  children: ReactNode
  speed?: number
  speedOnHover?: number
  gap?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  speed = 100,
  speedOnHover,
  gap = 16,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const inner = el.querySelector('[data-slider-inner]') as HTMLElement
    if (!inner) return

    const currentSpeed = isHovered && speedOnHover !== undefined ? speedOnHover : speed
    const duration = inner.scrollWidth / currentSpeed

    inner.style.animationDuration = `${duration}s`
    inner.style.animationDirection = reverse ? 'reverse' : 'normal'
  }, [speed, speedOnHover, reverse, isHovered])

  return (
    <div
      ref={ref}
      className={cn('overflow-hidden', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        data-slider-inner
        className="flex w-max animate-slide"
        style={{ gap: `${gap}px` }}
      >
        {children}
        {children}
      </div>
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide linear infinite;
        }
      `}</style>
    </div>
  )
}
