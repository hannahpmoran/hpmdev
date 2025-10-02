// app/components/sections/LandingSection.tsx
export default function LandingSection() {
  return (
    <section
      id="landing"
      className="min-h-[75vh] bg-background flex items-center justify-center pt-48 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-left space-y-8">
            {/* Header Group */}
            <div className="space-y-2">
              <h1 className="text-2xl font-light text-foreground">
                Hannah P Moran
              </h1>
              <h2 className="text-base font-medium text-foreground font-tinos">
                Developer
              </h2>
            </div>

            {/* About Me */}
            <div className="space-y-4">
              <p className="font-light text-base text-muted-foreground leading-relaxed max-w-2xl">
                <strong>Design has been a part of me as long as I can remember</strong>, and
                growing up as technology rapidly developed allowed me to express
                myself through the technology itself.
              </p>
              <p className="font-light text-base text-muted-foreground leading-relaxed max-w-2xl">
                Following my curiosity at a small liberal arts college, Computer
                Science was not where I expected to find myself. But it provided
                the perfect blend of creativity and problem solving that I
                enjoyed working through so much. Web development has become my
                craft, and the evolving challenges of each project keep me
                excited every day.
              </p>
            </div>

            {/* Contact */}
            <p className="font-extralight text-sm text-muted-foreground/70 leading-relaxed max-w-2xl font-tinos">
              Feel free to contact me on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:no-underline transition-all duration-200 text-foreground/70"
                href="https://www.linkedin.com/in/hannah-p-moran/"
              >
                Linkedin
              </a>
              {" "}:)
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}