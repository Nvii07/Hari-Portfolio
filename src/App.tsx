import { useEffect, useState } from "react"
import {
  EDUCATION,
  EXPERIENCE,
  PORTRAIT_URL,
  PROFILE,
  SKILLS,
  WORKS,
  type WorkItem,
} from "@/data/portfolio"

type Filter = "All" | WorkItem["category"]

export default function App() {
  const [dark, setDark] = useState(false)
  const [filter, setFilter] = useState<Filter>("All")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  const filtered =
    filter === "All" ? WORKS : WORKS.filter((w) => w.category === filter)

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null)
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length))
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + filtered.length) % filtered.length,
        )
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [activeIndex, filtered.length])

  const copyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const activeWork = activeIndex !== null ? filtered[activeIndex] : null

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] transition-colors duration-300">
      {/* Sticky Frosted Glass Header */}
      <header className="sticky top-4 z-40 mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--rule)] bg-[var(--surface)]/75 px-4 py-2.5 shadow-sm backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={PORTRAIT_URL}
              alt={PROFILE.name}
              className="h-8 w-8 rounded-full object-cover ring-1 ring-[var(--rule)]"
            />
            <span className="font-display text-sm font-bold tracking-tight sm:text-base">
              {PROFILE.name}
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
            <a href="#works" className="transition hover:text-[var(--ink)]">
              Works
            </a>
            <a href="#experience" className="transition hover:text-[var(--ink)]">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-[var(--ink)]">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="font-mono-label rounded-lg border border-[var(--rule)] px-2.5 py-1.5 text-[11px] uppercase tracking-wider text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              {dark ? "Light" : "Dark"}
            </button>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-lg bg-[var(--lime)] px-3.5 py-1.5 text-xs font-semibold text-[#111214] transition hover:brightness-95"
            >
              Email me
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:pt-16">
        {/* Hero */}
        <section className="grid items-center gap-10 border-b border-[var(--rule)] pb-14 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="font-mono-label inline-flex items-center gap-2 rounded-full border border-[var(--rule)] bg-[var(--surface)] px-3 py-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {PROFILE.title} · {PROFILE.location}
            </div>

            <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              Matchday visuals built for speed &amp; brand.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {PROFILE.summary}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#works"
                className="rounded-xl bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--bg)] transition hover:opacity-90"
              >
                Explore Works ({WORKS.length})
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-xl border border-[var(--rule)] bg-[var(--surface)] px-5 py-3 text-sm font-medium transition hover:border-[var(--ink)]"
              >
                {PROFILE.email}
              </a>
              <a
                href="tel:+919003821751"
                className="font-mono-label rounded-xl border border-[var(--rule)] px-4 py-3 text-xs tracking-wide text-[var(--muted)] transition hover:text-[var(--ink)]"
              >
                {PROFILE.phone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--rule)] pt-6">
              <div>
                <p className="font-display text-2xl font-bold sm:text-3xl">4+</p>
                <p className="font-mono-label mt-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold sm:text-3xl">
                  {WORKS.length}
                </p>
                <p className="font-mono-label mt-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
                  Featured Works
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold sm:text-3xl">
                  Ps · Lr
                </p>
                <p className="font-mono-label mt-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
                  Core Stack
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-[var(--rule)] bg-[var(--surface)] p-3 shadow-xl">
              <img
                src={PORTRAIT_URL}
                alt={PROFILE.name}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="mt-3 flex items-center justify-between px-2 pb-1">
                <div>
                  <p className="font-display text-sm font-bold">
                    {PROFILE.name}
                  </p>
                  <p className="text-xs text-[var(--muted)]">
                    Bengaluru FC | JSW Sports
                  </p>
                </div>
                <span className="font-mono-label rounded-md bg-[var(--lime)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#111214]">
                  Jan 2025 – Present
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Works Gallery */}
        <section id="works" className="border-b border-[var(--rule)] py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono-label text-xs uppercase tracking-widest text-[var(--accent)]">
                Selected Portfolio
              </p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Matchday &amp; Campaign Works
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(
                [
                  ["All", `All (${WORKS.length})`],
                  ["Matchday & Club", "Matchday & Club (25)"],
                  ["Campaign & Wide", "Campaign & Wide (8)"],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setFilter(key)
                    setActiveIndex(null)
                  }}
                  className={`font-mono-label rounded-lg px-3.5 py-2 text-xs uppercase tracking-wider transition ${
                    filter === key
                      ? "bg-[var(--ink)] text-[var(--bg)]"
                      : "border border-[var(--rule)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
            {filtered.map((work, idx) => (
              <button
                key={work.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-[var(--rule)] bg-[var(--surface)] text-left transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <img
                  src={work.src}
                  alt={work.title}
                  loading="lazy"
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="flex items-center justify-between gap-2 px-3.5 py-2.5">
                  <span className="truncate text-xs font-medium">
                    {work.title}
                  </span>
                  <span className="font-mono-label shrink-0 text-[10px] uppercase tracking-wider text-[var(--muted)]">
                    {work.aspect === "portrait" ? "4:5" : "4:3"}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Employment History */}
        <section id="experience" className="border-b border-[var(--rule)] py-16">
          <p className="font-mono-label text-xs uppercase tracking-widest text-[var(--accent)]">
            Curriculum Vitae
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Employment History
          </h2>

          <div className="mt-8 divide-y divide-[var(--rule)] border-y border-[var(--rule)]">
            {EXPERIENCE.map((job) => (
              <article
                key={job.company + job.period}
                className="grid gap-6 py-8 md:grid-cols-[300px_1fr]"
              >
                <div>
                  <span className="font-mono-label inline-block rounded-md bg-[var(--surface-muted)] px-2.5 py-1 text-[11px] uppercase tracking-wider text-[var(--muted)]">
                    {job.period}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-bold tracking-tight">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium">{job.role}</p>
                  <p className="font-mono-label mt-1 text-xs text-[var(--muted)]">
                    {job.location}
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm leading-relaxed text-[var(--muted)] sm:text-[15px]">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & Education */}
        <section
          id="skills"
          className="grid gap-10 border-b border-[var(--rule)] py-16 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="font-mono-label text-xs uppercase tracking-widest text-[var(--accent)]">
              Capabilities
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight">
              Skills &amp; Tools
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-[var(--rule)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium transition hover:border-[var(--ink)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-mono-label text-xs uppercase tracking-widest text-[var(--accent)]">
              Education &amp; Referees
            </p>
            <div className="rounded-2xl border border-[var(--rule)] bg-[var(--surface)] p-6">
              <p className="font-mono-label text-xs uppercase tracking-wider text-[var(--muted)]">
                {EDUCATION.period}
              </p>
              <h3 className="font-display mt-2 text-lg font-bold">
                {EDUCATION.institution}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {EDUCATION.degree}
              </p>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-[var(--rule)] bg-[var(--surface)] px-6 py-4">
              <span className="font-mono-label text-xs uppercase tracking-wider text-[var(--muted)]">
                Referees
              </span>
              <span className="text-sm font-medium">Available on Request</span>
            </div>
          </div>
        </section>

        {/* Contact & Footer */}
        <section id="contact" className="pt-16">
          <div className="rounded-3xl border border-[var(--rule)] bg-[var(--surface)] p-8 sm:p-12">
            <p className="font-mono-label text-xs uppercase tracking-widest text-[var(--accent)]">
              Get in Touch
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s create something sharp.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Available for sports design, matchday campaigns, social media
              systems, and retouching collaborations.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-xl bg-[var(--lime)] px-5 py-3 text-sm font-semibold text-[#111214] transition hover:brightness-95"
              >
                {PROFILE.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="font-mono-label rounded-xl border border-[var(--rule)] px-4 py-3 text-xs uppercase tracking-wider transition hover:border-[var(--ink)]"
              >
                {copied ? "Copied!" : "Copy email"}
              </button>
              <a
                href="tel:+919003821751"
                className="font-mono-label rounded-xl border border-[var(--rule)] px-4 py-3 text-xs uppercase tracking-wider transition hover:border-[var(--ink)]"
              >
                {PROFILE.phone}
              </a>
            </div>
          </div>

          <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--muted)]">
            <span>
              © 2026 {PROFILE.name} · {PROFILE.title}
            </span>
            <span className="font-mono-label uppercase tracking-wider">
              {PROFILE.location}
            </span>
          </footer>
        </section>
      </main>

      {/* Lightbox Modal */}
      {activeWork && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeWork.title}
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] max-w-4xl flex-col items-center gap-3"
          >
            <img
              src={activeWork.src}
              alt={activeWork.title}
              className="max-h-[82vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <div className="flex w-full items-center justify-between gap-4 text-white">
              <span className="text-sm font-medium">{activeWork.title}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (activeIndex - 1 + filtered.length) % filtered.length,
                    )
                  }
                  className="font-mono-label rounded-lg border border-white/25 px-3 py-1.5 text-xs hover:bg-white/10"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex + 1) % filtered.length)
                  }
                  className="font-mono-label rounded-lg border border-white/25 px-3 py-1.5 text-xs hover:bg-white/10"
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="font-mono-label rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
