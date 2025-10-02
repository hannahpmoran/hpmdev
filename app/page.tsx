// app/page.tsx
import { Metadata } from 'next'

import NavBar from './components/layout/NavBar'
import LandingSection from './components/sections/LandingSection'
import ProjectsSection from './components/sections/ProjectsSection'
import CVSection from './components/sections/CVSection'

export const metadata: Metadata = {
  title: 'Hannah Patricia Moran', // Replace with your actual name
  description: 'Hannah Patricia Moran\'s Portfolio', // Optional but recommended
}

export default function Home() {
  return (
    <>
      <main>
        <LandingSection />
        <ProjectsSection />
      </main>
    </>
  )
}
