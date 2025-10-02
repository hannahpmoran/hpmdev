// app/page.tsx
import NavBar from './components/layout/NavBar'
import LandingSection from './components/sections/LandingSection'
import ProjectsSection from './components/sections/ProjectsSection'
import CVSection from './components/sections/CVSection'

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <main>
        <LandingSection />
        <ProjectsSection />
        {/* <CVSection /> */}
      </main>
    </>
  )
}
