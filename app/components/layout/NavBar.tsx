// app/components/layout/NavBar.tsx
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!navRef.current) return

    const navbar = navRef.current

    gsap.set(navbar, { 
      y: '100%',
      opacity: 0 
    })

    ScrollTrigger.create({
      trigger: 'body',
      start: 'top -100px', 
      end: 'bottom top',
      onEnter: () => {
        gsap.to(navbar, {
          y: '0%',
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        })
      },
      onLeaveBack: () => {
        gsap.to(navbar, {
          y: '100%',
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <header 
      ref={navRef}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <nav className="bg-background/90 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-8">
          <a 
            href="#landing" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-tinos italic"
          >
            home
          </a>
          <a 
            href="#projects" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-tinos italic"
          >
            projects
          </a>
          <a 
            href="#cv" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-tinos italic"
          >
            cv
          </a>
        </div>
      </nav>
    </header>
  )
}