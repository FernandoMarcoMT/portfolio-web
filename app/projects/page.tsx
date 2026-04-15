import Image from "next/image";
import Link from "next/link";
import { Navbar, FooterCTA } from "../components";
import { projects } from "./projectData";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28">
        <section className="relative overflow-hidden border-b border-white/10 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              Projects
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Selected work with details, visuals, and links
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Click a project from the homepage to jump here. Each section includes the main details,
              a gallery of images, and any available live links.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="space-y-14 sm:space-y-20">
            {projects.map((project, index) => (
              <article
                key={project.id}
                id={project.slug}
                className="scroll-mt-28 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8 lg:p-10"
              >
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {project.role} • {project.techStack}
                    </p>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300">
                      {project.summary}
                    </p>
                  </div>

                  <div className={`h-1 w-32 rounded-full bg-linear-to-r ${project.accent}`} />
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70">
                      <div className="relative aspect-16/10">
                        <Image
                          src={project.galleryImages[0]}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.galleryImages.slice(1).map((image, imageIndex) => (
                        <div
                          key={image}
                          className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} image ${imageIndex + 2}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-slate-950/80 p-6">
                    <div>
                      <h3 className="text-lg font-bold text-white">Highlights</h3>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className={`mt-2 h-2 w-2 shrink-0 rounded-full bg-linear-to-r ${project.accent}`} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      {project.link && project.link !== "#" && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-orange-400 to-red-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.01]"
                        >
                          {project.linkLabel || "Visit Link"}
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      )}

                      {project.secondaryLink && (
                        <Link
                          href={project.secondaryLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-orange-400/40 hover:bg-white/10"
                        >
                          {project.secondaryLinkLabel || "Visit Second Link"}
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <FooterCTA />
    </div>
  );
}
