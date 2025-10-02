// app/components/sections/CVSection.tsx

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  dateRange: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institution: string;
  dateRange: string;
  additionalInfo?: string;
}

export default function CVSection() {
  const workExperiences: WorkExperience[] = [
    {
      title: "Junior Developer",
      company: "Nagios Enterprises",
      location: "Saint Paul, MN",
      dateRange: "January 2025 - June 2025",
      responsibilities: [
        "Worked on a full-stack product rewrite using React/TypeScript for the frontend and Laravel/MySQL for the backend.",
        "Ranked #1 among junior developers in Nagios XI sbug resolution with a 100% QA pass rate."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Best Buy",
      location: "Richfield, MN",
      dateRange: "June 2023 - August 2023",
      responsibilities: [
        "Developed on an enterprise application serving 30,000+ employees using Java Springboot and React/TypeScript.",
        "Worked with international development teams in an Agile environment."
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Hack4Impact",
      location: "Northfield, MN",
      dateRange: "September 2022 - June 2024",
      responsibilities: [
        "Created high-fidelity designs and prototypes in Figma.",
        "Led user research initiatives and implemented WCAG accessibility standards."
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: "Bachelor of Arts in Computer Science",
      institution: "Carleton College",
      dateRange: "2020 - 2024",
      additionalInfo: "Minor in Digital Arts and Humanities"
    },
    {
      degree: "Study Abroad Program",
      institution: "[University Name]", // Replace with actual university
      dateRange: "[Semester/Year]", // Replace with actual dates
      additionalInfo: "[Program Focus/Description]" // Replace with program details
    }
  ];

  return (
    <section id="cv" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-left space-y-8">
            {/* Section Title */}
            <h1 className="text-xl font-bold text-foreground">
              Curriculum Vitae
            </h1>

            {/* Experience Section */}
            <div className="space-y-6">
              {workExperiences.map((experience, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-medium text-foreground font-tinos">
                      {experience.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {experience.dateRange}
                    </span>
                  </div>
                  <p className="text-sm text-foreground">
                    {experience.company}, {experience.location}
                  </p>
                  <ul className="space-y-2 ml-4">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-sm text-muted-foreground leading-relaxed flex">
                        <span className="mr-2">-</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold text-foreground">Education</h1>
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-medium text-foreground font-tinos">
                      {edu.degree}
                    </h3>
                    <span className="text-base text-muted-foreground">
                      {edu.dateRange}
                    </span>
                  </div>
                  <p className="text-sm text-foreground">{edu.institution}</p>
                  {edu.additionalInfo && (
                    <p className="text-sm text-muted-foreground">
                      {edu.additionalInfo}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}