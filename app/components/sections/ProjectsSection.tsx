// app/components/sections/ProjectsSection.tsx
export default function ProjectsSection() {
  const projects = [
    {
      title: "DrawTeX",
      url: "https://www.drawtex.io/",
      description: "DrawTeX is a LaTeX symbol recognizer",
    },
    {
      title: "Digital Arts and Humanities Capstone: Digital Portfolio",
      url: "https://hannahpmoran.dgah.sites.carleton.edu/",
      description:
        "Interactive web portfolio with motion design and 3D elements.",
    },
    {
      title: "Intercepted Radio Communication in World War II",
      url: "https://dgah-210-carleton.hub.arcgis.com/apps/79748b5cb7dc450689365a05b3743d94/explore",
      description: "Interactive map of German naval intelligence from D-Day.",
    },
    {
      title: "Gentrification in Atlanta: A Study of Bias in Data Visualization",
      url: "https://observablehq.com/d/70ad9ce8827add61",
      description:
        "Data visualization exploring bias in gentrification narratives.",
    },
  ];

  return (
    <section id="projects" className="bg-background pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-left space-y-8">
            {/* Section Title */}
            <h1 className="text-lg font-light text-muted-foreground">
              Projects
            </h1>

            {/* Projects List */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-base font-light underline hover:no-underline transition-all duration-200 text-foreground"
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
                  <p className="text-base font-light text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
