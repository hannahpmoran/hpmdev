// app/components/sections/LandingSection.tsx

const projects = [
  {
    title: "DrawTeX",
    url: "https://www.drawtex.io/",
    description: "LaTeX symbol recognizer",
  },
  {
    title: "Digital Portfolio",
    url: "https://hannahpmoran.dgah.sites.carleton.edu/",
    description: "Interactive portfolio with motion design and 3D",
  },
  {
    title: "Gentrification in Atlanta",
    url: "https://observablehq.com/d/70ad9ce8827add61",
    description: "Exploring bias in data visualization",
  },
  {
    title: "WWII Radio Intelligence",
    url: "https://dgah-210-carleton.hub.arcgis.com/apps/79748b5cb7dc450689365a05b3743d94/explore",
    description: "Map of German naval intelligence from D-Day",
  },
];

import { Separator } from "@/components/ui/separator";

export default function LandingSection() {
  return (
    <section
      id="landing"
      className="min-h-[75vh] bg-background flex items-center justify-center "
    >
      {/* Page Layout for ENTIRE PAGE */}
      <div className="container mx-auto max-w-3xl pt-8 md:pt-16 pb-10 px-4">
        {/* Landing Section */}
        <div className="text-left space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="font-tinos text-2xl font-light text-foreground tracking-tight">
              Hannah
            </h1>
            <h2 className="text-sm font-normal text-muted-foreground">
              23 years old • she/her
            </h2>
          </div>

          {/* About Me */}
          <div className="space-y-8">
            <p className="font-normal text-base text-muted-foreground leading-relaxed ">
              I currently work on{" "}
              <a
                href="https://www.securian.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-base underline underline-offset-4 hover:no-underline transition-all duration-200 text-foreground"
              >
                Securian Financial
              </a>
              's Website Content Management team as an Engineering Analyst.
            </p>
            <p className="font-normal text-base text-muted-foreground leading-relaxed ">
              Some things about me:
            </p>
            <ul className="list-disc pl-8 space-y-1">
              <li className="font-normal text-base text-muted-foreground leading-relaxed ">
                Born in Voorhees, New Jersey, mostly grew up in North East,
                Maryland
              </li>
              <li className="font-normal text-base text-muted-foreground leading-relaxed ">
                I moved to Northfield, Minnesota in 2020 for CS at Carleton
                College
              </li>
              <li className="font-normal text-base text-muted-foreground leading-relaxed ">
                Studied Cryptography abroad at Cambrige for a semester
              </li>
              <li className="font-normal text-base text-muted-foreground leading-relaxed ">
                Now live and work in Saint Paul, Minnesota
              </li>
            </ul>
          </div>
        </div>
        {/* Seperator */}
        <Separator className="my-8" orientation="horizontal" />
        <div className="space-y-8">
          <h2 className="text-sm font-normal text-muted-foreground">
            Projects
          </h2>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-base underline underline-offset-4 hover:no-underline transition-all duration-200 text-foreground"
                  >
                    {project.title}
                  </a>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-normal text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Seperator */}
        <Separator className="my-8" orientation="horizontal" />
        {/* Contact */}
        <div className="space-y-8">
          <h2 className="text-sm font-normal text-muted-foreground">Contact</h2>
          <p className="font-normal text-base text-muted-foreground leading-relaxed">
            Reach me at{" "}
            <a
              href="https://www.linkedin.com/in/hannah-p-moran/"
              className="font-normal text-base underline underline-offset-4 hover:no-underline transition-all duration-200 text-foreground"
            >
              @hannahpmoran
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
